import React from 'react'
import styles from './Shipment.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'

interface Props {
    handleNext: () => void

}
const Shipment = ({ handleNext }: Props) => {
    return (
        <div className={styles.container}>
            <HeaderSubText title="Shipment" />
            <div className={styles.details_container}>
                <p className={styles.details}>
                    Please make sure you’ve successfully shipped the gear to the buyer before confirming shipment </p>
            </div>

            <div className={styles.container__summary_container}>
                <h3 className={styles.title}>Shipment details</h3>
                <div className={styles.summary_item}>
                    <h4>Full-name</h4>
                    <p>Wade Warren</p>
                </div>
                <div className={styles.summary_item}>
                    <h4>Shipment type</h4>
                    <p>Shipment</p>
                </div>
                <div className={styles.summary_item}>
                    <h4>Country</h4>
                    <p>Nigeria</p>
                </div>
                <div className={styles.summary_item}>
                    <h4>City</h4>
                    <p>Lagos, Nigeria</p>
                </div>
                <div className={styles.summary_item}>
                    <h4>Shipment address</h4>
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                <div className={styles.summary_item}>
                    <h4>Mobile number</h4>
                    <p>(480) 555-0103</p>
                </div>
            </div>

        </div>
    )
}

export default Shipment