"use client"


import { usePdfContext } from "@/context/PDFContext";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { UploadButton } from "./ui/upload-button";

export function PDFUploadButton() {
    const router = useRouter()
    const { setPdfBuffer } = usePdfContext();
    const onFilePicked = useCallback((file: ArrayBuffer) => {
        console.log({ file })
        setPdfBuffer(file)
        router.push('/quiz')
    }, [setPdfBuffer, router]);

    return (
        <UploadButton
            onFilePicked={onFilePicked}
        >
            Upload PDF Now
        </UploadButton>
    )
}