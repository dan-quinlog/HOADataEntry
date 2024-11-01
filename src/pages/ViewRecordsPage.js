import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LIST_OWNERS, GET_OWNER_DETAILS } from '../graphql/queries';
import { DELETE_OWNER, DELETE_UNIT, DELETE_PAYMENT } from '../graphql/mutations';

const ViewRecordsPage = () => {
  const [expandedOwner, setExpandedOwner] = useState(null);
  const [confirmationText, setConfirmationText] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(LIST_OWNERS);

  const { data: ownerDetails } = useQuery(GET_OWNER_DETAILS, {
    variables: { id: expandedOwner },
    skip: !expandedOwner,
  });

  const [deleteOwnerMutation] = useMutation(DELETE_OWNER);
  const [deleteUnitMutation] = useMutation(DELETE_UNIT);
  const [deletePaymentMutation] = useMutation(DELETE_PAYMENT);

  const handleDelete = async (isResubmit) => {
    if (confirmationText !== 'confirm') return;

    try {
      // Delete all associated units
      const unitDeletions = selectedOwner.units.items.map(unit =>
        deleteUnitMutation({
          variables: { input: { id: unit.id } }
        })
      );

      // Delete all associated payments
      const paymentDeletions = selectedOwner.payments.items.map(payment =>
        deletePaymentMutation({
          variables: { input: { id: payment.id } }
        })
      );

      // Wait for all deletions to complete
      await Promise.all([...unitDeletions, ...paymentDeletions]);

      // Delete the owner
      await deleteOwnerMutation({
        variables: { input: { id: selectedOwner.id } },
        refetchQueries: [{ query: LIST_OWNERS }]
      });

      if (isResubmit) {
        navigate('/data-entry', {
          state: {
            owner: {
              name: selectedOwner.name,
              address1: selectedOwner.address1,
              address2: selectedOwner.address2,
              city: selectedOwner.city,
              state: selectedOwner.state,
              zip: selectedOwner.zip,
              email: selectedOwner.email,
              phone: selectedOwner.phone
            },
            units: selectedOwner.units.items,
            payments: selectedOwner.payments.items
          }
        });
      }
    } catch (error) {
      console.error('Delete failed:', error);
    }
    setShowConfirmDialog(false);
    setConfirmationText('');
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      {data?.listOwners.items.map(owner => (
        <div key={owner.id} className="bg-white rounded shadow mb-4 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{owner.name}</h2>
              <p>{owner.address1}</p>
              <p>{owner.city}, {owner.state} {owner.zip}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setExpandedOwner(expandedOwner === owner.id ? null : owner.id);
                }}
                className="p-2 bg-blue-500 text-white rounded"
              >
                {expandedOwner === owner.id ? '▼' : '▶'}
              </button>
              <button
                onClick={() => {
                  setSelectedOwner(owner);
                  setShowConfirmDialog(true);
                }}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete Records
              </button>
            </div>
          </div>
            {expandedOwner === owner.id && ownerDetails?.getOwner && (
              <div className="mt-4">
                <h3 className="font-bold mt-2">Units:</h3>
                {ownerDetails.getOwner.units?.items?.map(unit => (
                  <div key={unit.id} className="ml-4 p-2 bg-gray-100 rounded mt-1">
                    Unit Number: {unit.unitNumber}
                  </div>
                ))}

                <h3 className="font-bold mt-4">Payments:</h3>
                {ownerDetails.getOwner.payments?.items?.map(payment => (
                  <div key={payment.id} className="ml-4 p-2 bg-gray-100 rounded mt-1">
                    <p>Check #{payment.checkNumber} - ${payment.checkAmount}</p>
                    <p>Date: {payment.checkDate}</p>
                    <p>Invoice #{payment.invoiceNumber} - ${payment.invoiceAmount}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
      ))}

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded max-w-md">
            <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
            <p>Type 'confirm' to proceed with deletion:</p>
            <input
              type="text"
              value={confirmationText}
              onChange={(e) => setConfirmationText(e.target.value)}
              className="w-full p-2 border rounded mt-2"
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  setShowConfirmDialog(false);
                  setConfirmationText('');
                }}
                className="p-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(false)}
                className="p-2 bg-red-500 text-white rounded"
                disabled={confirmationText !== 'confirm'}
              >
                Delete
              </button>
              <button
                onClick={() => handleDelete(true)}
                className="p-2 bg-blue-500 text-white rounded"
                disabled={confirmationText !== 'confirm'}
              >
                Re-submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewRecordsPage;
