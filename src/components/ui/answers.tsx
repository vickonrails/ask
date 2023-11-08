import { useQuestionsContext } from "@/context/QuestionsContext";
import { AnswerKey, Question } from "@/app/quiz/page";
import { Label } from "./label";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export function Answers({ question }: { question: Question }) {
    const { answers } = question
    const objectKeys = Object.keys(answers) as AnswerKey[];
    const questionsContext = useQuestionsContext()
    if (!questionsContext) return;

    const { chooseAnswer } = questionsContext

    return (
        <RadioGroup
            name={`${question.id}`}
            className='flex flex-col gap-2 mb-6'
            onValueChange={(val) => chooseAnswer(question.id, val)}
            value={question.chosenAnswer}
        >
            {objectKeys.map((key) => (
                <Answer key={key} text={answers[key]} value={key} question={question} />
            ))}
        </RadioGroup>
    )
}

export function Tag({ label }: { label: string }) {
    return (
        <div className='border inline-block px-2 py-1 text-xs rounded-md bg-gray-50'>
            {label}
        </div>
    )
}

function Answer({ text, value, question }: { text: string, value: string, question: Question }) {
    const questionsContext = useQuestionsContext()
    if (!questionsContext) return;
    const { chooseAnswer } = questionsContext

    return (
        <Label className='flex items-center gap-2 cursor-pointer rounded-sm bg-gray-50 p-2 lg:p-4 lg:gap-3 hover:bg-gray-100'>
            <RadioGroupItem value={value} />
            <p className='text-muted-foreground text-sm'>{text}</p>
        </Label>
    )
}