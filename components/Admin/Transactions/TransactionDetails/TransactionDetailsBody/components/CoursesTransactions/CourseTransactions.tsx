import React from 'react'
import styles from './CourseTransactions.module.scss'
import { Completed, Live, Pending } from './components'

interface Props {
  item?: any
}

const CourseTransactions = ({ item }: Props) => {
  return (
    <div className={styles.container}>
      {
        item.status === 'completed' && <Completed />
      }
      {
        item.status === 'pending' && <Pending />
      }
      {
        item.status === 'live' && <Live />
      }
    </div>
  )
}

export default CourseTransactions