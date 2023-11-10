"use client"

import { useCallback, useState } from "react";
import { UploadButton } from "./ui/upload-button";

const API_ENDPOINT = `/api/get-pdf-text`
const NODE_ENDPOINT = `http://localhost:4000/api/upload-pdf`

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

export function PDFUploadButton() {
    // const [PDFQuestions, setPDFQuestions] = useState('')
    const onFilePicked = useCallback((file: ArrayBuffer) => {

        // set the value of the context to the file buffer
        // navigate to the /quiz page

        sendFileToServer(file).then(res => {
            console.log(res)
        })
    }, []);

    return (
        <UploadButton
            onFilePicked={onFilePicked}
        >
            Upload PDF Now
        </UploadButton>
    )
}