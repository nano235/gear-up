import React from "react";
import styles from "./Radio.module.scss";

interface Props {
	label?: string;
	className?: string;
	checked?: boolean;
	onChange?: (e: any) => void;
	disabled?: boolean;
}

const RadioBox = ({ label, onChange, className, checked, disabled = false }: Props) => {
	return (
		<div className={`${styles.checkBox} ${className}`}>
			<label className={styles.container} data-type={disabled}>
				{label}
				<input type="checkbox" onChange={onChange} checked={checked} />
				<span className={styles.checkmark}></span>
			</label>
		</div>
	);
};

export default RadioBox;