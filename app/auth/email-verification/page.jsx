"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from "@assets/image/logo.png"
import Link from 'next/link'
import AppInput from '@/app/components/organisms/AppInput'
import { SignInAuth } from '@/app/hooks/Auth'
import { CiMail } from "react-icons/ci";
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import OtpInput from 'react-otp-input';
import { resendOTP, verifyOTP } from '@/app/services/authService'

function AccountSetup() {
    const dispatch = useDispatch()
    const [proccessing, setProccessing] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const [otp, setOtp] = useState('');
    const [counter, setCounter] = useState(60);
    const user = useSelector(state => state.PerUser)

    const userEmail = searchParams.get('email');


    const resend = async () => {
        setCounter(60)
        const e = {
            user_id: searchParams.get('uid'),
            // email: searchParams.get('em')
        }
        // const { status, data } = await resendOTP(e).catch(err => console.log(err))
    }

    const confirmOTP = async (e) => {
        e.perventDefault()
        e.otp = otp
        if (e.otp.length === 4) {
            console.log(e.otp);
            // value.token = URL?.pwd_verify_token
            // value.otp = value.verify_token
            // if (URL?.pwd_verify_token !== undefined) {
                // const { status, data } = await AppChangePasswordOTP(value).catch(err => console.log(err))
                // if (status) {
                //     router.replace(`new-password?email=${URL.email}&token=${URL?.pwd_verify_token}`)
                // } else {
                //     setErrMsg(data?.message)
                // }
            // } else {
                // const { status, data } = await AppVerifyOtp(value).catch(err => console.log(err))
                // if (status) {
                //     router.replace("success")
                // } else {
                //     setErrMsg(data.message)
                // }
            // }
        } else {
            setErrMsg("OTP is not complete")
        }
    }


    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className='flex items-center bg-cream flex-col gap-1 justify-center top-0 right-0 z-50 w-screen h-screen fixed'>
            <div className='w-screen'>
                <div className='max-w-lg gap-4 flex flex-col p-4 mx-auto'>
                    <Image src={logo} className='pointer-events-none' />
                    <div className="">
                        <div className='font-bold text-center text-2xl'>code sent to {userEmail.split("@")[0].substring(0, 4)}*****@{userEmail.split("@")[1]}</div>
                    </div>
                    <div className="flex mx-auto w-full">
                        <form onSubmit={confirmOTP} className='w-full space-y-4'>
                            <div className="space-y-4">
                                <div className="justify-center flex *:gap-4">
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={4}
                                        isInputNum={true}
                                        shouldAutoFocus={true}
                                        inputType='tel'
                                        inputStyle={{
                                            border: "1px solid #e3e3e3",
                                            borderRadius: "8px",
                                            appearance: "none",
                                            width: "54px",
                                            height: "54px",
                                            fontSize: "18px",
                                            color: "#000",
                                            fontWeight: "400",
                                            caretColor: "gray",
                                            outline: "none",
                                            background: "#fff"
                                        }}
                                        focusStyle={'outline-none ring-0 border border-gray-400'}
                                        renderInput={(props) => <input name='otp' {...props} />}
                                    />
                                </div>
                                <div className="text-center">Didn’t receive the code? <span className='text-blue font-bold'>Resend</span> {counter > 0 && `in 00:${counter < 10 ? '0' : ""}${counter} seconds.`}</div>
                            </div>
                            <button className="text-center w-full cursor-pointer disabled:bg-opacity-35 shadow-md bg-blue text-white rounded-lg py-3">Send Code</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSetup