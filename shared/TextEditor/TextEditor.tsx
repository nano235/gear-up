'use client'
import dynamic from 'next/dynamic';
import React, { InputHTMLAttributes, useState, useEffect } from 'react';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
interface CustomTextEditorProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    setValue: (value: string) => void;
}

const CustomTextEditor = ({ value, setValue, placeholder }: CustomTextEditorProps) => {
    const [ssr, setSsr] = useState(true);

    useEffect(() => {
        setSsr(false);
    }, []);

    if (ssr) return null;


    return <ReactQuill theme="snow" value={value} onChange={setValue} placeholder={placeholder} />;
}

export default CustomTextEditor;