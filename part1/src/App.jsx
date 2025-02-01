import { useState } from 'react'

const Display = props => <h1>{props.value}</h1>


const StatisticLine=({text,value})=>(
  <p>
    {text} {value}
  </p>
);

const Statistics = ({good,neutral,bad}) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : ((good - bad) / all).toFixed(2);
  const positive = all === 0 ? "0%" : ((good / all) * 100).toFixed(2) + "%";
  
  return (
    <div>
      <Display value="Statistics" />
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </div>
      )}
    </div>
  );
};


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood= newValue => {
    console.log('good', newValue)
    setGood(newValue)
  }
  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setNeutral(newValue)
  }
  const setToBad = newValue => {
    console.log('value now', newValue)
    setBad(newValue)
  }
  return (
    <div>
      <Display value={'give feedback'} />
      <Button handleClick={() => setToGood(good+1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>

    </div>
  )
}

export default App




























