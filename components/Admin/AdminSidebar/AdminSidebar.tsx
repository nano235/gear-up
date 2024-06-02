import React from 'react'
import styles from './AdminSidebar.module.scss'
import { LogoIcon } from '@/shared/svgs/dashboard'

const AdminSidebar = () => {
    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_container__header}>
                <span className={styles.logo_icon}>
                    <LogoIcon />
                </span>
            </div>
            sidebar
        </div>
    )
}

export default AdminSidebar