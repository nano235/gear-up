'use client';
import React, { useState } from 'react'
import styles from './Listings.module.scss'
import { ListingFilters } from './components'
import ListingTable from './components/ListingTable/ListingTable'
import { Button, InputField, ToggleSwitch } from '@/shared'

import { Switch } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import HeaderSubText from '../HeaderSubText/HeaderSubText';
const Lisitings = () => {


  return (
    <div className={styles.container}>
      <HeaderSubText title='Listings' variant='main' />
      <div className={styles.container__filters_container}>
        <ListingFilters />
        <div className={styles.container__filters_container__listings_container}>
          <p>Hide All Listings</p>
          <ToggleSwitch />
          <Button> <GridAddIcon /> New course</Button>
        </div>
      </div>
      <ListingTable />
    </div>
  )
}

export default Lisitings