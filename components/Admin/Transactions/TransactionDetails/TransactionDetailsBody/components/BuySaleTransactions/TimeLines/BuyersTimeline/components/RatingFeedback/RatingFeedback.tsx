'use client'
import React, { useState } from 'react'
import styles from './RatingFeedback.module.scss'
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText'
import { Button, StarRating, TextArea } from '@/shared'

const RatingFeedback = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <HeaderSubText title="Rating and feedback" description='Please tell us about your lending experience and rate the services' />
        <StarRating onRatingChange={handleRatingChange} />
        <TextArea placeholder="Write your feedback here..." rows={7} className={styles.textarea}/>
      </div>
      <div className={styles.btn_container}>
        <Button >Submit</Button>
      </div>
    </div>
  )
}

export default RatingFeedback