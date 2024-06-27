'use client'
import React, { useState, useEffect } from 'react'
import styles from './BuyersTimeline.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import { CheckmarkIcon } from '@/shared/svgs/dashboard'
import { AwaitingApproval, ConfirmShipment, RatingFeedback, StatusReport } from './components'
import { saleBuyersTimeline, saleBuyersTimelineThirdParty } from '../../../utils/data'
import { useSearchParams } from 'next/navigation'
interface Timeline {
    id: number
    name: string
}
interface Props {
    timelines?: any
}

const BuyersTimeline = ({ timelines }: Props) => {
    const [steps, setSteps] = useState(1)
    const [newTimelines, setNewTimelines] = useState<Timeline[]>([])
    const search = useSearchParams()
    const thirdPartyVerification = search.get('third_party')

    const handlePrev = () => {
        if (steps > 1) {
            setSteps(steps - 1)
        }
    }

    const handleNext = () => {
        if (steps < newTimelines.length) {
            setSteps(steps + 1)
        }
    }

    useEffect(() => {
        if (thirdPartyVerification) {
            setNewTimelines(saleBuyersTimelineThirdParty)
        } else {
            setNewTimelines(saleBuyersTimeline)
        }
    }, [thirdPartyVerification])

    return (
        <div>
            <button onClick={handlePrev}>next</button>
            <button onClick={handleNext}>prev</button>
            <div className={styles.container}>
                <div className={styles.left}>
                    <HeaderSubText title="Transaction timeline" />
                    <ul className={styles.timelines_container}>
                        {
                            newTimelines?.map((timeline: any) => {
                                return (
                                    <li key={timeline.id} className={styles.timeline}>
                                        <div className={styles.span_container}>
                                            <span className={styles.id_container} data-active={timeline.id <= steps}>
                                                {
                                                    steps - 1 < timeline.id ? timeline.id : <span className={styles.check_icon} data-active={timeline.id <= steps}><CheckmarkIcon /></span>
                                                }
                                            </span>
                                            {
                                                timeline.id < newTimelines.length && <div data-active={timeline.id <= steps - 1} className={styles.line_icon}>
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
                        thirdPartyVerification ?
                            <>
                                {
                                    steps == 1 && <AwaitingApproval handleNext={handleNext} />
                                }
                                {
                                    steps === 2 && <StatusReport handleNext={handleNext} />
                                }
                                {
                                    steps === 3 && <ConfirmShipment handleNext={handleNext} thirdPartyVerification={Boolean(thirdPartyVerification)} />
                                }
                                {
                                    steps === 4 && <RatingFeedback />
                                }
                            </>
                            :
                            <>
                                {
                                    steps == 1 && <AwaitingApproval handleNext={handleNext} />
                                }
                                {
                                    steps === 2 && <ConfirmShipment handleNext={handleNext} />
                                }
                                {
                                    steps === 3 && <RatingFeedback />
                                }
                            </>
                    }

                </div>
            </div>
        </div>
    )
}

export default BuyersTimeline