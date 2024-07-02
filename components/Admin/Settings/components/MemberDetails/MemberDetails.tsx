import React from 'react'
import styles from './MemberDetails.module.scss'
import { BackNavigation } from '@/shared'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'

const MemberDetails = () => {
    return (
        <div className={styles.container}>
            <BackNavigation />
            <HeaderSubText title="Member" />
        </div>
    )
}

export default MemberDetails