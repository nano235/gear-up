'use client'
import React, { useState } from 'react'
import styles from './RentersTimeline.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import { CheckmarkIcon } from '@/shared/svgs/dashboard'
import { AwaitingApproval, AwaitingConfirmation, ConfirmHandover, InitiateReturn, ReviewFeedback, TransactionOngoing } from './components'
import { rentRentersTimeline } from '../../../utils/data'

interface Props {
    timelines?: any
}

const RentersTimeline = ({ timelines }: Props) => {
    const [steps, setSteps] = useState(1)
    const [active, setActive] = useState(1)

    const handlePrev = () => {
        if (steps > 1) {
            setSteps(steps - 1)
        }
    }

    const handleNext = () => {
        if (steps < rentRentersTimeline.length) {
            setSteps(steps + 1)
        }
    }

    return (
        <>
            {/*    <div>
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}> next</button>
            </div> */}
            <div className={styles.container}>
                <div className={styles.left}>
                    <HeaderSubText title="Transaction timeline" />
                    <ul className={styles.timelines_container}>
                        {
                            rentRentersTimeline?.map((timeline: any) => {
                                return (
                                    <li key={timeline.id} className={styles.timeline}>
                                        <div className={styles.span_container}>
                                            <span className={styles.id_container} data-active={timeline.id <= steps}>
                                                {
                                                    steps - 1 < timeline.id ? timeline.id : <span className={styles.check_icon} data-active={timeline.id <= steps}><CheckmarkIcon /></span>
                                                }
                                            </span>
                                            {
                                                timeline.id < 6 && <div data-active={timeline.id <= steps - 1} className={styles.line_icon}>
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
                        steps == 1 && <AwaitingApproval handleNext={handleNext} />
                    }
                    {
                        steps === 2 && <ConfirmHandover handleNext={handleNext} />
                    }
                    {
                        steps === 3 && <TransactionOngoing handleNext={handleNext} />
                    }
                    {
                        steps === 4 && <InitiateReturn handleNext={handleNext} />
                    }
                    {
                        steps === 5 && <AwaitingConfirmation />
                    }
                    {
                        steps === 6 && <ReviewFeedback />
                    }
                </div>
            </div>
        </>
    )
}

export default RentersTimeline