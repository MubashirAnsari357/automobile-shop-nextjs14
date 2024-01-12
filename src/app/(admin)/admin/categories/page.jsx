import { categories } from '@/app/MockData'
import Table from '@/components/Table'
import React from 'react'

const Categories = () => {
  return (
    <Table data={categories} title={'Categories'}/>
  )
}

export default Categories