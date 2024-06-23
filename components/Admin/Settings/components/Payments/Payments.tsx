// components/PayoutForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Payments.module.scss';
import { Button, Header, InputField, Select } from '@/shared';
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText';

interface PayoutFormValues {
    firstName: string;
    lastName: string;
    bank: string;
    accountNumber: string;
}

const Payments: React.FC = () => {
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
    const banksOptions = [
        'GTBank',
        'Access Bank',
        'Zenith Bank',
        'First Bank',
        'UBA',
        'FCMB',
        'Sterling Bank',
        'Union Bank',
        'Wema Bank',
        'Polaris Bank',
        'Keystone Bank',
    ]

    return (
        <div className={styles.container}>
            <HeaderSubText title="Payout preferences" description="We need some information about you to be able to send you money" />
            <div className={styles.container__form_container}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form >
                        <div className={styles.container__form_container__form}>
                            <div className={styles.form_field}>
                                <InputField label='First name' />
                            </div>
                            <div className={styles.form_field}>
                                <InputField label='Last name' />
                            </div>
                            <div className={styles.form_field}>
                                <Select options={banksOptions} label='Bank' />
                            </div>
                            <div className={styles.form_field}>
                                <InputField label='Account number' />
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

export default Payments;
