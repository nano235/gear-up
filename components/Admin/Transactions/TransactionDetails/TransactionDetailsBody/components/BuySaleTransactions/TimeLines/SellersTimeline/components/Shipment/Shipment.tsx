import React from 'react'
import styles from './Shipment.module.scss'

interface Props {
    handleNext: () => void

}
const Shipment = ({ handleNext }: Props) => {
    return (
        <div>Shipment</div>
    )
}

export default Shipment