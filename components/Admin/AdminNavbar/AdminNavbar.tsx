import React from 'react'
import styles from './AdminNavbar.module.scss'
import { InputField, Logo } from '@/shared'
import { ArrowDownIcon, LogoIcon, NotificationIcon } from '@/shared/svgs/dashboard'
import Image from 'next/image'

const AdminNavbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo_icon}>
        <Logo type='dark' />
      </div>
      <div className={styles.input_container}>
        <InputField placeholder='Try e.g Nikon SR ...' icon='/svgs/icon-search-dark.svg' iconTitle='search-icon' />
      </div>
      <div className={styles.icons_container}>
        <span className={styles.search_icon}>
          <Image src="/svgs/icon-search-dark.svg" width={50} height={50} alt="search-icon" />
        </span>
        <span>
          <NotificationIcon />
        </span>
        <span className={styles.menu_icon}>

        </span>
      </div>
      <div className={styles.navbar_container__details}>
        <div className={styles.avatar}>
          <Image src="/images/admin-img.jpg" width={40} height={40} alt="avatar" />
        </div>
        <span className={styles.name}>Waden Warren</span>
        <span>
          <ArrowDownIcon />
        </span>
      </div>
    </div>
  )
}

export default AdminNavbar