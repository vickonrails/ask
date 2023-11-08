"use client";

import { createContext, useContext } from "react";
import { Question } from "../quiz/page";

interface QuestionsContextProps {
    question: Question;
    questions: Question[]
    next: () => void
    prev: () => void
    hasNext: boolean
    hasPrev: boolean
    chooseAnswer: (questionId: number, answer: string) => void
}

const QuestionsContext = createContext<QuestionsContextProps | null>(null)

export function useQuestionsContext() {
    return useContext(QuestionsContext)
}

export default QuestionsContext.Provider