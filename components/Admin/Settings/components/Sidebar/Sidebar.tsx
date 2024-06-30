'use client'
import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link';
import { UserSideIcon } from '@/shared/svgs/dashboard';


interface ListProps {
    name: string;
    id: number;
    path: string;
    slug: string;
    description: string;

}

interface Props {
    settingsLists: ListProps[];
    active: string;
}

const Sidebar = ({ settingsLists, active }: Props) => {

    return (
        <div className={styles.wrapper}>

            <div className={styles.sidebar_container}>
                <ul className={styles.navlinks_container}>
                    {settingsLists.map((item, index) => (
                        <Link key={index} data-active={active === item.slug} href={item.path} className={styles.navlinks_container__item} >
                            <span className={styles.icon}>
                                <UserSideIcon color={active === item.slug ? "#1B1E21" : "#A4A6A7"} />
                            </span>
                            <div>
                                <h2 className={styles.title}>{item.name}</h2>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar