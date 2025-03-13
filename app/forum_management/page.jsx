import React from 'react'
import AppLayout from '../components/layouts/appLayout'

function Page() {
    return (
        <AppLayout active={"Forum Management"} title={"Forum Management"}>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"></div>
        </AppLayout>
    )
}

export default Page