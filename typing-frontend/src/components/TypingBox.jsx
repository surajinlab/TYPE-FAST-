import { useEffect, useState } from 'react'
import axios from 'axios'
import Result from './Result'
import Leaderboard from './Leaderboard'

const paragraph = `The Demon Slayer Corps prepares for a final confrontation as Tamayo works on a serum. Muzan launches a preemptive assault, prompting Kagaya to sacrifice himself in a suicide attack. The Hashira engage Muzan, but he traps them within the Infinity Castle, where they must battle the remaining Upper Ranks. Through great sacrifice, the demons Akaza, Doma, and Kokushibo are defeated. Muzan kills Tamayo but is severely weakened by the poison she implanted in him. Forced above ground, a desperate battle ensues as the remaining Demon Slayers fight to hold him until sunrise.`

function TypingBox() {

  const [text, setText] = useState('')
  const [timeLeft, setTimeLeft] = useState(60)
  const [isStarted, setIsStarted] = useState(false)
  const [result, setResult] = useState(null)
  const [username, setUsername] = useState('')

  useEffect(() => {

    let timer

    if (isStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    }

    if (timeLeft === 0) {
      calculateResult()
    }

    return () => clearInterval(timer)

  }, [isStarted, timeLeft])

  const startTyping = () => {
    if (!isStarted) {
      setIsStarted(true)
    }
  }

  const calculateResult = async () => {

    const wordsTyped = text.trim().split(' ').length
    const wpm = wordsTyped

    let correctChars = 0

    for (let i = 0; i < text.length; i++) {
      if (text[i] === paragraph[i]) {
        correctChars++
      }
    }

    const accuracy = ((correctChars / paragraph.length) * 100).toFixed(2)

    const finalResult = {
      wpm,
      accuracy
    }

    setResult(finalResult)

    if (username !== '') {
      await axios.post('http://localhost:8080/api/scores', {
        username,
        wpm,
        accuracy
      })
    }
  }

  return (
    <div className="typing-box">

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="username-input"
      />

      <h3>Time Left: {timeLeft}s</h3>

      <div className="paragraph">
        {paragraph}
      </div>

      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          startTyping()
        }}
        disabled={timeLeft === 0}
        placeholder="Start typing here..."
      />

      {result && <Result result={result} />}

      <Leaderboard />

    </div>
  )
}

export default TypingBox