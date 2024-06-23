'use client'
import React, { useEffect, useState } from 'react'
import styles from './AdminSidebar.module.scss'
import { CategoriesNavIcon, DashboardNavIcon, ListingsNavIcon, LogoIcon, LogoutNavIcon, MessagesNavIcon, SettingsNavIcon, TransactionNavIcon, WalletNavIcon } from '@/shared/svgs/dashboard'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminSidebar = () => {
    const pathname = usePathname()
    const sidebarItems = [
        {
            name: 'Dashboard',
            icon: <DashboardNavIcon />,
            link: '/admin/dashboard',
        },
        {
            name: 'Transactions',
            icon: <TransactionNavIcon />,
            link: '/admin/transactions',
        },
        {
            name: 'Categories',
            icon: <CategoriesNavIcon />,
            link: '/admin/categories',
        },
        {
            name: 'Messages',
            icon: <MessagesNavIcon />,
            link: '/admin/messages',
        },
        {
            name: 'Listings',
            icon: <ListingsNavIcon />,
            link: '/admin/listings',
        },
        {
            name: 'Wallet',
            icon: <WalletNavIcon />,
            link: '/admin/wallet',
        },
    ]
    const [active, setActive] = useState('/admin/dashboard')

    console.log(pathname)

    useEffect(() => {
        const absPath = pathname.split('?')[0].split('/').slice(0, 3).join('/')
        console.log(absPath)
        setActive(absPath)
    }, [pathname])

    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_container__header}>
                <Logo type='dark' />
            </div>
            <div className={styles.navlinks_wrapper}>
                <ul className={styles.navlinks_container}>
                    {sidebarItems.map((item, index) => (
                        <Link key={index} data-active={active === item.link} href={item.link} className={styles.navlinks_container__item} >
                            <span className='icon'>
                                {item.icon}
                            </span>
                            <span className='title'>{item.name}</span>
                        </Link>
                    ))}
                </ul>

                <ul className={`${styles.navlinks_container} ${styles.btn_container}`} >
                    <Link href='/admin/settings?q=payments' className={styles.navlinks_container__item} data-active={active === '/admin/settings'}>
                        <span>
                            <SettingsNavIcon />
                        </span>
                        <p>Settings</p>
                    </Link>
                    <div className={styles.navlinks_container__item}>
                        <span>
                            <LogoutNavIcon />
                        </span>
                        <p className={styles.logout_text}>Logout</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar