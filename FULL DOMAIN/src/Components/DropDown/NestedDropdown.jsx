// import React, { useState } from 'react';

// const NestedDropdown = () => {
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   const data = {
//     'USA': ['New York', 'Los Angeles', 'Chicago'],
//     'India': ['Mumbai', 'Delhi', 'Bangalore'],
//     'UK': ['London', 'Manchester', 'Birmingham']
//   };

//   return (
//     <div>
//         <select value={selectedCountry} onChange={(e)=>{
//             setSelectedCountry(e.target.value)
//             setSelectedCity('')
//         }}>
//             <option value="">Select Country</option>
//             {Object.keys(data).map((c)=>(
//                 <option key={c} value={c}>{c}</option>
//             ))}
//         </select>
//         {selectedCountry && (
//             <select value={selectedCity} onChange={(e)=>{
//                 setSelectedCity(e.target.value)
//             }}>
//                 <option value="">Select City</option>
//                 {data[selectedCountry].map((c)=>(
//                     <option key={c} value={c}>{c}</option>
//                 ))}
//             </select>
//         )}
//     </div>
//   );
// };

// export default NestedDropdown;








import React, { useState } from 'react';
import './NestedDropdown.css';

const NestedDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const data = {
    'USA': ['New York', 'Los Angeles', 'Chicago'],
    'India': ['Mumbai', 'Delhi', 'Bangalore'],
    'UK': ['London', 'Manchester', 'Birmingham']
  };

  return (
    <div className="dropdown-container">
      {/* Country Dropdown */}
      <div className="dropdown country-dropdown">
        <label>Country</label>
        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedCity('');
          }}
        >
          <option value="">Select Country</option>
          {Object.keys(data).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Nested City Dropdown */}
      {selectedCountry && (
        <div className="dropdown city-dropdown">
          <label>City</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select City</option>
            {data[selectedCountry].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Display selected */}
      {selectedCity && (
        <div className="result">
          You selected: <b>{selectedCountry}</b> → <b>{selectedCity}</b>
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;
