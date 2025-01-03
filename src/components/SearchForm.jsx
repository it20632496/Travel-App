import React, { useState } from 'react';

const SearchForm = () => {
  const [departure, setDeparture] = useState('PK');
  const [arrival, setArrival] = useState('DXB');
  const [date, setDate] = useState('2024-02-24');
  const [passengers, setPassengers] = useState(2);

  const handleSearch = () => {
    console.log({ departure, arrival, date, passengers });
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          placeholder="Departure City"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          placeholder="Arrival City"
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          placeholder="Passengers"
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 bg-purple-600 text-white p-2 rounded"
      >
        Search Flights
      </button>
    </div>
  );
};

export default SearchForm;
