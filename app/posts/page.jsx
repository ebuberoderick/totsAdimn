"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '../components/layouts/appLayout'
import PostCard from '../components/organisms/PostCard'
import { fetchPosts } from '../services/authService'
import AppPagination from '../components/organisms/AppPagination'

function Page() {


    const [list, setList] = useState([])

    const fetchPostsFN = async () => {
        const { data, status } = await fetchPosts()
        if (status) {
            setList(data.data)
        }
    }

    useEffect(() => {
        fetchPostsFN()
    }, [])

    return (
        <AppLayout active={"Posts"} title={"Posts"}>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    list?.data?.map((data, i) => (
                        <PostCard data={data} reload={fetchPostsFN} key={i} />
                    ))
                }
            </div>

            <div className="md:flex flex-wrap gap-8 md:items-center md:justify-between">
                <div className="p-3 text-sm text-gray-400">Showing {list?.from} to {list?.to} of {list?.total} entries</div>
                <AppPagination totalRecords={list} newData={(data) => setList(data)} />
            </div>
        </AppLayout>
    )
}

export default Page