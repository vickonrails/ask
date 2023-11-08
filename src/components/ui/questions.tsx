import { AnswerKey, Question as QuestionProps } from '@/app/quiz/page'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'
import { Label } from './label'

export const Questions = ({ questions }: { questions: QuestionProps[] }) => {
    return (
        <section className='lg:max-w-3xl mx-auto'>
            {questions.map((question, idx) => {
                const { answers } = question
                return (
                    <>
                        <Tag label="Single Choice" />
                        <h2 className='text-xl py-4 border-b font-medium mb-6'>{`Question ${idx}/${questions.length}`}</h2>
                        <p className='text-lg mb-4 text-gray-700'>{question.text}</p>

                        <RadioGroup className='flex flex-col gap-2 mb-6'>
                            <Answers answers={answers} />
                        </RadioGroup>

                        <Button className='flex items-center gap-1'>
                            <span>Next Question</span>
                            <ArrowRight size={18} />
                        </Button>
                    </>
                )
            })}
        </section>
    )
}

function Answers({ answers }: { answers: Record<AnswerKey, string> }) {
    const keys = Object.keys(answers) as AnswerKey[];

    return (
        <RadioGroup className='flex flex-col gap-2 mb-6'>
            {keys.map((key) => (
                <Answer key={key} text={answers[key]} value={key} />
            ))}
        </RadioGroup>
    )
}

function Tag({ label }: { label: string }) {
    return (
        <div className='border inline-block px-2 py-1 text-xs rounded-md bg-gray-50'>
            {label}
        </div>
    )
}

function Answer({ text, value }: { text: string, value: AnswerKey }) {
    return (
        <Label htmlFor={value} className='flex items-center gap-2 cursor-pointer rounded-sm bg-gray-50 p-2 lg:p-4 lg:gap-3 hover:bg-gray-100'>
            <RadioGroupItem value={value} id={value} />
            <p className='text-muted-foreground text-sm'>{text}</p>
        </Label>
    )
}