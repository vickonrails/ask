"use client";

import QuestionsContext, { useQuestionsContext } from '@/context/QuestionsContext';
import { useQuestions } from '@/hooks/useQuestions';
import { cn } from '@/lib/utils';
import { Questions } from './ui/questions';
import Image from 'next/image';

function Loading() {
    return (
        <section className='flex flex-col gap-4 justify-center place-items-center h-full'>
            <Image
                src='/transformer.svg'
                width={100}
                height={100}
                alt='Loading...'
            />
            <p className='text-muted-foreground'>The AI overlords are working...</p>
        </section>
    )
}

function QuestionsPage() {
    const questionsCtx = useQuestions()

    if (questionsCtx.fetchingQuestions) return <Loading />

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