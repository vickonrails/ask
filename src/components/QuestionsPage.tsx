"use client";

import QuestionsContext, { useQuestionsContext } from '@/app/context/QuestionsContext';
import { Question } from '@/app/quiz/page';
import { useQuestions } from '@/hooks/useQuestions';
import { cn } from '@/lib/utils';
import { Questions } from './ui/questions';

function QuestionsPage({ questionsData }: { questionsData: Question[] }) {
    const { hasNext, hasPrev, next, prev, question, questions, chooseAnswer } = useQuestions(questionsData)

    return (
        <QuestionsContext value={{ question, next, prev, hasNext, hasPrev, questions, chooseAnswer }}>
            <Progress />
            <Questions questions={questions} />
        </QuestionsContext>
    )
}

export function Progress() {
    const questionsContext = useQuestionsContext()
    if (!questionsContext) return;
    const { question: { id: currentId }, questions } = questionsContext

    return (
        <section className='flex justify-center gap-2 py-4 mb-8 bg-gray-100'>
            {questions.map((_, idx) => (
                <div key={idx} className={cn(
                    'h-1 w-4 xl:h-2 bg-gray-300 rounded-full',
                    (idx + 1) <= currentId && 'bg-primary'
                )} />
            ))}
        </section>
    )
}


export default QuestionsPage