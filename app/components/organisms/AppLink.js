import Link from 'next/link'
import React from 'react'

function AppLink({ text, icon, active }) {
    return (
        <Link href={text.toLowerCase() !== "dashboard" ? text.replaceAll(" ", "_").toLowerCase() : "/"}>
            <div className={`text-gray-800 hover:bg-blue/10 ${active?.toLowerCase() === text?.toLowerCase() ? "border-l-4 border-blue bg-blue/10 text-white" : "bg-cream"}  flex px-3 py-2 items-center gap-1 rounded-lg cursor-pointer`}>
                {icon} {text}
            </div>
        </Link>
    )
}

export default AppLink