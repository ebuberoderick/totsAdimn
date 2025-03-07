"use client"
import Image from 'next/image'
import React from 'react'
import logo from "@assets/image/logo.png"
import Link from 'next/link'
import AppInput from '@/app/components/organisms/AppInput'
import { SignInAuth } from '@/app/hooks/Auth'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { LuLockKeyhole } from "react-icons/lu";


function accountSetup() {
    const dispatch = useDispatch()
    const router = useRouter()

    const submit = async (e) => {
        e.preventDefault()
        SignInAuth({ data: { bearer_token: "bearer_token" }, user: { fullname: "hello" } }, dispatch)
        router.push("/")
    }

    return (
        <div className='flex items-center bg-cream flex-col gap-1 justify-center top-0 right-0 z-50 w-screen h-screen fixed'>
            <div className='w-screen'>
                <div className='max-w-3xl gap-8 flex flex-col p-4 mx-auto'>
                    <Image src={logo} className='mx-auto pointer-events-none' />
                    <div className="flex flex-col gap-4">
                        <div className='text-center md:text-xl text-green max-w-lg mx-auto font-bold'>Please enter your new password</div>
                    </div>
                    <div className=" flex max-w-sm mx-auto w-full">
                        <form onSubmit={submit} className='w-full space-y-8'>
                            <div className="space-y-4">
                                <AppInput name="new-password" icon={<LuLockKeyhole />} type="password" required label="Enter New Password" />
                                <AppInput name="confirm-password" icon={<LuLockKeyhole />} type="password" required label="Confirm New Password" />
                            </div>
                            <button className="text-center w-full cursor-pointer disabled:bg-opacity-35 shadow-md bg-green text-white rounded-lg py-3">Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default accountSetup