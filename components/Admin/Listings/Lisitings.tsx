'use client';
import React, { useState } from 'react'
import styles from './Listings.module.scss'
import { ListingFilters } from './components'
import ListingTable from './components/ListingTable/ListingTable'
import { Button, InputField } from '@/shared'

import { Switch } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
const Lisitings = () => {
  

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}> Listings</h1>
      <div className={styles.container__filters_container}>
        <ListingFilters />
        <div className={styles.container__filters_container__listings_container}>
          <p>Hide All Listings</p>
          <Switch/>
          <Button> <GridAddIcon/> New course</Button>
        </div>
      </div>
      <ListingTable />
    </div>
  )
}

export default Lisitings