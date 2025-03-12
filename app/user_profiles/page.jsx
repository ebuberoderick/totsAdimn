import React from 'react'
import AppLayout from '../components/layouts/appLayout'
import AppTable from '../components/organisms/AppTable'

function page() {

  const users = [
    {
      id: 76504,
      name: "Emily Selman",
      email: "jerome@gmail.com",
      status: "Active",
      lastLogin: "2024-12-09 10:00:00",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Example avatar
    },
    {
      id: 76504,
      name: "Cameron Williamson",
      email: "alvia@email.com",
      status: "Active",
      lastLogin: "2024-12-09 10:00:00",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];


  return (
    <AppLayout active={"User Profiles"} title={"User Profiles"}>
      <AppTable  users={users} />
    </AppLayout>
  )
}

export default page
