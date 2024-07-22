'use cient';
import React, { useState } from 'react'
import styles from './XlmDepositModal.module.scss'
import Modal from '@/shared/modals/modal/Modal'
import Image from 'next/image';
import { Icon, InputField } from '@/shared';
import { Input } from '@mui/material';
import { CopyIcon, WarningIcon } from '@/shared/svgs/dashboard';

interface Props {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

enum ModalType {
    SHOW_OPTIONS = 'Show options',
    SCAN_BARCODE = 'Scan barcode'
}

const xlmFundOptions = [
    {
        id: 1,
        title: 'From bank account',
        description: 'Deposit XLM using your visa/master card',
        Icon: '/svgs/xlm-bank-deposit-icon.svg'
    },
    {
        id: 2,
        title: 'External wallet',
        description: 'Receive XLM  from another wallet',
        Icon: '/svgs/xlm-wallet-deposit-icon.svg'
    }
]
const XlmDepositModal = ({ setOpenModal, openModal }: Props) => {
    const [modalTitle, setModalTitle] = useState<string>('How do you want to fund?')
    const [modalType, setModalType] = useState<string>(ModalType.SHOW_OPTIONS)
    const [backBtn, setBackBtn] = useState<boolean>(false)

    const handleSubmit = () => {

    }

    const onClose = () => {
        setOpenModal(false)
    }

    const onOptionClick = (title: string) => {
        setModalTitle("Deposit XLM")
        setModalType(ModalType.SCAN_BARCODE)
        setBackBtn(true)
    }

    const handleClickBack = () => {
        setModalTitle('How do you want to fund?')
        setModalType(ModalType.SHOW_OPTIONS)
        setBackBtn(false)
    }


    return (
        <Modal onClickBack={handleClickBack} addBackIcon={backBtn} title={modalTitle} openModal={openModal} setOpenModal={onClose} >
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
                    modalType === ModalType.SCAN_BARCODE && <div className={styles.header}>
                        <div className={styles.barcode_container}>
                            <Image src='/svgs/barcode.svg' alt='qr code' width={100} height={100} />
                            <p>Scan QR with camera to send XLM to your wallet</p>
                        </div>

                        <div className={styles.deposit_address_container}>
                            <p className={styles.deposit_title}>Deposit address</p>
                            <div className={styles.address_container}>
                                <p>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2.</p>
                                <span className={styles.icon}>
                                    <CopyIcon />
                                </span>
                            </div>
                        </div>
                        <div className={styles.warning_container}>
                            <span className={styles.icon}>
                                <WarningIcon color='#A26B00' />
                            </span>
                            <p>Note:  Send only XLM to this address or you would lose it permanently</p>
                        </div>
                    </div>
                }

            </div>
        </Modal>

    )
}

export default XlmDepositModal