import { useState } from 'react';
import './App.css';
import { SC, NC, UC, LC } from './data/PassChar';

function App() {
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [passLength, setPassLength] = useState(10)
  const [fpass, setFpass] = useState('')

  const createPassword = () => {
    let finalPass=''
    let charSet=""
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) {
        charSet += UC
      }
      if(lowercase){
        charSet += LC
      }
      if(numbers){
        charSet += NC
      }
      if(symbols){
        charSet += SC
      }
      for (let i=0;i<passLength;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFpass(finalPass);
      
    } else {
      alert("Select atleast one checkbox...")
    }
  }

  const copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="inputBtn">
          <input type="text" value={fpass} readOnly />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passwordLength">
          <label>Password Length</label>
          <input type="number" max={20} min={10} value={passLength} onChange={(e)=>setPassLength(e.target.value)} />
        </div>
        <div className="passwordLength">
          <label>Include uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>
        <div className="passwordLength">
          <label>Include lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>
        <div className="passwordLength">
          <label>Include numbers</label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
        </div>
        <div className="passwordLength">
          <label>Include symbols</label>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
        </div>
        < button className="btn" onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
