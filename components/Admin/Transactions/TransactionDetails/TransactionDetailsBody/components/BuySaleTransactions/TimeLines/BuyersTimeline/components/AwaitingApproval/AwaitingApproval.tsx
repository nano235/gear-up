import React from 'react'
import styles from './AwaitingApproval.module.scss'

interface Props {
  handleNext: () => void
}

const AwaitingApproval = ({ handleNext }: Props) => {
  return (
    <div>AwaitingApproval</div>
  )
}

export default AwaitingApproval