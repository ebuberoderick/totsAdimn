"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '../components/layouts/appLayout'
import AppTable from '../components/organisms/AppTable'
import { fetchUsers } from '../services/authService';
import AppPagination from '../components/organisms/AppPagination';

function page() {
  const [users, setUsers] = useState(null);


  const fetchUsersFN = async () => {
    const { data, status } = await fetchUsers()
    if (status) {
      setUsers(data.data)
    }
  }

  useEffect(() => {
    fetchUsersFN()
  }, [])

  return (
    <AppLayout active={"User Profiles"} title={"User Profiles"}>
      <AppTable users={users?.data} />
      <div className="md:flex flex-wrap gap-8 md:items-center md:justify-between">
        <div className="p-3 text-sm text-gray-400">Showing {users?.from} to {users?.to} of {users?.total} entries</div>
        <AppPagination totalRecords={users} newData={(data) => setUsers(data)} />
      </div>
    </AppLayout>
  )
}

export default page
