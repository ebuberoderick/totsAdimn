"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '../components/layouts/appLayout'
import PostReport from '../components/molecules/PostReport'
import { fetchReports } from '../services/authService'
import AppPagination from '../components/organisms/AppPagination'
import GroupReport from '../components/molecules/GroupReport'

function Page() {

    const [active, setActive] = useState("post")
    const [postReport, setPostReport] = useState({})
    const [groupReport, setGroupReport] = useState({})
    const [userReport, setUserReport] = useState({})


    const fetchReportsFN = async () => {
        const { data, status } = await fetchReports()
        if (status) {
            setPostReport(data?.data?.post_reports)
            setGroupReport(data?.data?.group_reports)
            setUserReport(data?.data?.account_reports)
        }
    }

    useEffect(() => {
        fetchReportsFN()
    }, [])


    return (
        <AppLayout active={"Report Content Review"} title={"Report Content Review"}>
            <div className="flex items-center gap-3">
                <div onClick={() => setActive("post")} className={`px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer ${active === "post" ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}>Post</div>
                <div onClick={() => setActive("group")} className={`px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer ${active === "group" ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}>Group</div>
                <div onClick={() => setActive("user")} className={`px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer ${active === "user" ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}>User</div>
            </div>
            {
                active === "post" &&
                <div className="space-y-4">
                    <PostReport posts={postReport?.data} />
                    <div className="md:flex flex-wrap gap-8 md:items-center md:justify-between">
                        <div className="p-3 text-sm text-gray-400">Showing {postReport?.from} to {postReport?.to} of {postReport?.total} entries</div>
                        <AppPagination totalRecords={postReport} newData={(data) => setPostReport(data?.post_reports)} />
                    </div>
                </div>
            }
            {
                active === "group" &&
                <div className="space-y-4">
                    <GroupReport gropus={groupReport?.data} />
                    <div className="md:flex flex-wrap gap-8 md:items-center md:justify-between">
                        <div className="p-3 text-sm text-gray-400">Showing {groupReport?.from} to {groupReport?.to} of {groupReport?.total} entries</div>
                        <AppPagination totalRecords={groupReport} newData={(data) => setGroupReport(data?.group_reports)} />
                    </div>
                </div>
            }
            {
                active === "user" &&
                <div className="space-y-4">
                    {/* <PostReport posts={userReport?.data} /> */}
                    <div className="md:flex flex-wrap gap-8 md:items-center md:justify-between">
                        <div className="p-3 text-sm text-gray-400">Showing {userReport?.from} to {userReport?.to} of {userReport?.total} entries</div>
                        <AppPagination totalRecords={userReport} newData={(data) => setUserReport(data?.account_reports)} />
                    </div>
                </div>
            }
        </AppLayout>
    )
}

export default Page