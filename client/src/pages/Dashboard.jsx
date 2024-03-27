import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar'
import DashProfile from '../components/DashProfile'

export default function Dashboard() {
  const location = useLocation()
  const [tab ,setTab] = useState('')
  useEffect(()=>{
    const urlParams =new URLSearchParams(location.search) ;
    const tabFormUrl =urlParams.get('tab')
    // console.log(urlParams);
    // console.log(tabFormUrl);
    if(tabFormUrl){
      setTab(tabFormUrl)
    }
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* sidebar */}
      <div className='md:w-56'>
        <DashSidebar />
      </div>
      {/* profile .. */}
      <div className=''>
        {tab === 'profile' && <DashProfile />}
      </div>
    </div>
  )
}
