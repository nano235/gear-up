'use client'
import React, { InputHTMLAttributes, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
interface CustomTextEditorProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    setValue: (value: string) => void;
}

const CustomTextEditor = ({ value, setValue, placeholder }: CustomTextEditorProps) => {


    return <ReactQuill theme="snow" value={value} onChange={setValue} placeholder={placeholder} />;
}

export default CustomTextEditor;