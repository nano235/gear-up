import React from 'react'
import styles from './ShippingForm.module.scss'
import Modal from '@/shared/modals/modal/Modal'
import { Form, Formik } from 'formik'
import { Button, InputField } from '@/shared'
import * as Yup from 'yup'

interface Props {
    showShippingDetailsForm: boolean
    setShowShippingDetailsForm: React.Dispatch<React.SetStateAction<boolean>>
}

interface ShippingDetailsProps {
    name: string,
    company: string,
    vat: string,
    address: string,
    city: string,
    zip: string,
    mobile: string

}

const ShippingForm = ({ showShippingDetailsForm, setShowShippingDetailsForm }: Props) => {
    const closeModal = () => {
        console.log("closed")
        setShowShippingDetailsForm(false)
    }

    const initialValues: ShippingDetailsProps = {
        name: "",
        company: "",
        vat: "",
        address: "",
        city: "",
        zip: "",
        mobile: ""
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        bank: Yup.string().required('Bank is required'),
        accountNumber: Yup.string()
            .required('Account number is required')
            .matches(/^\d+$/, 'Account number must be numeric'),
    });

    const handleSubmit = (values: ShippingDetailsProps) => {
        // Handle form submission
        console.log(values);
    };

    return (
        <Modal
            openModal={showShippingDetailsForm} setOpenModal={closeModal} title="Shipping Information" description="Please provide your client with the shipping information"
        >
            <div className={styles.container}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form >
                        <div className={styles.form}>
                            <div className={styles.form_field}>
                                <InputField label='Name' placeholder='Enter full name' />
                            </div>
                            <div className={styles.form_field}>
                                <InputField label='Company (optional)' placeholder='Enter company name' />
                            </div>
                            <div className={styles.form_field}>
                                <InputField label='VAT (optional)' placeholder='Enter VAT number' />
                            </div>
                            <div className={styles.phone_field}>
                                <InputField label='Address' placeholder='Enter address' />
                            </div>
                            <div className={styles.grid_Styles}>
                                <div className={styles.form_field}>
                                    <InputField label='Zip' placeholder='Enter zip code' />
                                </div>
                                <div className={styles.form_field}>
                                    <InputField label='City' placeholder='Enter city' />
                                </div>
                            </div>
                            <div className={styles.phone_field}>
                                <InputField label='Mobile' placeholder='Enter Phonr number' />
                            </div>
                        </div>
                        <div className={styles.submit_btn_container}>
                            <Button disabled buttonType='primary' type="submit">Submit</Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </Modal>
    )
}

export default ShippingForm