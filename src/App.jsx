import {useState} from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';


function App() {
    const [investment, setInvestment] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 5,
        duration: 10
    })

    function handleChange (investmentType, newNumber){
        setInvestment(prevInvestment => {
            return {
                ...prevInvestment,
                [investmentType]: newNumber
            }
        })
    }

  return (
    <>
      <Header />
      <UserInput 
        changeOn={handleChange} 
        userInput={investment}
      />
    </>

  );
}

export default App
