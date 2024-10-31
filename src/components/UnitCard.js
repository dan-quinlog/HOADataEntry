import { useRef, useEffect } from 'react';

const UnitCard = ({ unit, index, units, setUnits, locked }) => {
  const unitRef = useRef(null);

  useEffect(() => {
    if (index === units.length - 1 && !locked) {
      unitRef.current?.focus();
    }
  }, [index, units.length, locked]);
    const handleUnitChange = (e) => {
      const numericValue = e.target.value.replace(/\D/g, '');
      setUnits(units.map((u, i) => 
        i === index ? { ...u, unitNumber: numericValue } : u
      ));
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !locked) {
        setUnits([...units, { unitNumber: '' }]);
      }
    };

    const removeUnit = () => {
      const newUnits = units.filter((_, idx) => idx !== index);
      setUnits(newUnits);
    };

    return (
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Unit {index + 1}</h3>
          {!locked && (
            <button
              onClick={removeUnit}
              className="p-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          )}
        </div>
      
        <div className="mt-2">
          <input
            ref={unitRef}
            type="text"
            value={unit.unitNumber}
            onChange={handleUnitChange}
            onKeyPress={handleKeyPress}
            disabled={locked}
            className="p-2 border rounded-lg w-4/5"
            placeholder="Unit Number"
          />
        </div>
      </div>
    );
  };

export default UnitCard;