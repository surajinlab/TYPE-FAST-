import { useEffect, useState } from 'react'
import axios from 'axios'

function Leaderboard() {

  const [scores, setScores] = useState([])

  useEffect(() => {
    fetchLeaderboard()
  }, [])

  const fetchLeaderboard = async () => {
    const response = await axios.get('http://localhost:8080/api/scores/leaderboard')
    setScores(response.data)
  }

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>WPM</th>
            <th>Accuracy</th>
          </tr>
        </thead>

        <tbody>
          {scores.map((score) => (
            <tr key={score.id}>
              <td>{score.username}</td>
              <td>{score.wpm}</td>
              <td>{score.accuracy}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard