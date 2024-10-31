import { useRef, useEffect } from 'react';
const PaymentCard = ({ payment, index, payments, setPayments, locked }) => {
  const checkDateRef = useRef(null);
  const fields = [
    {
      name: 'checkDate',
      label: 'Check Date',
      required: true,
      type: 'date'
    },
    {
      name: 'checkNumber',
      label: 'Check Number',
      required: true
    },
    {
      name: 'checkAmount',
      label: 'Check Amount',
      required: true,
      isCurrency: true
    },
    {
      name: 'invoiceNumber',
      label: 'Invoice Number',
      required: true
    },
    {
      name: 'invoiceAmount',
      label: 'Invoice Amount',
      required: true,
      isCurrency: true
    }
  ];

  useEffect(() => {
    if (index === payments.length - 1 && !locked) {
      checkDateRef.current?.focus();
    }
  }, [index, payments.length, locked]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !locked) {
      setPayments([...payments, {
        checkDate: '', checkNumber: '', checkAmount: '',
        invoiceNumber: '', invoiceAmount: ''
      }]);
    }
  };

  const updatePayment = (field, value) => {
    setPayments(payments.map((p, i) =>
      i === index ? { ...p, [field.name]: String(value) } : p
    ));
  };

  const handleRemovePayment = () => {
    setPayments(payments.filter((_, i) => i !== index));
  };

  const formatCurrency = (value) => {
    const numericValue = value.replace(/[^\d.]/g, '');
    const parts = numericValue.split('.');
    if (parts[1]?.length > 2) {
      parts[1] = parts[1].slice(0, 2);
    }
    return parts.join('.');
  };

  const handleAmountChange = (field) => (e) => {
    const formattedValue = formatCurrency(e.target.value);
    setPayments(payments.map((p, i) =>
      i === index ? { ...p, [field]: formattedValue } : p
    ));
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setPayments(payments.map((p, i) =>
      i === index ? { ...p, checkDate: value } : p
    ));
  };

  // Helper function to check if a value is empty
  const isEmpty = (value) => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim() === '';
    if (typeof value === 'number') return false;
    return true;
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold mb-4">Payment {index + 1}</h3>

      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-end mt-2">
          {!locked && (
            <button
              onClick={handleRemovePayment}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          )}
        </div>
        {fields.map((field, fieldIndex) => (
          <div key={field.name} className="flex flex-col">
            <label className={`mb-1 ${field.required && isEmpty(payment[field.name])
                ? 'text-red-500'
                : 'text-gray-700'
              }`}>
              {field.label}{field.required && ' *'}
            </label>
            {field.isCurrency ? (
              <div className="relative">
                <span className="absolute left-3 top-2">$</span>
                <input
                  type="text"
                  value={payment[field.name]}
                  onChange={handleAmountChange(field.name)}
                  onKeyPress={handleKeyPress}
                  disabled={locked}
                  className={`p-2 pl-6 border rounded-lg w-full ${field.required && isEmpty(payment[field.name])
                      ? 'border-red-500'
                      : 'border-gray-300'
                    }`}
                  tabIndex={locked ? -1 : (index * fields.length) + fieldIndex + 1}
                />
              </div>
            ) : (
              <input
                ref={field.name === 'checkDate' ? checkDateRef : undefined}
                type={field.type || 'text'}
                value={payment[field.name]}
                onChange={field.name === 'checkDate' ? handleDateChange : (e) => updatePayment(field, e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={locked}
                className={`p-2 border rounded ${field.required && isEmpty(payment[field.name])
                    ? 'border-red-500'
                    : 'border-gray-300'
                  } ${field.name === 'checkDate' ? 'w-full' : ''}`}
                tabIndex={locked ? -1 : (index * fields.length) + fieldIndex + 1}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PaymentCard;