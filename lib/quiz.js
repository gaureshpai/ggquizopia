import { API_ENDPOINT } from '@/utils/endpoint'
import questions from '@/data/quiz.json'

export async function GET(req, { params }) {

  }

export async function getQuizQuestion(id) {
  try {
    const question = questions.data.find(item => item.id === params.id)

    if (!question) {
      return null;
    }

    const { correct_answer, ...rest } = question

    return ({
      question: rest,
    })
  } catch (error) {
    return null;
  }
}

export async function getRandomQuizQuestion() {
    
  try {
    const random = Math.floor(Math.random() * questions.data.length)
    return ({
      randomQuestion: questions.data[random].id,
    })
  } catch (error) {
    return null;
  }

}
