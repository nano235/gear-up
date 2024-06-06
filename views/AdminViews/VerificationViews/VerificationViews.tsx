'use client'
import React, { useState } from 'react'
import styles from './VerificationViews.module.scss'
import { PersonalIdentification, PhoneVerification, IdVerification, FaceMatch, GetStartedNav } from '@/components/Admin/GetStarted/components'
import Image from 'next/image'

const VerificationViews = () => {
  const [stepCount, setStepCount] = useState(4)
  const [currentStep, setCurrentStep] = useState(1)

  const onClose = () => {
    console.log('Close')
  }

  const verificationSteps = [
    'Personal Identification',
    'Phone Verification',
    'ID Verification',
    'Face Match'
  ]
  return (
    <div className={styles.container}>
      <GetStartedNav stepCount={verificationSteps.length} currentStep={currentStep} steps={verificationSteps} onClose={onClose} />
      <main className={styles.container__main_content}>
        <div className={styles.container__main_content__left_side}>
          {
            currentStep === 1 && <PersonalIdentification />
          }
          {
            currentStep === 2 && <PhoneVerification />
          }
          {
            currentStep === 3 && <IdVerification />
          }
          {
            currentStep === 4 && <FaceMatch />

          }
        </div>
        <div className={styles.container__main_content__right_side}>
          <div className={styles.img_container}>
            <Image src="/svgs/verification-bg.svg" height={300} width={300} alt="Verification" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default VerificationViews