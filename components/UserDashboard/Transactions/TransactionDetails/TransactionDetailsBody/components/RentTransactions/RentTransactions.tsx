import React, { useState } from 'react'
import styles from './RentTransactions.module.scss'
import DetailsSummary from '../DetailsSummary/DetailsSummary'
import { LendersTimeline, RentersTimeline } from './TimeLines'
import HeaderSubText from '@/components/UserDashboard/HeaderSubText/HeaderSubText'
import { MoreIcon } from '@/shared/svgs/dashboard'
import Modal from '@/shared/modals/modal/Modal'

interface Props {
    item?: any
}

const RentTransactions = ({ item }: Props) => {
    const [openModal, setOpenModal] = useState(false)
    const timeline = item?.user_role
    console.log(timeline)

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.title_more_icon}>
                    <HeaderSubText title='Transaction Timeline' />
                    <span className={styles.icon_container}>
                        < MoreIcon onClick={(e) => {
                            setOpenModal(true)
                        }
                        } />
                    </span>
                </div>
                {
                    timeline === 'lender' ? <LendersTimeline openModal={openModal} setOpenModal={setOpenModal} /> : <RentersTimeline openModal={openModal} setOpenModal={setOpenModal} />
                }
            </div>
            <DetailsSummary />
        </div>
    )
}

export default RentTransactions