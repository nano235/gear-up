'use client'
import React, { useEffect, useState } from 'react'
import { Account, Payments, Profile, Sidebar } from './components'
import styles from './Settings.module.scss'
import { useSearchParams } from 'next/navigation'



const Settings = () => {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')
  const [active, setActive] = useState<string>('/admin/settings?q=profile')
  const settingsLists = [
    {
      id: 1,
      name: 'Profile',
      path: '/admin/settings?q=profile',
      slug: 'profile',
      description: "Create your profile as a Super Admin",

    },
    {
      id: 2,
      name: 'Members',
      path: '/admin/settings?q=members',
      slug: 'members',
      description: "Add & Manage gearup members",
    },

    {
      id: 4,
      name: 'Roles & Permissions',
      path: '/admin/settings?q=roles-permissions',
      slug: 'roles-permissions',
      description: "Grant special roles and permissions",
    },
  ]

  useEffect(() => {
    setActive(searchQuery || 'profile')
  }, [searchQuery])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Sidebar settingsLists={settingsLists} active={active} />
        <div className={styles.content}>
          {searchQuery === 'profile' && <Profile />}
          {searchQuery === 'members' && <Account />}
          {searchQuery === 'roles-permissions' && <Payments />}
        </div>
      </div>
    </div>
  )
}

export default Settings