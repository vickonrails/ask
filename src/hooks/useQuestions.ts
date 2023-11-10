import { useEffect, useState } from "react";
import { usePDFBuffer } from './usePDFBuffer';

export function useQuestions() {
    const { questions: initialQuestions, fetching } = usePDFBuffer()
    const [currentIdx, setCurrentIdx] = useState(0)
    const [questions, setQuestions] = useState(initialQuestions)

    useEffect(() => {
        setQuestions(initialQuestions);
    }, [initialQuestions]);

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

    const canEndQuiz = questions.every(q => q.chosenAnswer)

    const question = questions[currentIdx]

    return { question, fetchingQuestions: fetching, next, prev, hasNext, hasPrev, questions, chooseAnswer, canEndQuiz }
}