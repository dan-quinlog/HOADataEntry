import { useRef, useEffect } from 'react';

const OwnerCard = ({ owner, setOwner, locked, setLocked }) => {
  const nameRef = useRef(null);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    return regex.test(email);
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setOwner({ ...owner, phone: formattedPhone });
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setOwner({ ...owner, email });
  };

  const fields = [
    { name: 'name', label: 'Name', required: true, ref: nameRef },
    { name: 'address1', label: 'Address 1', required: true },
    { name: 'address2', label: 'Address 2' },
    { name: 'city', label: 'City', required: true },
    { name: 'state', label: 'State', required: true },
    { name: 'zip', label: 'ZIP', required: true },
    {
      name: 'email',
      label: 'Email',
      required: false,
      validate: validateEmail,
      onChange: handleEmailChange,
      className: (value) => !value || validateEmail(value) ? 'border-gray-300' : 'border-red-500',
      labelClassName: (value) => !value || validateEmail(value) ? 'text-gray-700' : 'text-red-500'
    },
    {
      name: 'phone',
      label: 'Phone',
      required: false,
      onChange: handlePhoneChange,
      maxLength: 12,
      validate: (value) => !value || value.replace(/\D/g, '').length === 10,
      className: (value) => !value || value.replace(/\D/g, '').length === 10 ? 'border-gray-300' : 'border-red-500',
      labelClassName: (value) => !value || value.replace(/\D/g, '').length === 10 ? 'text-gray-700' : 'text-red-500'
    }
  ];
  useEffect(() => {
    if (!locked) {
      nameRef.current?.focus();
    }
  }, [locked]);

  const requiredFields = ['name', 'address1', 'city', 'state', 'zip'];

  const validateOwner = () => {
    return requiredFields.every(field => 
      owner[field] && owner[field].trim() !== ''
    );
  };

  const validateRequiredFields = () => {
    if (!validateOwner()) return false;
    if (owner.email && !validateEmail(owner.email)) return false;
    if (owner.phone && owner.phone.replace(/\D/g, '').length !== 10) return false;
    return true;
  };
  const attemptLock = () => {
    if (locked) {
      setLocked(false);
      return;
    }
    
    if (!validateRequiredFields()) {
      return;
    }
    setLocked(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      attemptLock();
    }
  };

  const handleLockClick = () => {
    attemptLock();
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Owner Information</h2>
        <button
          onClick={handleLockClick}
          className={`px-4 py-2 rounded-lg ${
            locked ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
          } text-white transition-colors`}
        >
          {locked ? 'Unlock Owner' : 'Lock Owner'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {fields.map((field, index) => (
          <div key={field.name} className="flex">
            <label className={`w-1/5 pt-2 font-medium ${
              field.labelClassName ? field.labelClassName(owner[field.name]) 
              : field.required && (!owner[field.name] || owner[field.name].trim() === '') 
              ? 'text-red-500' 
              : 'text-gray-700'
            }`}>
              {field.label}{field.required && ' *'}
            </label>
            <input
              ref={field.ref}
              type="text"
              value={owner[field.name]}
              onChange={field.onChange || ((e) => setOwner({ ...owner, [field.name]: e.target.value }))}
              onKeyPress={handleKeyPress}
              disabled={locked}
              className={`w-4/5 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 ${
                field.className ? field.className(owner[field.name])
                : field.required && (!owner[field.name] || owner[field.name].trim() === '')
                ? 'border-red-500'
                : 'border-gray-300'
              }`}
              tabIndex={locked ? -1 : index + 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerCard;