"use client"
import React, { useEffect, useState } from 'react'
import AppLayout from '../components/layouts/appLayout'
import { createGroup, createPerference, fetchGroup } from '../services/authService'
import UseFormHandler from '../hooks/useFormHandler'
import AppInput from '../components/organisms/AppInput'
import { FaRegImage } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import GroupChip from '../components/organisms/GroupChip'
import Image from 'next/image'
import { API_BASE_URL, TOKEN } from '../services/httpService'
import axios from 'axios'

function Page() {
    const [list, setList] = useState([])
    const [group, setGroup] = useState({})
    const [showGroupform, setShowGroupForm] = useState({})
    const [showCrearform, setShowCreateForm] = useState(false)
    const [obj, setObj] = useState("")
    const [formErr, setFormErr] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [extraErr, setExtraErr] = useState({
        imageErr: false,
        objectivesErr: false
    })
    const [objectives, setObjective] = useState([])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setSelectedImage(file);
            setImagePreview(previewUrl);
        }
    };


    const triggerImage = async () => {
        document.querySelectorAll("input[name=ImageInput]")[0].click()
    }


    const fetchGroupsFN = async () => {
        const { data, status } = await fetchGroup()
        if (status) {
            setList(data.data)
        }
    }


    const createGroupHandler = UseFormHandler({
        required: {
            name: 'Please Enter Group Name',
            description: "Please Enter Group Description"
        },
        initialValues: {
            name: '',
            description: ""
        },
        onSubmit: async (value) => {
            setFormErr(null)
            if (imagePreview !== null && objectives.length > 0) {
                const formData = new FormData();
                formData.append("cover", selectedImage);
                formData.append("preference_id", showGroupform.id)
                formData.append("name", value.name)
                formData.append("description", value.description)
                formData.append("objective", JSON.stringify(objectives))
                try {
                    const headers = {
                        Authorization: TOKEN,
                        "Content-Type": "multipart/form-data",
                    };
                    const response = await axios.post(`${API_BASE_URL}/admin/group/create`, formData, { headers });
                    if (response.status === 200) {
                        fetchGroupsFN()
                        setShowGroupForm({})
                        document.querySelectorAll("input[name=name]")[0].value = ""
                        document.querySelectorAll("textarea[name=des]")[0].value = ""
                        createGroupHandler.value.name = ""
                        createGroupHandler.value.description = ""
                        setSelectedImage(null)
                        setImagePreview(null)
                        setObjective([])
                        setGroup({})
                    }
                } catch (error) {
                    setFormErr(error?.response?.data.message)
                }
            }
        }
    })



    const submit = () => {
        if (createGroupHandler.proccessing) {
            return 0;
        }

        if (imagePreview !== null) {
            setExtraErr(prv => ({ ...prv, imageErr: false }));
        } else {
            setExtraErr(prv => ({ ...prv, imageErr: true }));
        }
        if (objectives.length > 0) {
            setExtraErr(prv => ({ ...prv, objectivesErr: false }));
        } else {
            setExtraErr(prv => ({ ...prv, objectivesErr: true }));
        }
        createGroupHandler.submit()
    }


    const addObjective = () => {
        if (obj !== "") {
            setObjective(prv => [...prv, obj])
            setObj("")
            document.querySelectorAll("input[name=objective]")[0].value = ""
        }
    }



    const CreateForum = UseFormHandler({
        required: {
            name: 'Please Enter Preference Name',
        },
        initialValues: {
            name: ''
        },
        onSubmit: async (value) => {
            const { status, data } = await createPerference(value).catch(err => console.log(err));
            if (status) {
                fetchGroupsFN()
                document.querySelectorAll("input[name=name]")[0].value = ""
                setShowCreateForm(false)
            } else {
                CreateForum.setError((prevState) => ({ ...prevState, name: data.message }));
            }
        }
    })

    useEffect(() => {
        fetchGroupsFN()
    }, [])

    return (
        <AppLayout active={"Forum Management"} title={"Forum Management"}>


            <div className={`${showCrearform ? "flex" : "hidden"} fixed w-screen h-screen bg-white bottom-0 right-0 left-0 bg-opacity-25 backdrop-blur-lg items-center justify-center z-50`}>
                <div className="w-full">
                    <div className="max-w-sm space-y-6 mx-auto rounded-lg p-4 bg-white">
                        <div className="relative">
                            <div className="text-lg font-bold">Create Preference</div>
                            <div onClick={() => setShowCreateForm(!showCrearform)} className="w-8 h-8 absolute right-0 bottom-0 rounded-full bg-gray-100 cursor-pointer flex items-center justify-center"><MdClose /></div>
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-1">
                                <AppInput onChange={(e) => CreateForum.value.name = e.target.value} name="name" required label="Enter Preference Name" />
                                {CreateForum?.error?.name && <div className="text-xs text-danger">{CreateForum?.error?.name}</div>}
                            </div>
                            <div onClick={() => !CreateForum.proccessing && CreateForum.submit()} className={`px-6 py-3 text-center text-xs sm:text-sm rounded-md cursor-pointer ${!CreateForum.proccessing ? "bg-blue/80 hover:bg-blue" : "bg-gray-300"} text-white`}>{!CreateForum.proccessing ? " Create Preference" : "Proccessing..."}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${Object.keys(group).length > 0 ? "flex" : "hidden"} fixed w-screen h-screen bg-white bottom-0 right-0 left-0 bg-opacity-25 backdrop-blur-lg items-center justify-center z-50`}>
                <div className="w-full">
                    <div className="max-w-sm space-y-6 mx-auto rounded-lg p-4 bg-white">
                        <div className="relative">
                            <div className="text-lg font-bold">{group.name}</div>
                            <div onClick={() => setGroup({})} className="w-8 h-8 absolute right-0 bottom-0 rounded-full bg-gray-100 cursor-pointer flex items-center justify-center"><MdClose /></div>
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-3 bg-gray-100 p-2 rounded-lg max-h-96 overflow-y-auto">
                                {
                                    group?.groups?.map((group) => (
                                        <GroupChip key={group.id} reload={() => fetchGroupsFN()} group={group} />
                                    ))
                                }
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <div onClick={() => setShowGroupForm(group)} className="px-6 flex-grow py-2 text-center text-xs sm:text-sm rounded-md cursor-pointer bg-blue/80 hover:bg-blue text-white">Create Group</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Object.keys(showGroupform).length > 0 ? "flex" : "hidden"} fixed w-screen h-screen bg-white bottom-0 right-0 left-0 bg-opacity-25 backdrop-blur-lg items-center justify-center z-50`}>
                <div className="w-full">
                    <div className="max-w-sm space-y-6 mx-auto rounded-lg p-4 bg-white">
                        <div className="relative">
                            <div className="text-lg font-bold">Create Group</div>
                            <div onClick={() => setShowGroupForm({})} className="w-8 h-8 absolute right-0 bottom-0 rounded-full bg-gray-100 cursor-pointer flex items-center justify-center"><MdClose /></div>
                        </div>
                        {formErr !== null && <div className="text-danger text-xs">{formErr}</div>}
                        <div className="space-y-3">
                            <div className="space-y-3 max-h-96 overflow-y-auto">
                                <div className="">
                                    <div className="w-20 h-20 rounded-full mx-auto bg-gray-50 relative">
                                        {imagePreview && (
                                            <Image src={imagePreview} alt="Image Preview" className='rounded-full h-full w-full' width={100} height={100} />
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            name='ImageInput'
                                            onChange={handleImageChange}
                                            style={{ margin: '20px 0', display: 'none' }}
                                        />
                                        <div onClick={triggerImage} className="w-8 h-8 rounded-full cursor-pointer bg-gray-100 absolute bottom-0 right-0 flex items-center justify-center"><FaRegImage /></div>
                                    </div>
                                    {extraErr?.imageErr && <div className="text-danger text-xs text-center">Please set group cover image</div>}
                                </div>

                                <div className="space-y-1">
                                    <AppInput onChange={(e) => createGroupHandler.value.name = e.target.value} name="name" required label="Enter Group Name" />
                                    {createGroupHandler?.error?.name && <div className="text-xs text-danger">{createGroupHandler?.error?.name}</div>}
                                </div>

                                <div className="">
                                    <div className="border rounded-lg overflow-hidden">
                                        <textarea name='des' onChange={(e) => createGroupHandler.value.description = e.target.value} placeholder='Enter Group Description' className='w-full resize-none p-2 min-h-28 focus:outline-none focus:ring-0 focus:border-none'></textarea>

                                    </div>
                                    {createGroupHandler?.error?.description && <div className="text-xs text-danger">{createGroupHandler?.error?.description}</div>}
                                </div>
                                <div className="">
                                    <div className="">Objective</div>
                                    <div className="space-y-1">
                                        {
                                            objectives?.map((e, i) => (
                                                <div key={i} className="flex gap-1">
                                                    <div className="">
                                                        <div className="w-1 h-1 relative top-[5.5px] rounded-full bg-black" />
                                                    </div>
                                                    <div className="text-xs">{e}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {extraErr?.objectivesErr && <div className="text-danger text-xs">Please Add the objectives of the group</div>}
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex-grow">
                                        <AppInput onChange={(e) => setObj(e.target.value)} name="objective" required label="Enter Group Objective" />
                                    </div>
                                    <div onClick={addObjective} className="px-6 flex-grow py-3 text-center text-xs sm:text-sm rounded-md cursor-pointer bg-blue/80 hover:bg-blue text-white">Add</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <div onClick={submit} className={`px-6 flex-grow py-3 text-center text-xs sm:text-sm rounded-md cursor-pointer ${!createGroupHandler.proccessing ? " bg-blue/80 hover:bg-blue" : "bg-gray-300"} text-white`}>{createGroupHandler.proccessing ? "Proccessing..." : "Create Group"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 justify-end">
                <div onClick={() => setShowCreateForm(!showCrearform)} className="px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer bg-blue/80 hover:bg-blue text-white">Create Preference</div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    list[0]?.map((data) => (
                        <div key={data?.name}>
                            <div className='border text-sm border-gray-200 space-y-2 rounded-lg p-2'>
                                <div className="flex items-center gap-4 justify-between">
                                    <div onClick={() => setGroup(data)} className="py-2 cursor-pointer flex-grow">{data?.name}</div>
                                    <div onClick={() => setShowGroupForm(data)} className="px-4 py-2 text-xs rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">Create Group</div>
                                </div>
                                <div className="bg-gray-100 p-2 rounded-lg">
                                    <div className="space-y-3">
                                        {
                                            data?.groups?.slice(0, 2).map((group) => (
                                                <GroupChip key={group.id} group={group} />
                                            ))
                                        }
                                    </div>
                                    {
                                        data?.groups.length > 2 && <div onClick={() => setGroup(data)} className="text-xs p-2 text-gray-400">View all</div>
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </AppLayout>
    )
}

export default Page