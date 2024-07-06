'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './TextEditor.module.scss';

interface CustomTextEditorProps {
    value: string;
    setValue: (value: string) => void;
}

const CustomTextEditor = ({ value, setValue }: CustomTextEditorProps) => {


    return <ReactQuill theme="snow" value={value} onChange={setValue} className={styles.container} />;
}

export default CustomTextEditor;