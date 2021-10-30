import axios from 'axios';
import './App.css';
import DisplayEmployee from './components/DisplayEmployee';
import { useState } from 'react';
import { render } from '@testing-library/react';

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};


function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    axios
      .get('https://randomuser.me/api?nat=en')
      .then((response) => response.data)
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get Employee</button>
    </div>
  );
}



export default App;
