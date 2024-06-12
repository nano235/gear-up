'use client'
import React, { useState } from 'react'
import styles from './DetailsTimeline.module.scss'
import AcceptDecline from './components/AcceptDecline/AcceptDecline'
import ConfirmHandover from './components/ConfirmHandover/ConfirmHandover'
import AwaitingConfirmation from './components/AwaitingConfirmation/AwaitingConfirmation'
import TransactionOngoing from './components/TransactionOngoing/TransactionOngoing'
import ConfirmReturn from './components/ConfirmReturn/ConfirmReturn'
import ReviewFeedback from './components/ReviewFeedback/ReviewFeedback'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import { LineIcon } from '@/shared/svgs/dashboard'

const DetailsTimeline = () => {
    const [steps, setSteps] = useState(1)
    const [active, setActive] = useState(1)


    const timeLines = [
        {
            id: 1,
            name: "Accept/Decline transaction"
        },
        {
            id: 2,
            name: "Confirm handover"
        },
        {
            id: 3,
            name: "Awaiting confirmation"
        },
        {
            id: 4,
            name: "Transaction ongoing"
        },
        {
            id: 5,
            name: "Confirm return"
        },
        {
            id: 6,
            name: "Review & Feedback"
        },
    ]

    const handlePrev = () => {
        if (steps > 1) {
            setSteps(steps - 1)
        }
    }

    const handleNext = () => {
        if (steps < 6) {
            setSteps(steps + 1)
        }
    }

    return (
        <>
           {/*  <div>
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}> next</button>
            </div> */}
            <div className={styles.container}>
                <div className={styles.left}>
                    <HeaderSubText title="Transaction timeline" />
                    <ul className={styles.timelines_container}>
                        {
                            timeLines.map((timeline) => {
                                return (
                                    <li key={timeline.id} className={styles.timeline}>
                                        <div className={styles.span_container}>
                                            <span className={styles.id_container} data-active={timeline.id <= steps}>{timeline.id}</span>
                                            {
                                                timeline.id < 6 &&  <div data-active={timeline.id <= steps -1 } className={styles.line_icon}>
                                                </div>
                                            }
                                        </div>
                                        <p data-active={timeline.id <= steps}>{timeline.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.right}>
                    {
                        steps == 1 && <AcceptDecline />
                    }
                    {
                        steps === 2 && <ConfirmHandover />
                    }
                    {
                        steps === 3 && <AwaitingConfirmation />
                    }
                    {
                        steps === 4 && <TransactionOngoing />
                    }
                    {
                        steps === 5 && <ConfirmReturn />
                    }
                    {
                        steps === 6 && <ReviewFeedback />
                    }

                </div>
            </div>
        </>
    )
}

export default DetailsTimeline