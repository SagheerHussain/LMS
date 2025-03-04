import FilterBooks from '@/components/FilterBooks';
import Layout from '../../app/(root)/Layout';
import React from 'react';

const FilterPage = () => {
  return (
    <>
      <Layout className="py-10">
        <FilterBooks></FilterBooks>
      </Layout>
    </>
  )
}

export default FilterPage
