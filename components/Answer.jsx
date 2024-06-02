/**
 * Renders a component that displays a list of answer options for a quiz question.
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.answers - An array of answer options.
 * @param {string} props.questionId - The ID of the quiz question.
 * @returns {JSX.Element} The rendered component.
 */
'use client'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { FiRepeat } from 'react-icons/fi'
import { MdNearbyError } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import questions from '@/data/quiz.json'

export const Answer = ({ answers, questionId }) => {
  const [selected, setSelected] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selected) {
      setLoading(true)
      // Simulate fetching data from API by finding the question data from the JSON file
      const questionData = questions.data.find(question => question.id === questionId)
      // Simulate API response by setting data after a timeout
      setTimeout(() => {
        setLoading(false)
        setData(questionData)
      }, 1000)
    }
  }, [questionId, selected])

  // Function to get a random question ID
  const getRandomQuestionId = () => {
    const randomIndex = Math.floor(Math.random() * questions.data.length)
    return questions.data[randomIndex].id
  }

  const handleDoItAgain = () => {
    const randomQuestionId = getRandomQuestionId()
    setData({ random: randomQuestionId })
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {answers.map(item => {
          const isLoading = selected === item && loading
          const isCorrect = data && data.correct_answer === item
          const isWrong = selected === item && !isCorrect

          return (
            <li key={item}>
              <button
                disabled={data || loading}
                onClick={() => setSelected(item)}
                className={cn(
                  'p-2 rounded-md  items-center justify-between w-full flex text-sm font-semibold disabled:cursor-not-allowed transition-all',
                  isLoading && 'animate-pulse',
                  isWrong && 'bg-red-700',
                  isCorrect && 'outline text-green-500',
                )}
              >
                {item}
                {isCorrect && <FaCheck />}
                {isWrong && <MdNearbyError />}
              </button>
            </li>
          )
        })}
      </ul>
      {data?.random && (
        <Link legacyBehavior href={`/quiz/${data.random}`}>
          <a className="flex items-center gap-1 text-blue-400">
            <FiRepeat className="mt-1" />
            Next question
          </a>
        </Link>
      )}
      {!data?.random && (
        <button onClick={handleDoItAgain} className="flex items-center gap-1 text-blue-400">
          <FiRepeat className="mt-1" />
          Next question
        </button>
      )}
    </>
  )
}
