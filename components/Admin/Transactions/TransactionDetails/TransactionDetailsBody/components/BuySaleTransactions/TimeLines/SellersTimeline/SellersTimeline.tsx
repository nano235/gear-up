'use client'
import React, { useEffect, useState } from 'react'
import styles from './SellersTimeline.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import { CheckmarkIcon, LineIcon } from '@/shared/svgs/dashboard'
import { AcceptDecline, AwaitingConfirmation, RatingFeedback, Shipment, StatusReport } from './components'
import { saleSellersTimeline, saleSellersTimelineThirdParty } from '../../../utils/data'
import { useSearchParams } from 'next/navigation'

interface Props {
    timelines?: any
}

interface Timeline {
    id: number
    name: string
}

const SellersTimeline = ({ timelines }: Props) => {
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
            setNewTimelines(saleSellersTimelineThirdParty)
        } else {
            setNewTimelines(saleSellersTimeline)
        }
    }, [thirdPartyVerification])

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
                        steps == 1 && <AcceptDecline handleNext={handleNext} />
                    }
                    {
                        steps === 2 && <Shipment handleNext={handleNext} />
                    }
                    {
                        steps === 3 && <AwaitingConfirmation />
                    }
                    <>
                        {
                            thirdPartyVerification ?
                                <>
                                    {
                                        steps === 4 && <StatusReport />
                                    }
                                    {
                                        steps === 5 && <RatingFeedback />
                                    }
                                </>
                                :
                                <>
                                    {
                                        steps === 4 && <RatingFeedback />
                                    }
                                </>
                        }
                    </>
                </div>
            </div>
        </>
    )
}

export default SellersTimeline