import { Questions } from '@/components/ui/questions'
import { cn } from '@/lib/utils'
import { headers } from 'next/headers'
import { questions } from '../../../sample.json'

export type AnswerKey = 'a' | 'b' | 'c' | 'd'

export interface Question {
  id: string;
  text: string;
  answers: Record<AnswerKey, string>;
  correctAnswer: string;
}

async function fetchQuestions(): Promise<Question[]> {
  const host = headers().get("host");
  const res = await fetch(`http://${host}/api/questions`)
  const json = await res.json()
  return json.questions;
}

const QuizPage = async () => {
  const questions = await fetchQuestions();
  console.log(questions)

  return (
    <section>
      <Progress />
      <Questions questions={questions} />
    </section>
  )
}

// TODO: improve component


const currentIdx = 5;
function Progress() {
  return (
    <section className='flex justify-center gap-2 py-4 mb-8 bg-gray-100'>
      {/* TODO: I want to ideally generate an id alongside */}
      {questions.map((question, idx) => (
        <div key={idx} className={cn(
          'h-1 w-4 xl:h-2 bg-gray-300 rounded-full',
          idx <= currentIdx && 'bg-primary'
        )} />
      ))}
    </section>
  )
}

export default QuizPage