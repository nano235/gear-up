'use client'
import React, { useState } from 'react'
import styles from './BlogArticleCardMob.module.scss'
import Image from 'next/image'
import { Button, MobileCard, ToggleSwitch } from '@/shared'

interface Props {
    item: any;
    lastEle?: boolean;
    ind?: number;
}
enum MoreModalActions {
    EDIT = 1,
    PREVIEW = 2,
    DELETE = 3
}

const lists = [
    {
        id: MoreModalActions.EDIT,
        title: 'Edit',
        icon: '/svgs/edit.svg'
    },
    {
        id: MoreModalActions.PREVIEW,
        title: 'Preview',
        icon: '/svgs/eye.svg'
    },
    {
        id: MoreModalActions.DELETE,
        title: 'Delete',
        icon: '/svgs/red-trash.svg'
    }

]
const BlogArticleCardMob = ({ item, lastEle, ind }: Props) => {

    return (

        <MobileCard mainHeaderText={item.category} mainHeaderImage="/images/admin-img.jpg" lastEle={lastEle} ind={ind}>
            <div className={styles.container__details__detail_container}>
                <p className={styles.key}>Published date</p>
                <p className={styles.value}>{item.published_date}</p>
            </div>
            <div className={styles.container__details__detail_container}>
                <p className={styles.key}>Category</p>
                <p className={`${styles.value} ${styles.rental}`}>{item.category}</p>
            </div>
            <div className={styles.container__details__detail_container}>
                <p className={styles.key}>Status</p>
                <div className={`${styles.value} ${styles.status}`} data-status={item.transaction_status?.toLowerCase()}>
                    <div className={styles.container__status_container}>
                        <ToggleSwitch checked={item.status === "published"} />
                        <p>{item.status}</p>
                    </div>
                </div>

            </div>
            <div className={styles.container__details__btn_container}>
                <ul className={styles.icons_container}>
                    {
                        lists.map((list) => (
                            <li key={list.id} className={styles.item}>
                                <Image src={list.icon} height={20} width={20} alt={list.title} />
                                <p className={styles.text}>{list.title}</p>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </MobileCard>

    )
}

export default BlogArticleCardMob