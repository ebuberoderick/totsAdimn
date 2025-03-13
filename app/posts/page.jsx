"use client"
import React from 'react'
import AppLayout from '../components/layouts/appLayout'
import PostCard from '../components/organisms/PostCard'

function Page() {
    return (
        <AppLayout active={"Posts"} title={"Posts"}>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    ["", "", "", "", "", ""].map((data, i) => (
                        <PostCard key={i} />
                    ))
                }
            </div>
        </AppLayout>
    )
}

export default Page