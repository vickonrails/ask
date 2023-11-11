import { PDFUploadButton } from '@/components/pdf-upload-button';

export default function Home() {
  return (
    <main className='h-full hero'>
      <header className='py-10 flex flex-col items-start m-auto gap-4 max-w-3xl lg:items-center md:pt-32 lg:text-center '>
        <h1 className='text-2xl font-bold max-w-3xl lg:text-5xl xl:text-6xl'>Upload Any PDF and Generate a Quiz Immediately</h1>
        <p className='text-muted-foreground text-lg md:max-w-xl lg:text-xl'>Ask works by submitting contents of your PDF to ChatGPT. ChatGPT generates the questions and Ask renders them in a pleasant way 😍</p>
        <PDFUploadButton />
      </header>
    </main>
  )
}

