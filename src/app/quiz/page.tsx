import QuestionsPage from '@/components/QuestionsPage';
import { headers } from 'next/headers';

export type AnswerKey = 'a' | 'b' | 'c' | 'd'

export interface QuestionProps {
  id: number;
  text: string;
  answers: Record<AnswerKey, string>;
  correctAnswer: string;
  chosenAnswer?: string;
}

async function fetchQuestions(): Promise<QuestionProps[]> {
  const host = headers().get("host");
  const res = await fetch(`http://${host}/api/questions`)
  const json = await res.json()
  return json.questions;
}

const QuizPage = async () => {
  // retrieve the file from the context
  // send the file to the server
  // pass the questions down
  const questions = await fetchQuestions();
  return (
    <QuestionsPage
      questionsData={questions}
    />
  )
}

export default QuizPage