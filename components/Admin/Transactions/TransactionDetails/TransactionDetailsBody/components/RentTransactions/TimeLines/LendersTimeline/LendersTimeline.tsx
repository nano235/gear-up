'use client'
import React, { useState } from 'react'
import styles from './DetailsTimeline.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import { CheckmarkIcon, LineIcon } from '@/shared/svgs/dashboard'
import { AcceptDecline, AwaitingConfirmation, ConfirmHandover, ConfirmReturn, ReviewFeedback, TransactionOngoing } from './components'
import { rentLendersTimeLine } from '../../../utils/data'

interface Props {
    timelines?: any
}

const LendersTimeline = ({ timelines }: Props) => {
    const [steps, setSteps] = useState(1)
    const [active, setActive] = useState(1)

    const handlePrev = () => {
        if (steps > 1) {
            setSteps(steps - 1)
        }
    }

    const handleNext = () => {
        if (steps < timelines.length) {
            setSteps(steps + 1)
        }
    }

    return (
        <>
            <div>
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}> next</button>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <HeaderSubText title="Transaction timeline" />
                    <ul className={styles.timelines_container}>
                        {
                            rentLendersTimeLine?.map((timeline: any) => {
                                return (
                                    <li key={timeline.id} className={styles.timeline}>
                                        <div className={styles.span_container}>
                                            <span className={styles.id_container} data-active={timeline.id <= steps}>
                                                {
                                                    steps - 1 < timeline.id ? timeline.id : <span className={styles.check_icon}><CheckmarkIcon /></span>
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
                        steps == 1 && <AcceptDecline handleNext={handleNext} />
                    }
                    {
                        steps === 2 && <ConfirmHandover handleNext={handleNext} />
                    }
                    {
                        steps === 3 && <AwaitingConfirmation />
                    }
                    {
                        steps === 4 && <TransactionOngoing />
                    }
                    {
                        steps === 5 && <ConfirmReturn handleNext={handleNext} />
                    }
                    {
                        steps === 6 && <ReviewFeedback />
                    }

                </div>
            </div>
        </>
    )
}

export default LendersTimeline