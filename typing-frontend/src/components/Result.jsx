function Result({ result }) {

  return (
    <div className="result-box">
      <h2>Result</h2>
      <p>WPM: {result.wpm}</p>
      <p>Accuracy: {result.accuracy}%</p>
    </div>
  )
}

export default Result