"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@assets/image/logo.png"
import Link from 'next/link'
import AppInput from '@/app/components/organisms/AppInput'
import { SignInAuth } from '@/app/hooks/Auth'
import { useDispatch } from 'react-redux'
import { CiMail } from "react-icons/ci";
import { useRouter } from 'next/navigation'
import serialize from '@/app/hooks/Serialize'
import { Applogin } from '@/app/services/authService'


function AccountSetup() {
    const dispatch = useDispatch()
    const [proccessing, setProccessing] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    const router = useRouter()

    const submit = async (e) => {
        e.preventDefault()
        const payload = serialize(e.target)
        setProccessing(true)
        const { status, data } = await Applogin(payload).catch(err => console.log(err))
        setProccessing(false)
        if (status) {
            setErrMsg('')
            SignInAuth(data, dispatch)
            router.push("/")
            window !== "undefined" && window.location.reload()
        } else {
            setErrMsg(data.message)
        }
    }

    return (
        <div className='flex items-center bg-cream flex-col gap-1 justify-center top-0 right-0 z-50 w-screen h-screen fixed'>
            <div className='w-screen'>
                <div className='max-w-lg gap-4 flex flex-col p-4 mx-auto'>
                    <Image src={logo} className='pointer-events-none' />
                    <div className="">
                        <div className="text-danger text-sm">{errMsg}</div>
                        <div className='font-bold text-2xl'>Welcome Back!</div>
                        <div className="text-sm">Log in to your account</div>
                    </div>
                    <div className="flex mx-auto w-full">
                        <form onSubmit={submit} className='w-full space-y-4'>
                            <div className="space-y-4">
                                <AppInput icon={<CiMail />} name="email" required label="Enter Email" />
                                <AppInput name="password" type={"password"} required label="Enter Password" />
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <div className="flex-grow">
                                    <AppInput type="checkbox" name="remember" label="remember me" />
                                </div>
                                <Link href="forgot-password">Forgot password?</Link>
                            </div>
                            <button className={`text-center w-full cursor-pointer disabled:bg-opacity-35 shadow-md ${proccessing ? "bg-gray-300" : "bg-blue"}  text-white rounded-lg py-3`}> {proccessing ? "Proccessing..." : "Login"} </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSetup