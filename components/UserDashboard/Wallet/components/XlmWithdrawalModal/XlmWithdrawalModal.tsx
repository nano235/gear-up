'use cient';
import React, { useState } from 'react'
import styles from './XlmWithdrawalModal.module.scss'
import Modal from '@/shared/modals/modal/Modal'
import Image from 'next/image';
import { Button, InputField } from '@/shared';

interface Props {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;

}

enum ModalType {
    SHOW_OPTIONS = 'Show options',
    SHOW_FORM = 'Show form',
    SHOW_BANK_DETAILS = 'Show bank details'
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
    const [modalTitle, setModalTitle] = useState<string>('Choose withdrawal method')
    const [modalType, setModalType] = useState<string>(ModalType.SHOW_OPTIONS)
    const [backBtn, setBackBtn] = useState<boolean>(false)

    const handleSubmit = () => {
    }

    const onClose = () => {
        setOpenModal(false)
    }

    const onOptionClick = (title: string) => {
        setModalTitle("Send XLM")
        setModalType(ModalType.SHOW_FORM)
    }

    const handleClickBack = () => {
        setModalTitle('Send XLM')
        setModalType(ModalType.SHOW_FORM)
        setBackBtn(false)
    }

    const onFormSubmit = () => {
        setModalTitle('Transfer')
        setModalType(ModalType.SHOW_BANK_DETAILS)
        setBackBtn(true)
    }

    const handleConfirm = () => {
        setOpenModal(false)
        setModalTitle('Choose withdrawal method')
        setModalType(ModalType.SHOW_OPTIONS)
        setBackBtn(false)
    }


    return (
        <Modal addBackIcon={backBtn} onClickBack={handleClickBack} title={modalTitle} openModal={openModal} setOpenModal={onClose} >
            <div className={styles.container}>
                <hr className={styles.divider} />
                {
                    modalType === ModalType.SHOW_OPTIONS && <ul className={styles.container__bank_details}>
                        {
                            xlmFundOptions.map((option, index) => (
                                <li key={index} className={styles.container__bank_details__option} onClick={() => onOptionClick(option.title)}>
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
                }
                {
                    modalType === ModalType.SHOW_FORM && <div className={styles.form_container}>
                        <InputField type="text" placeholder='Enter address' label='Address' className={styles.input} />
                        <div>
                            <InputField type="text" placeholder='Enter amount' label='Amount' className={styles.input}
                                suffix={<p className={styles.max_btn}>Max</p>}
                            />
                            <p className={styles.total_amount}>={" "}0.00</p>
                        </div>
                        <Button className={styles.submit_btn} onClick={onFormSubmit}>Next</Button>
                    </div>
                }
                {
                    modalType === ModalType.SHOW_BANK_DETAILS && <div className={styles.bank_details_container}>
                        <div className={styles.container__details}>
                            <div className={styles.container__details__detail_container}>
                                <p className={styles.key}>Asset</p>
                                <p className={styles.value}>Xlm</p>
                            </div>
                            <div className={styles.container__details__detail_container}>
                                <p className={styles.key}>To</p>
                                <p className={styles.value}>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2.</p>
                            </div>
                            <div className={styles.container__details__detail_container}>
                                <p className={styles.key}>Network</p>
                                <p className={styles.value}>Stellar</p>
                            </div>
                            <div className={styles.container__details__detail_container}>
                                <p className={styles.key}>Network fee</p>
                                <p className={styles.value}>0.3XLM(≈$0.12)</p>
                            </div>
                            <div className={styles.container__details__detail_container}>
                                <p className={styles.key}>Max total</p>
                                <p className={styles.value}>$200</p>
                            </div>
                            <Button className={styles.submit_btn} onClick={handleConfirm}>Confirm</Button>
                        </div>
                    </div>
                }

            </div>
        </Modal>

    )
}

export default WalletWithdrawalModalModal