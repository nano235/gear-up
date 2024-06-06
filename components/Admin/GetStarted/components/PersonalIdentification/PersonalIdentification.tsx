// components/PayoutForm.tsx
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './PersonalIdentification.module.scss';
import { Button, InputField, Select, TextArea } from '@/shared';
import HeaderSubText from '@/components/Admin/HeaderSubText/HeaderSubText';
import countryList from 'react-select-country-list';

interface PayoutFormValues {
  firstName: string;
  lastName: string;
  bank: string;
  accountNumber: string;
}

const PersonalIdentification: React.FC = () => {
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

  const monthsOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const yearsOptions = Array.from(new Array(100), (val, index) => `${2022 - index}`)
  const daysOptions = Array.from(new Array(31), (val, index) => `${index + 1}`)

  const countries = countryList().getData()

  return (
    <div className={styles.container}>
      <HeaderSubText title="Personal identification" description='Kindly note that we require you to input your information as it appears on your valid ID' />
      <div className={styles.container__form_container}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form >
            <div className={styles.container__form_container__form}>
              <div className={styles.field}>
                <InputField label='Bvn' placeholder='Enter Bvn' />
              </div>
              <div className={styles.field}>
                <InputField label='First name' placeholder='Enter first name' />
              </div>
              <div className={styles.field}>
                <InputField label='Last name' placeholder='Enter last name' />
              </div>
              <div className={styles.flex_fields}>
                <div className={styles.field}>
                  <Select label='Birth Date' options={daysOptions} />
                </div>
                <div className={styles.field}>
                  <Select label='Birth Month' options={monthsOptions} />
                </div>
                <div className={styles.field}>
                  <Select label='Birth Year' options={yearsOptions} />
                </div>
              </div>
              <div className={styles.field}>
                <Select label='County' options={countries.map((item)=>item.label)} />
              </div>
              <div className={styles.field}>
                <InputField label='Address' placeholder='Enter address' />
              </div>
              <div className={styles.flex_fields}>
                <div className={styles.field}>
                  <InputField label='Postal code' placeholder='Enter postal code' />
                </div>
                <div className={styles.field}>
                  <InputField label='City' placeholder='Enter city' />
                </div>
              </div>
            </div>
            <div className={styles.submit_btn_container}>
              <Button disabled buttonType='primary' type="submit">Continue</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PersonalIdentification;
