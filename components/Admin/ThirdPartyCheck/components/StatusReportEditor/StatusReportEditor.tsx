import React, { useRef, useEffect } from 'react';
import Modal from '@/shared/modals/modal/Modal';
import styles from './StatusReportEditor.module.scss';

interface TrixEditorProps {
    value: string;
    onChange: (value: string) => void;
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
}

const TrixEditorModal: React.FC<TrixEditorProps> = ({ onChange, value, openModal, setOpenModal }) => {
    const editorRef = useRef<HTMLTrixEditorElement>(null);

    useEffect(() => {
        const editor = editorRef.current;

        // Event listener for Trix change events
        const handleChange = (event: Event) => {
            const target = event.target as HTMLInputElement;
            const content = target.value;
            if (onChange) {
                onChange(content);
            }
        };

        editor?.addEventListener('trix-change', handleChange);

        // Cleanup event listener on component unmount
        return () => {
            editor?.removeEventListener('trix-change', handleChange);
        };
    }, [onChange]);

    const onClose = () => {
        setOpenModal(false);
    };

    return (
        <Modal openModal={openModal} setOpenModal={onClose} title=''>
            <form className={styles.form_container}>
                <input id="x" type="hidden" name="content" className={styles.input} />
                <trix-editor input="x"></trix-editor>
            </form>
        </Modal>
    );
};

export default TrixEditorModal;
