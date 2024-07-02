import React, { FC } from 'react';
import { InputHTMLAttributes } from 'react';
import styles from './CustomRadioButton.module.scss';

// Define the props for the CustomRadioButton
interface CustomRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const CustomRadioButton: FC<CustomRadioButtonProps> = ({ label, ...props }) => {
    return (
        <label className={styles.radioLabel}>
            <input type="checkbox" className={styles.radioInput} {...props} />
            <span className={styles.radioCustom}></span>
            {label}
        </label>
    );
};

export default CustomRadioButton;
