"use client";

import { createContext, useContext } from "react";
import { QuestionProps } from "../app/quiz/page";

interface QuestionsContextProps {
    question?: QuestionProps;
    questions: QuestionProps[]
    fetchingQuestions: boolean
    next: () => void
    prev: () => void
    hasNext: boolean
    hasPrev: boolean
    chooseAnswer: (questionId: number, answer: string) => void
    canEndQuiz: boolean
}

const initialCtxValue: QuestionsContextProps = {
    canEndQuiz: false,
    chooseAnswer: () => { /** noop */ },
    hasNext: false,
    hasPrev: false,
    fetchingQuestions: false,
    next: () => { /** noop */ },
    prev: () => { /** noop */ },
    questions: []
}

const QuestionsContext = createContext<QuestionsContextProps>(initialCtxValue)

export function useQuestionsContext() {
    return useContext(QuestionsContext)
}

export default QuestionsContext.Provider