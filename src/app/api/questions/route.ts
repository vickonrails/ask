import { OpenAI } from 'openai'
import { questions } from '../../../../sample.json'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const sampleText = `
In the ever-evolving landscape of software development, where the boundaries of possibility are continuously stretched, the importance of clean code remains a constant beacon. Clean code is not merely a practice but a philosophy, an art that is honed through diligence and a keen understanding of programming at its core. Herein, we delve into the fundamental principles that form the bedrock of this discipline.
Above all, clean code should be easily readable. Like a well-crafted novel, it allows the reader to understand its purpose without undue effort. Variable names should be descriptive and precise, avoiding cryptic abbreviations or misleading identifiers. Functions and methods are to be verbs, classes nouns, and the chosen nomenclature should adhere to a coherent and consistent theme throughout the codebase. 
The most elegant solutions are often the simplest. Code that is straightforward is not only easier to comprehend but also easier to debug and maintain. Unnecessary complexity is the arch-nemesis of maintainability. Developers should strive to implement solutions that are as simple as possible, yet as complex as necessary. Refactoring is the key to this principle, where the code is constantly refined to its simplest form.
Comments in code should not state the obvious but illuminate the rationale behind decisions that are not immediately apparent from the code itself. They are the narrative that explains why a certain path was chosen or a reminder of the constraints that molded a particular solution. However, the need for comments is often a sign that the code is not clear enough on its own—strive to make the code self-explanatory, and use comments sparingly and judiciously.
Code that is not tested is broken by default. Clean code comes hand-in-hand with a comprehensive suite of tests that ensure its functionality and robustness. Automated tests serve as a testament to the code's integrity and allow for fearless refactoring. A developer should not consider a task complete until it has been thoroughly tested, and the tests should be treated as part of the codebase, kept as clean and well-maintained as the code itself.
The journey towards clean code is continuous. Refactoring is not a one-off task but a habitual practice that developers should engage in as they write new features or revisit old ones. It is the process of improving the internal structure of the code without changing its external behavior. This principle acknowledges that first drafts are rarely perfect and that perfection is a process, not a destination.
Embracing the principles of clean code is not merely adopting a set of rules; it is a commitment to craftsmanship in the realm of software development. It is an acknowledgment that the code we write is not just for machines to execute but for humans to understand and maintain. Clean code is a dialogue between the present and the future, a message we leave for others and our future selves, a testament to the quality and care we invest in our digital constructions.
`

const instruction = `
    you are to summarize the provided text and generate 10 objective questions alongside their answer in a JSON format that can be used by a react app.
    The format will be an array of {question, answers, correctAnswer}, the questions will have the IDs of a,b,c and d. The correctAnswer key will have the id of the correct answer.
`
export async function GET() {
    // const completion = await openai.chat.completions.create({
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //         { role: 'system', content: instruction },
    //         { role: 'user', content: sampleText },
    //     ]
    // });

    // const result = completion.choices[0].message.content
    return Response.json({ questions });
}