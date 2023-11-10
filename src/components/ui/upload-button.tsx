"use client"

import { ChangeEvent, useCallback, useRef } from "react";
import { Button, ButtonProps } from "./button";

interface UploadButtonProps extends Omit<ButtonProps, 'onChange' | 'onClick'> {
    onFilePicked?: (file: ArrayBuffer) => void
}

function getFilename(filename: string) {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex !== -1) {
        return filename.substring(0, lastDotIndex);
    }
    return filename;
}

export function UploadButton({ onFilePicked, ...rest }: UploadButtonProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    const onChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        const file = ev.target.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onload = (evt) => {
            const result = evt.target?.result;
            const filename = getFilename(file.name)
            if (inputRef.current) inputRef.current.value = '';
            onFilePicked?.(result as ArrayBuffer)
        }
    }, [onFilePicked])

    const handleClick = useCallback(() => {
        inputRef.current?.click();
    }, [])

    return (
        <>
            <input
                type='file'
                ref={inputRef}
                onChange={onChange}
                accept=".pdf"
                className='hidden'
            />
            <Button onClick={handleClick} {...rest} />
        </>
    )

}