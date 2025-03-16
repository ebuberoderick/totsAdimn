import React from 'react'
import AppLayout from '../components/layouts/appLayout'

function Page() {
    return (
        <AppLayout active={"Forum Management"} title={"Forum Management"}>
            <div className="flex items-center gap-3 justify-end">
                <div className="px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">Create Group</div>
                <div className="px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer bg-blue/80 hover:bg-blue text-white">Create Community</div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className='border border-gray-200 space-y-2 rounded-lg p-2'>
                    <div className="">First time mums</div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="">
                                <div className="w-10 h-10 rounded-full bg-gray-50"></div>
                            </div>
                            <div className="">
                                <div className="font-bold text-sm">Califonia</div>
                                <div className="text-xs">23 members</div>
                            </div>
                        </div>
                        <div className="text-xs p-2 text-gray-400">View all</div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Page