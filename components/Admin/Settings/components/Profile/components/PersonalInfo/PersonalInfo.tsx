// components/PayoutForm.tsx
'use client'
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './PersonalInfo.module.scss';
import { Button, ImageUploader, InputField } from '@/shared';
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText';

interface PayoutFormValues {
    firstName: string;
    lastName: string;
    bank: string;
    accountNumber: string;
}

const PersonalInfoForm: React.FC = () => {
    const initialValues: PayoutFormValues = {
        firstName: '',
        lastName: '',
        bank: '',
        accountNumber: '',
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        bank: Yup.string().required('Bank is required'),
        accountNumber: Yup.string()
            .required('Account number is required')
            .matches(/^\d+$/, 'Account number must be numeric'),
    });

    const handleSubmit = (values: PayoutFormValues) => {
        // Handle form submission
        console.log(values);
    };

    return (
        <div className={styles.container}>
            <div className={styles.container__form_container}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form >
                        <HeaderSubText title="My profile" variant='main' />
                        <div className={styles.uploader_container}>
                            <ImageUploader />
                            <div>

                                <h3 className={styles.name}>Einstein Oyakhilome</h3>
                                <p className={styles.email}>super admin</p>
                            </div>
                        </div>
                        <div className={styles.container__form_container__form}>
                            <div className={styles.form_field}>
                                <InputField label='First name' value='Einstein' />
                            </div>
                            <div className={styles.form_field}>
                                <InputField label='Last name' value='Oyakhilome' />
                            </div>
                            <div className={styles.address_field}>
                                <InputField label='Email' placeholder='enter address' value='einstein@gmail.com' />
                            </div>
                            <div className={styles.address_field}>
                                <InputField label='My role' placeholder='enter address' value='super admin' disabled inputClassName={styles.disabled_field} />
                            </div>
                        </div>
                        <div className={styles.submit_btn_container}>
                            <Button disabled buttonType='primary' type="submit">Save changes</Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default PersonalInfoForm;
