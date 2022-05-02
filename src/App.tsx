import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Stepper from './Stepper';

function App() {
  const [step, setStep] = useState(1)

  const step1 = (
    <div className='text-left'>
      <h3 className='text-center'>
        The Step One
      </h3>
      <label>
        Field One
      </label>
      <input type="text" className='form-control' />
      <label>
        Field Two
      </label>
      <input type="text" className='form-control' />
      <label>
        Field Three
      </label>
      <input type="text" className='form-control' />
    </div>
  )

  const step2 = (
    <div className='text-left'>
      <h3 className='text-center'>
        The Step Two
      </h3>
      <label>
        Field Four
      </label>
      <input type="text" className='form-control' />
      <label>
        Field Five
      </label>
      <input type="text" className='form-control' />
      <label>
        Field Six
      </label>
      <textarea name="" id="" cols={30} rows={10} className="form-control"></textarea>
    </div>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className='stepsContainer'>
          <Stepper
            currentStep={step}
            steps={[
              step1,
              step2
            ]}
          />

          <div>
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
            >
              Prev
            </button>
            <button
              onClick={() => setStep(step + 1)}
              disabled={step === 2}
            >
              Next
            </button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
