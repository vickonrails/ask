"use client";

import QuestionsContext, { useQuestionsContext } from '@/context/QuestionsContext';
import { useQuestions } from '@/hooks/useQuestions';
import { cn } from '@/lib/utils';
import { Questions } from './ui/questions';

function QuestionsPage({ questionsData }: { questionsData: Question[] }) {
    const questionsCtx = useQuestions(questionsData)

    return (
        <QuestionsContext value={questionsCtx}>
            <Progress />
            <Questions />
        </QuestionsContext>
    )
}

export function Progress() {
    const { questions, question } = useQuestionsContext()
    if (!question) return;

    return (
        <section className='flex justify-center gap-2 py-4 mb-8 bg-gray-100'>
            {questions.map((_, idx) => (
                <div key={idx} className={cn(
                    'h-1 w-4 xl:h-2 bg-gray-300 rounded-full',
                    (idx + 1) <= question?.id && 'bg-primary'
                )} />
            ))}
        </section>
    )
}


export default QuestionsPage