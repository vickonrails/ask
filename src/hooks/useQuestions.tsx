"use client"

import { Question as QuestionProps } from '@/app/quiz/page';
import { useState } from "react";

export function useQuestions(questionsData: QuestionProps[]) {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [questions, setQuestions] = useState(questionsData)

    const chooseAnswer = (questionId: number, answer: string) => {
        setQuestions(prevQuestions => {
            const questionIdx = prevQuestions.findIndex(q => q.id === questionId)
            const question = prevQuestions[questionIdx]
            const updatedQuestion = {
                ...question,
                chosenAnswer: answer
            }
            const updatedQuestions = [...prevQuestions]
            updatedQuestions[questionIdx] = updatedQuestion
            return updatedQuestions
        })
    }

    const hasNext = currentIdx < questions.length - 1
    const hasPrev = currentIdx > 0

    const next = () => {
        if (hasNext) {
            setCurrentIdx(currentIdx + 1)
        }
    }

    const prev = () => {
        if (hasPrev) {
            setCurrentIdx(currentIdx - 1)
        }
    }

    const question = questions[currentIdx]

    return { question, next, prev, hasNext, hasPrev, questions, chooseAnswer }
}