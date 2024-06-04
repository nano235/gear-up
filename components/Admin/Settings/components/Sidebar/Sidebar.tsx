'use client'
import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link';


interface ListProps {
    name: string;
    id: number;
    path: string;
    slug: string;

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
                            <span className='title'>{item.name}</span>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar