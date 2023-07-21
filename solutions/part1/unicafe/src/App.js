import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine
          text="average"
          value={(good - bad) / (good + neutral + bad)}
        />
        <StatisticLine
          text="positive"
          value={`${(good * 100) / (good + neutral + bad)} %`}
        />
      </tbody>
    </table>
  );
};

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h2>give feedback</h2>
      <Button text={`good`} handleClick={() => setGood((prev) => prev + 1)} />
      <Button
        text={`neutral`}
        handleClick={() => setNeutral((prev) => prev + 1)}
      />
      <Button text={`bad`} handleClick={() => setBad((prev) => prev + 1)} />
      <h2>statistics</h2>
      {good + neutral + bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div>No feedback given</div>
      )}
    </>
  );
};

export default App;
