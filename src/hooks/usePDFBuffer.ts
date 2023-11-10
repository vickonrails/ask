import { QuestionProps } from "@/app/quiz/page";
import { usePdfContext } from "@/context/PDFContext";
import { useEffect, useState } from "react";

const API_ENDPOINT = `/api/get-pdf-text`

async function sendFileToServer(file: ArrayBuffer) {
    return fetch(API_ENDPOINT, {
        method: 'POST',
        body: file,
        headers: {
            'Content-Type': 'application/octet-stream'
        }
    })
        .then(res => res.json())
}

export function usePDFBuffer() {
    const [questions, setQuestions] = useState<QuestionProps[]>([])
    const [fetching, setFetching] = useState(true)
    const { pdfBuffer } = usePdfContext();

    useEffect(() => {
        if (!pdfBuffer) return;

        setFetching(true)
        sendFileToServer(pdfBuffer)
            .then(res => {
                setQuestions(res.questions)
            }).catch(err => {
                // TODO: handle error
            }).finally(() => {
                setFetching(false)
            })
    }, [pdfBuffer])

    return { fetching, questions }
}