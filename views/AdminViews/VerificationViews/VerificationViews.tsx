'use client'
import React, { useState } from 'react'
import styles from './VerificationViews.module.scss'
import { PersonalIdentification, PhoneVerification, IdVerification, FaceMatch, GetStartedNav } from '@/components/Admin/GetStarted/components'
import Image from 'next/image'
import { Button } from '@/shared'

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

  const handleNextStep = () => {
    if(currentStep === stepCount) return
    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    if(currentStep === 1) return
    setCurrentStep(currentStep - 1)
  }
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
      <div className={styles.button_container} data-page={currentStep}>
        {
          currentStep > 1 && <Button onClick={handlePrevStep} buttonType='secondary' className={styles.container__btn_started}>
            Back
          </Button>
        }
        {
          currentStep < stepCount && <Button onClick={handleNextStep} buttonType='primary' iconSuffix='/svgs/color-arrow.svg' className={styles.container__btn_started}>
            Continue
          </Button>
        }
      </div>
    </div>
  )
}

export default VerificationViews