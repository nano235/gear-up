'use client';
import React, { useEffect, useState } from 'react'
import styles from './Listings.module.scss'
import ListingTable from './components/ListingTable/ListingTable'
import { Button, InputField, ToggleSwitch } from '@/shared'
import { GridAddIcon } from '@mui/x-data-grid';
import HeaderSubText from '../HeaderSubText/HeaderSubText';
import ReuseableFilters from '../ReuseableFilter/ReuseableFilter';
import { useRouter } from 'next/navigation';

enum Type {
  Rent = 'Rent',
  Buy = 'Buy',
  Courses = 'Courses',
}

const parentFilters = [
  {
    id: 1,
    name: 'Rent',
    subFilters: [
      {
        id: 1,
        name: 'All categories'
      },
      {
        id: 2,
        name: 'Cameras'
      },
      {
        id: 3,
        name: 'Lenses'
      },
      {
        id: 4,
        name: 'Drones'
      }
    ]
  },
  {
    id: 2,
    name: 'Buy',
    subFilters: [
      {
        id: 1,
        name: 'All categories'
      },
      {
        id: 2,
        name: 'Cameras'
      },
      {
        id: 3,
        name: 'Lenses'
      },
      {
        id: 4,
        name: 'Drones'
      }
    ]
  },
  {
    id: 3,
    name: 'Courses',
    subFilters: [
      {
        id: 1,
        name: 'Ebooks'
      },
      {
        id: 2,
        name: 'Live'
      },
      {
        id: 3,
        name: 'Video'
      },
      {
        id: 4,
        name: 'Audio'
      }
    ]
  }
]
const Lisitings = () => {
  const [activeFilterId, setActiveFilterId] = useState(1)
  const [activeSubFilterId, setActiveSubFilterId] = useState(1)
  const [activeFilter, setActiveFilter] = useState<Type>(Type.Rent)
  const router = useRouter()

  useEffect(() => {
    const activeFilter = parentFilters.find(filter => filter.id === activeFilterId)
    setActiveFilter(activeFilter?.name as Type)
  }, [activeFilterId])

  const handleButtonClick = () => {
    if (activeFilter === Type.Courses) {
      router.push('/course-listing')
    }
    if (activeFilter === Type.Rent || activeFilter === Type.Buy) {
      router.push('/new-listing')
    }
  }

  console.log(activeFilter, 'lsi')
  return (
    <div className={styles.container}>
      <HeaderSubText title='Listings' variant='main' />
      <div className={styles.container__filters_container}>
        <ReuseableFilters parentFilters={parentFilters} activeFilterId={activeFilterId} setActiveFilterId={setActiveFilterId} setActiveSubFilterId={setActiveSubFilterId} activeSubFilterId={activeSubFilterId} />
        <div className={styles.container__filters_container__listings_container}>
          <p>Hide All Listings</p>
          <ToggleSwitch />
          <Button onClick={handleButtonClick}> <GridAddIcon className={styles.add_icon} /> {activeFilter === Type.Courses ? "New Course" : "Create a listing"}</Button>
        </div>
      </div>
      <ListingTable activeFilter={activeFilter?.toLowerCase()} />
    </div>
  )
}

export default Lisitings