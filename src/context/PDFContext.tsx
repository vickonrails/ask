import { createContext, useContext } from "react"

interface PDFContextProps {
    pdfBuffer?: ArrayBuffer
    setPdfBuffer: (buffer: ArrayBuffer) => void
}

const initialContext: PDFContextProps = {
    setPdfBuffer: (buffer: ArrayBuffer) => { /** */ },
}

export function usePdfContext() {
    return useContext(PDFContext)
}

export const PDFContext = createContext<PDFContextProps>(initialContext)
