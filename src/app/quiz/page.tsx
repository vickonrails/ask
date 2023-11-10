import QuestionsPage from '@/components/QuestionsPage';

export type AnswerKey = 'a' | 'b' | 'c' | 'd'

export interface QuestionProps {
  id: number;
  text: string;
  answers: Record<AnswerKey, string>;
  correctAnswer: string;
  chosenAnswer?: string;
}
const QuizPage = async () => {
  return (
    <QuestionsPage />
  )
}

export default QuizPage