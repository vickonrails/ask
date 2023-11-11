import { QuestionProps } from "@/app/quiz/page";
import { usePdfContext } from "@/context/PDFContext";
import { useEffect, useState } from "react";

const API_ENDPOINT = `/api/get-pdf-text`

async function sendFileToServer(file: ArrayBuffer): Promise<{ questions: QuestionProps[] }> {
    return fetch(API_ENDPOINT, {
        method: 'POST',
        body: file,
        headers: {
            'Content-Type': 'application/octet-stream'
        }
    })
        .then(res => res.json())
}

function useLocalStorage<T>(key: string, initialValue?: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') return initialValue

        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    })

    useEffect(() => {
        if (value) {
            window.localStorage.setItem(key, JSON.stringify(value))
        } else {
            window.localStorage.removeItem(key)
        }
    }, [key, value])

    return [value, setValue]
}


export function usePDFBuffer() {
    const [questions, setQuestions] = useLocalStorage<QuestionProps[]>('questions', [])
    const [fetching, setFetching] = useState(true)
    const { pdfBuffer } = usePdfContext()

    useEffect(() => {
        if (questions.length > 0) {
            setFetching(false)
            return
        } else if (!pdfBuffer) {
            return
        };

        setFetching(true)
        sendFileToServer(pdfBuffer)
            .then(res => {
                setQuestions(res.questions)
            }).catch(err => {
                // TODO: handle error
            }).finally(() => {
                setFetching(false)
            })
    }, [pdfBuffer, questions.length, setQuestions])

    return { fetching, questions }
}