import { useQuestionsContext } from "@/context/QuestionsContext";
import { AnswerKey, QuestionProps } from "@/app/quiz/page";
import { Label } from "./label";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { cn } from "@/lib/utils";

interface AnswersProps {
    question: QuestionProps
    highlightCorrect?: boolean
    disabled?: boolean
}

export function Answers({ question, highlightCorrect = false, disabled = false }: AnswersProps) {
    const { answers } = question
    const objectKeys = Object.keys(answers) as AnswerKey[];
    const questionsContext = useQuestionsContext()
    const { chooseAnswer } = questionsContext

    return (
        <RadioGroup
            name={`${question.id}`}
            className='flex flex-col gap-2 mb-6'
            onValueChange={(val) => chooseAnswer(question.id, val)}
            value={question.chosenAnswer}
            disabled={disabled}
        >
            {objectKeys.map((key) => (
                <Answer
                    key={key}
                    text={answers[key]}
                    value={key}
                    question={question}
                    highlightCorrect={highlightCorrect}
                    disabled={disabled}
                />
            ))}
        </RadioGroup>
    )
}

export function Tag({ label }: { label: string }) {
    return (
        <div className='border inline-block px-2 py-[2px] text-xs rounded-md bg-gray-50'>
            {label}
        </div>
    )
}

interface AnswerProps {
    text: string
    value: string
    highlightCorrect?: boolean
    question: QuestionProps
    disabled?: boolean
}
function Answer({ text, value, highlightCorrect = false, question, disabled }: AnswerProps) {
    const isSelected = question.chosenAnswer === value
    const isCorrect = question.correctAnswer === value
    const correctSelected = isCorrect && isSelected
    const wrongSelected = !isCorrect && isSelected

    return (
        <Label
            className={cn(
                'flex items-center border gap-2 rounded-sm p-2 lg:p-4 lg:gap-3',
                isSelected && 'border-primary text-primary',
                (isCorrect && highlightCorrect) && 'border-green-600 text-green-600',
                (correctSelected && highlightCorrect) && 'border-green-600 bg-green-50',
                (wrongSelected && highlightCorrect) && 'border-destructive bg-red-50 text-destructive',
                disabled ? '' : 'cursor-pointer hover:bg-gray-100'
            )}
        >
            <RadioGroupItem value={value} className="disabled:opacity-100 text-current" />
            <p className='text-muted-foreground text-sm'>{text}</p>
        </Label>
    )
}