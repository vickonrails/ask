import { OpenAI } from 'openai'
import pdf2json from "pdf-parse/lib/pdf-parse.js";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const instruction = `
    Please read the following passage and generate a set of 10 objective questions in JSON format. The response should be a javascript array of question objects at the root level (no other property, just an array), each with 'id', 'text', 'answers' and 'correctAnswer' fields. 
    'id' should be a unique integer identifier for each question, 'text' should contain the text of the comprehension question and 'answers' should be an object of possible answers each mapped a-d. 
    The 'correctAnswer' should contain the key of the correct answer (key of the possible answers). Bear in mind that the response is not going to be rendered as code, so don't include the backticks. Just return a javascript object. I'll supply the questions as a user prompt.
`

export async function POST(request: Request) {
    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    try {
        const { text: pdfText } = await pdf2json(buffer)
        const completion = await openai.chat.completions.create({
            model: 'gpt-4-1106-preview',
            messages: [
                { role: 'system', content: instruction },
                { role: 'user', content: pdfText },
            ]
        });

        let response = completion.choices[0].message.content
        if (response?.includes('```')) {
            response = response?.substring(7, response.length - 3);
        }
        return Response.json({ questions: JSON.parse(response ?? '') });
    } catch (err) {
        console.log(err)
        // TODO: handle error
    }

}