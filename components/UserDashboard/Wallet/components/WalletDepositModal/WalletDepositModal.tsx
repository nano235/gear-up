'use cient';
import React from 'react'
import styles from './WalletDepositModal.module.scss'
import Modal from '@/shared/modals/modal/Modal'
import Image from 'next/image';
import { Button, InputField } from '@/shared';
import { CopyIcon, EditIcon } from '@/shared/svgs/dashboard';



interface Props {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;

}

const fundOptions = [
    'Fund with flutterwave', 'Fund with paystack'
]
const WalletDepositModal = ({ openModal, setOpenModal }: Props) => {

    const handleSubmit = () => {

    }

    const onClose = () => {
        setOpenModal(false)
    }




    return (
        <Modal title='Withdrawal' openModal={openModal} setOpenModal={onClose} >
            <div className={styles.container}>
                <p className={styles.header}>Transfer money to your <span className={styles.bold}>Gearup</span> account</p>
                <div className={styles.container__details}>
                    <div className={styles.container__details__detail_container}>
                        <p className={styles.key}>Bank name</p>
                        <p className={styles.value}>Palmpay</p>
                    </div>
                    <div className={styles.container__details__detail_container}>
                        <p className={styles.key}>Account number</p>
                        <p className={styles.value}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <p>0000045847378283543</p>
                                <span className={styles.icon}>
                                    <CopyIcon />
                                </span>Copy
                            </span>
                        </p>
                    </div>
                    <div className={styles.container__details__detail_container}>
                        <p className={styles.key}>Account name</p>
                        <p className={styles.value}>Gearup-Oyakhilome Einstein</p>
                    </div>

                </div>
                <span className={styles.divider_container}>
                    <hr className={styles.divider} />
                    or
                    <hr className={styles.divider} />
                </span>
                <InputField placeholder='Enter amount' label='Amount' />
                <div>
                    <ul className={styles.container__bank_details}>
                        {
                            fundOptions.map((option, index) => (
                                <li key={index} className={styles.container__bank_details__option}>
                                    <div className={styles.left}>
                                        <span className={styles.icon}>
                                            <Image src='/svgs/deposit-icon-with.svg' alt='deposit icon' width={16} height={16} />
                                        </span>
                                        <p>{option}</p>
                                    </div>
                                    <div className={styles.right}>
                                        <span className={styles.icon}>
                                            <Image src='/svgs/arrow-right.svg' alt='deposit icon' width={16} height={16} />
                                        </span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </Modal>

    )
}

export default WalletDepositModal