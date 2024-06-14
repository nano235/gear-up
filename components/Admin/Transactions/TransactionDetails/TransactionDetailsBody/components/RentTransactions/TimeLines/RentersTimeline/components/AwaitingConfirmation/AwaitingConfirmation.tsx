import React from 'react'
import styles from './AwaitingConfirmation.module.scss'

interface Props {
    handleNext: () => void
}

const AwaitingConfirmation = ({handleNext}:Props) => {
    return (
        <div>AwaitingConfirmation</div>
    )
}

export default AwaitingConfirmation