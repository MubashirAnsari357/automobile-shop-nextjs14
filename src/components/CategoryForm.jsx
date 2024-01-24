import React from 'react'
import { AddIcon } from './icons'
import { addCategory, updateCategory } from '@/lib/Actions/actions'

const CategoryForm = ({edit, category}) => {
  const handleEdit = updateCategory.bind(null, category?._id)
  return (
    <form action={edit ? handleEdit : addCategory} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="formInput"
            placeholder="Type Category name"
            required
            defaultValue={category?.name || ''}
          />
        </div>
      </div>
      <button type="submit" className="primary-btn w-full">
        <AddIcon className="me-1 -ms-1 w-5 h-5" />
        {edit ? 'Update' : 'Add New'} Category
      </button>
    </form>
  )
}

export default CategoryForm