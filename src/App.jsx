import {useState} from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';


function App() {
    const [investment, setInvestment] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 5,
        duration: 10
    })

    const validInput = investment.duration >= 1;

    function handleChange (investmentType, newNumber){
        setInvestment(prevInvestment => {
            return {
                ...prevInvestment,
                [investmentType]: +newNumber
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
      {!validInput && <p className="center">Please enter a duration greater than zero</p>}
      {validInput && <Results input={investment}/>}
    </>

  );
}

export default App
