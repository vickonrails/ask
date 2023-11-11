"use client";

import { useQuestionsContext } from '@/context/QuestionsContext';
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Answers, Tag } from './answers';
import { Button } from './button';

export const Questions = () => {
    const router = useRouter()
    const [showResults, setShowResults] = useState(false)
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setShowResults(true);
    }

    return (
        <section className='lg:max-w-3xl mx-auto'>
            <button className='mb-6 flex items-center hover:text-muted-foreground' onClick={() => router.back()}>
                <ChevronLeft />
                <span className='text-sm'>Back to PDF Upload</span>
            </button>
            {showResults ?
                (<Results onHideResults={() => setShowResults(false)} />)
                : (
                    <form onSubmit={handleSubmit}>
                        <Question />
                        <QuizFooter />
                    </form>
                )}
        </section>
    )
}

function QuizFooter() {
    const questionsContext = useQuestionsContext();
    const { next, prev, hasNext, hasPrev, canEndQuiz } = questionsContext

    return (
        <section className='flex gap-2'>
            <Button type='button' variant='outline' disabled={!hasPrev} className='flex items-center gap-1 select-none' onClick={prev}>
                <ArrowLeft size={18} />
                <span>Prev Question</span>
            </Button>
            <Button type='button' className='flex items-center gap-1 select-none' disabled={!hasNext} onClick={next}>
                <span>Next Question</span>
                <ArrowRight size={18} />
            </Button>

            {!hasNext && (
                <div className='flex-1 flex justify-end'>
                    <Button type='submit' disabled={!canEndQuiz}>
                        End Quiz
                    </Button>
                </div>
            )}
        </section>
    )
}


export function Question() {
    const { questions, question } = useQuestionsContext();
    if (!question) return;

    return (
        <article key={question.id}>
            <Tag label="Single Choice" />
            <h2 className='text-xl py-4 border-b font-medium mb-6'>{`Question ${question.id}/${questions.length}`}</h2>
            <p className='text-lg mb-4 text-gray-700'>{question.text}</p>
            <Answers question={question} />
        </article>
    )
}

function Results({ onHideResults }: { onHideResults: () => void }) {
    const { questions } = useQuestionsContext();

    return (
        <section className='pb-6'>
            {questions.map((question, index) => (
                <article key={question.id}>
                    <h2 className='text-xl py-4 border-b font-medium mb-6'>{`Question ${index + 1}/${questions.length}`}</h2>
                    <p className='text-lg mb-4 text-gray-700'>{question.text}</p>
                    <Answers question={question} highlightCorrect disabled />
                </article>
            ))}

            <Button onClick={onHideResults}>Back to Quiz</Button>
        </section>
    )
}