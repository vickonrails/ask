"use client";

import { useQuestionsContext } from '@/context/QuestionsContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FormEvent } from 'react';
import { Answers, Tag } from './answers';
import { Button } from './button';

export const Questions = () => {
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        // show result page instead
    }

    return (
        <section className='lg:max-w-3xl mx-auto'>
            <form onSubmit={handleSubmit}>
                <Question />
                <QuizFooter />
            </form>
        </section>
    )
}

function QuizFooter() {
    const questionsContext = useQuestionsContext();
    const { next, prev, hasNext, hasPrev, canEndQuiz } = questionsContext

    return (
        <section className='flex gap-2'>
            <Button variant='outline' disabled={!hasPrev} className='flex items-center gap-1 select-none' onClick={prev}>
                <ArrowLeft size={18} />
                <span>Next Question</span>
            </Button>
            <Button className='flex items-center gap-1 select-none' disabled={!hasNext} onClick={next}>
                <span>Next Question</span>
                <ArrowRight size={18} />
            </Button>

            {!hasNext && (
                <div className='flex-1 flex justify-end'>
                    <Button disabled={!canEndQuiz}>
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