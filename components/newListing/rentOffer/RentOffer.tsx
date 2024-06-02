import { InputField } from "@/shared";
import styles from "./RentOffer.module.scss";

interface Props {
	title: 1 | 3 | 7 | 30;
	value: { value: number; enabled: boolean };
	onChange: (e?: any) => void;
}

const RentOffer = ({ title, value, onChange }: Props) => {
	const handleChange = (e: any) => {
		onChange((prev: any) => ({ ...prev, value: e.target.value }));
	};
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.text}>
					<h3>
						{title} Day{title !== 1 ? "s" : ""} offer
					</h3>
				</div>
				{title !== 1 ? (
					<label className={styles.switch}>
						<input type="checkbox" />
						<span className={styles.slider}></span>
					</label>
				) : null}
			</div>
			<InputField
				prefix="N"
				placeholder="0"
				value={value.value}
				onChange={handleChange}
			/>
			<div className={styles.footer}>
				{title !== 1 && (
					<div className={styles.text}>
						<p>BASED ON FORMULAR</p>
					</div>
				)}
				{title === 1 ? (
					<div className={styles.details}>Custom</div>
				) : (
					<div className={styles.details}>
						{title === 3 ? 2 : title === 7 ? 3 : title === 30 ? 9 : null} X 1
						Day price
					</div>
				)}
			</div>
		</div>
	);
};

export default RentOffer;
