"use client";

import { useQuestionsContext } from '@/app/context/QuestionsContext';
import { Question as QuestionProps } from '@/app/quiz/page';
import { Answers, Tag } from './answers';
import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Button } from './button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Questions = ({ questions }: { questions: QuestionProps[] }) => {
    const questionsContext = useQuestionsContext();

    if (!questionsContext) {
        return;
    }
    const { question, next, prev, hasNext, hasPrev } = questionsContext

    const handleSubmit = () => {

    }

    return (
        <section className='lg:max-w-3xl mx-auto'>
            <form onSubmit={handleSubmit}>
                <article key={question.id}>
                    <Tag label="Single Choice" />
                    <h2 className='text-xl py-4 border-b font-medium mb-6'>{`Question ${question.id}/${questions.length}`}</h2>
                    <p className='text-lg mb-4 text-gray-700'>{question.text}</p>

                    <Answers question={question} />

                    <section className='flex gap-2'>
                        <Button variant='outline' disabled={!hasPrev} className='flex items-center gap-1 select-none' onClick={prev}>
                            <ArrowLeft size={18} />
                            <span>Next Question</span>
                        </Button>
                        <Button className='flex items-center gap-1 select-none' disabled={!hasNext} onClick={next}>
                            <span>Next Question</span>
                            <ArrowRight size={18} />
                        </Button>
                    </section>
                </article>
            </form>
        </section>
    )
}


// return (
//     <section>
//         <RadioGroup defaultValue="comfortable" name='first' onValueChange={val => alert(val)}>
//             <div className="flex items-center space-x-2">
//                 <Label htmlFor="r1">
//                     <RadioGroupItem value="default" id="r1" />
//                     Default
//                 </Label>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <Label htmlFor="r2">
//                     <RadioGroupItem value="comfortable" id="r2" />
//                     Comfortable
//                 </Label>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <Label htmlFor="r3">
//                     <RadioGroupItem value="compact" id="r3" />
//                     Compact
//                 </Label>
//             </div>
//         </RadioGroup>

//         <RadioGroup onValueChange={val => alert(val)}>
//             <div className="flex items-center space-x-2">
//                 <Label>
//                     <RadioGroupItem value="default" />
//                     Default
//                 </Label>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <Label>
//                     <RadioGroupItem value="comfortable" />
//                     Comfortable
//                 </Label>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <Label>
//                     <RadioGroupItem value="compact" />
//                     Compact
//                 </Label>
//             </div>
//         </RadioGroup>
//     </section>
// )