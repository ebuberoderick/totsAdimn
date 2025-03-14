"use client"
import Image from 'next/image'
import React from 'react'
import logo from "@assets/image/logo.png"
import Link from 'next/link'
import AppInput from '@/app/components/organisms/AppInput'
import { SignInAuth } from '@/app/hooks/Auth'
import { useDispatch } from 'react-redux'
import { CiMail } from "react-icons/ci";
import { useRouter } from 'next/navigation'


function AccountSetup() {
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
                <div className='max-w-lg gap-4 flex flex-col p-4 mx-auto'>
                    <Image src={logo} className='pointer-events-none' />
                    <div className="">
                        <div className='font-bold text-2xl'>Welcome Back!</div>
                        <div className="text-sm">Log in to your account</div>
                    </div>
                    <div className="flex mx-auto w-full">
                        <form onSubmit={submit} className='w-full space-y-4'>
                            <div className="space-y-4">
                                <AppInput icon={<CiMail />} name="email" required label="Enter Email" />
                                <AppInput name="password"  type={"password"} required label="Enter Password" />
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <div className="flex-grow">
                                    <AppInput type="checkbox" name="remember" label="remember me" />
                                </div>
                                <Link href="forgot-password">Forgot password?</Link>
                            </div>
                            <button className="text-center w-full cursor-pointer disabled:bg-opacity-35 shadow-md bg-blue text-white rounded-lg py-3">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSetup