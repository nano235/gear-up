'use client'
import React from 'react'
import styles from './HeaderSubText.module.scss'

interface HeaderSubTextProps {
    title?: string
    description?: string
}
const HeaderSubText = ({ title, description }: HeaderSubTextProps) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {!!description && <p className={styles.description}>{description}</p>}
        </div>
    )
}

export default HeaderSubText;