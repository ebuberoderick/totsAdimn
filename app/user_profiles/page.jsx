"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '../components/layouts/appLayout'
import AppTable from '../components/organisms/AppTable'
import { fetchSuspendedUser, fetchUsers } from '../services/authService';
import AppPagination from '../components/organisms/AppPagination';

function Page() {
  const [users, setUsers] = useState(null);
  const [active, setActive] = useState("all")
  const [suspended, setSuspended] = useState(null)
  const [all, setAll] = useState(null)

  const fetchUsersFN = async () => {
    const { data, status } = await fetchUsers()
    const { data: res, status: sta } = await fetchSuspendedUser()
    if (status && sta) {
      setUsers(data.data)
      setAll(data.data)
      setSuspended(res.data)
    }
  }

  useEffect(() => {
    fetchUsersFN()
  }, [])

  return (
    <AppLayout active={"User Profiles"} title={"User Profiles"}>
      <div className="flex items-center gap-3">
        <div onClick={() => {setActive("all");setUsers(all)}} className={`px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer ${active === "all" ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}>All</div>
        <div onClick={() => {setActive("suspended");setUsers(suspended)}} className={`px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer ${active === "suspended" ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}>Suspended</div>
      </div>
      <AppTable users={users?.data} />
      <div className="md:flex flex-wrap gap-8 md:items-center md:justify-between">
        <div className="p-3 text-sm text-gray-400">Showing {users?.from} to {users?.to} of {users?.total} entries</div>
        <AppPagination totalRecords={users} newData={(data) => setUsers(data)} />
      </div>
    </AppLayout>
  )
}

export default Page
