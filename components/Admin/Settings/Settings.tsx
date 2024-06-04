'use client'
import React, { useEffect, useState } from 'react'
import { Account, HelpCenter, Payments, Profile, Sidebar, Verification } from './components'
import styles from './Settings.module.scss'

import { useSearchParams } from 'next/navigation'


const Settings = () => {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')
  const [active, setActive] = useState<string>('/admin/settings?q=payments')
  const settingsLists = [
    {
      id: 3,
      name: 'Payments',
      path: '/admin/settings?q=payments',
      slug: 'payments'
    },
    {
      id: 1,
      name: 'Profile',
      path: '/admin/settings?q=profile',
      slug: 'profile'
    },
    {
      id: 2,
      name: 'Verification',
      path: '/admin/settings?q=verification',
      slug: 'verification'
    },

    {
      id: 4,
      name: 'Account',
      path: '/admin/settings?q=account',
      slug: 'account'
    },
    {
      id: 5,
      name: 'Help center',
      path: '/admin/settings?q=help-center',
      slug: 'help-center'
    },
  ]

  useEffect(() => {
    setActive(searchQuery || 'payments')
  }, [searchQuery])

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Settings</h2>
      <div className={styles.container}>
        <Sidebar settingsLists={settingsLists} active={active} />
        <div className={styles.content}>
          {searchQuery === 'profile' && <Profile />}
          {searchQuery === 'verification' && <Verification />}
          {searchQuery === 'account' && <Account />}
          {searchQuery === 'payments' && <Payments />}
          {searchQuery === 'help-center' && <HelpCenter />}
        </div>
      </div>
    </div>
  )
}

export default Settings