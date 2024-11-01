import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';import OwnerCard from '../components/OwnerCard';
import UnitCard from '../components/UnitCard';
import PaymentCard from '../components/PaymentCard';
import { useMutation } from '@apollo/client';
import { CREATE_OWNER, CREATE_UNIT, CREATE_PAYMENT } from '../graphql/mutations';


const DataEntryPage = () => {
  const location = useLocation();
  const [owner, setOwner] = useState({
    name: '', address1: '', address2: '', city: '',
    state: '', zip: '', email: '', phone: ''
  });

  const [units, setUnits] = useState([{ unitNumber: '' }]);

  const [payments, setPayments] = useState([{
    checkDate: '', checkNumber: '', checkAmount: '',
    invoiceNumber: '', invoiceAmount: ''
  }]);

  const [ownerLocked, setOwnerLocked] = useState(false);
  const [unitsLocked, setUnitsLocked] = useState(false);
  const [paymentsLocked, setPaymentsLocked] = useState(false);

  useEffect(() => {
    if (location.state) {
      setOwner(location.state.owner);
      setUnits(location.state.units);
      setPayments(location.state.payments);
      setOwnerLocked(true);
      setUnitsLocked(true);
      setPaymentsLocked(true);
    }
  }, [location]);

  const lastPaymentTabIndex = payments.length * 5;

  const [createOwner] = useMutation(CREATE_OWNER);
  const [createUnit] = useMutation(CREATE_UNIT);
  const [createPayment] = useMutation(CREATE_PAYMENT);

  const validatePayments = () => {
    return payments.every(payment =>
      String(payment.checkDate) !== '' &&
      String(payment.checkNumber) !== '' &&
      String(payment.checkAmount) !== '' &&
      String(payment.invoiceNumber) !== '' &&
      String(payment.invoiceAmount) !== ''
    );
  };

  const clearRecord = () => {
    setOwner({
      name: '', address1: '', address2: '', city: '',
      state: '', zip: '', email: '', phone: ''
    });
    setUnits([{ unitNumber: '' }]);
    setPayments([{
      checkDate: '', checkNumber: '', checkAmount: '',
      invoiceNumber: '', invoiceAmount: ''
    }]);
    setOwnerLocked(false);
    setUnitsLocked(false);
    setPaymentsLocked(false);
  };

  const handleLockUnits = () => {
    const filledUnits = units.filter(unit => unit.unitNumber.trim() !== '');
    if (filledUnits.length > 0) {
      setUnits(filledUnits);
      setUnitsLocked(!unitsLocked);
    }
  };  
    const validateDates = () => {
      return payments.every(payment => {
        const date = new Date(payment.checkDate);
        const year = date.getFullYear();
        return !isNaN(date) && year >= 1900 && year <= 2100;
      });
    };
      const handleSubmit = async () => {
        if (!validateDates()) {
          alert('Please enter valid dates (between years 1900-2100)');
          return;
        }

        try {
          const ownerResult = await createOwner({
            variables: {
              input: {
                name: owner.name,
                address1: owner.address1,
                address2: owner.address2,
                city: owner.city,
                state: owner.state,
                zip: owner.zip,
                email: owner.email || null,
                phone: owner.phone || null
              }
            }
          });

          const ownerId = ownerResult.data.createOwner.id;

          // Create units with owner relationship
          const unitPromises = units.map(unit => 
            createUnit({
              variables: {
                input: {
                  unitNumber: unit.unitNumber,
                  ownerUnitsId: ownerId
                }
              }
            })
          );

          // Create payments with owner relationship
          const paymentPromises = payments.map(payment =>
            createPayment({
              variables: {
                input: {
                  checkDate: payment.checkDate,
                  checkNumber: payment.checkNumber,
                  checkAmount: payment.checkAmount,
                  invoiceNumber: payment.invoiceNumber,
                  invoiceAmount: payment.invoiceAmount,
                  ownerPaymentsId: ownerId
                }
              }
            })
          );

          await Promise.all([...unitPromises, ...paymentPromises]);
          alert('Record created successfully!');
          clearRecord();
        } catch (error) {
          alert(`Error: ${error.message}`);
        }
  };  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <button
        onClick={clearRecord}
        className="w-full mb-6 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Clear Record
      </button>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <OwnerCard
            owner={owner}
            setOwner={setOwner}
            locked={ownerLocked}
            setLocked={setOwnerLocked}
          />
        </div>

        {ownerLocked && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="space-y-4">
              {units.map((unit, index) => (
                <UnitCard
                  key={index}
                  unit={unit}
                  index={index}
                  units={units}
                  setUnits={setUnits}
                  locked={unitsLocked}
                />
              ))}
              <div className="flex gap-2">
                {!unitsLocked && (
                  <button
                    onClick={() => setUnits([...units, { unitNumber: '' }])}
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Add Unit
                  </button>
                )}
                <button
                  onClick={handleLockUnits}
                  className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  {unitsLocked ? 'Unlock Units' : 'Lock Units'}
                </button>
              </div>
            </div>
          </div>
        )}

        {unitsLocked && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="space-y-4">
              {payments.map((payment, index) => (
                <PaymentCard
                  key={index}
                  payment={payment}
                  index={index}
                  payments={payments}
                  setPayments={setPayments}
                  locked={paymentsLocked}
                />
              ))}
              <div className="flex gap-2">
                {!paymentsLocked && (
                  <button
                    onClick={() => validatePayments() && setPayments([...payments, {
                      checkDate: '', checkNumber: '', checkAmount: '',
                      invoiceNumber: '', invoiceAmount: ''
                    }])}
                    className={`p-2 text-white rounded ${validatePayments()
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-400 cursor-not-allowed'
                      } transition-colors`}
                    disabled={!validatePayments()}
                    tabIndex={lastPaymentTabIndex + 1}
                  >
                    Add Payment
                  </button>
                )}
                <button
                  onClick={() => validatePayments() && setPaymentsLocked(!paymentsLocked)}
                  className={`p-2 text-white rounded ${validatePayments()
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gray-400 cursor-not-allowed'
                    } transition-colors`}
                  disabled={!validatePayments()}
                  tabIndex={lastPaymentTabIndex + 2}
                >
                  {paymentsLocked ? 'Unlock Payments' : 'Lock Payments'}
                </button>
              </div>
            </div>
          </div>
        )}
        {ownerLocked && unitsLocked && paymentsLocked && (
          <button
            onClick={handleSubmit}
            className="w-full p-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            tabIndex={lastPaymentTabIndex + 3}
          >
            Submit Record
          </button>
        )}
      </div>
    </div>
  );
};

export default DataEntryPage;

