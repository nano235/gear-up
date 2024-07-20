'use cient';
import React from 'react'
import styles from './WalletWithdrawalModal.module.scss'
import Modal from '@/shared/modals/modal/Modal'
import Image from 'next/image';

interface Props {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const xlmFundOptions = [
    {
        id: 1,
        title: 'Withdraw to bank account',
        description: 'Withdraw XLM directly to your local bank account',
        Icon: '/svgs/xlm-bank-deposit-icon.svg'
    },
    {
        id: 2,
        title: 'External wallet',
        description: 'Receive XLM  from another wallet',
        Icon: '/svgs/xlm-wallet-deposit-icon.svg'
    }
]
const WalletWithdrawalModalModal = ({ setOpenModal, openModal }: Props) => {

    const handleSubmit = () => {

    }

    const onClose = () => {
        setOpenModal(false)
    }



    return (
        <Modal title='Choose withdrawal method' openModal={openModal} setOpenModal={onClose} >
            <div className={styles.container}>

                <hr className={styles.divider} />
                <ul className={styles.container__bank_details}>
                    {
                        xlmFundOptions.map((option, index) => (
                            <li key={index} className={styles.container__bank_details__option}>
                                <div className={styles.left}>
                                    <span className={styles.icon}>
                                        <Image src={option.Icon} alt='deposit icon' width={16} height={16} />
                                    </span>
                                    <p>{option.title}</p>
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
        </Modal>

    )
}

export default WalletWithdrawalModalModal