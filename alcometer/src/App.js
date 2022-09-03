import './App.css';
import {useState} from "react"
function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [result, setResult] = useState(0)

  function calculate() {
    let Litres = bottles * 0.33
    let Grams = Litres * 8 * 4.5
    let Burning = weight / 10
    let GramsLeft = Grams - (Burning*time)

    if (gender === "male"){
      let Result = GramsLeft / (weight * 0.7)
      if (Result < 0){
        setResult(0)
      }
      else{
        setResult(Result)
      }
    }
    else if (gender === "female"){
      let Result = GramsLeft / (weight * 0.6)
      if (Result < 0){
        setResult(0)
      }
      else{
        setResult(Result)
      }
    }
    
    
  }

  return (
    <form>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight (e.target.value)}/>
      </div> 
      <div>
        <label>Bottles</label>
        <select type="number" value={bottles} onChange={e => setBottles (e.target.value)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select type="number" value={time} onChange={e => setTime (e.target.value)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" onClick={e => setGender (e.target.value)}/>
        <label>Male</label> 
        <input type="radio" name="gender" value="female" onClick={e => setGender (e.target.value)}/>
        <label>Female</label>
      </div>
      <br/>
      <output>{result.toFixed(2)}</output>
      
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>
      
    </form>
  );
}

export default App;