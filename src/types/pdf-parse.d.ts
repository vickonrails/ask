// pdf-parse.d.ts
declare module 'pdf-parse/lib/pdf-parse.js' {
    function pdfParse(dataBuffer: Buffer, options?: pdfParse.PDFParseOptions): Promise<pdfParse.PDFParseData>;

    namespace pdfParse {
        interface PDFParseData {
            numpages: number;
            numrender: number;
            info: any;
            metadata: any;
            text: string;
            version: string;
        }

        interface PDFParseOptions {
            version?: string;
            max?: number;
            pagerender?: (pageData: any) => string;
        }
    }

    export = pdfParse;
}
