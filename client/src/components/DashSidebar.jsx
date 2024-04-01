import {useEffect,useState} from 'react'
import {useLocation,Link} from 'react-router-dom'
import {Sidebar} from 'flowbite-react'
import {HiArrowRight, HiUser} from 'react-icons/hi'
import { useDispatch } from 'react-redux';
import { signOutSuccess } from '../redux/user/userSlice.js';
export default function DashSidebar() {
    const dispatch = useDispatch()
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

    const handleSignOut =async()=>{
      try {
        const res =await fetch('/api/user/signout',{
          method:'POST',
        })
        const data =await res.json();
        if(!res.ok){
          console.log(data.message)
        }
        else{
          dispatch(signOutSuccess());
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item 
                active={tab === 'profile'} 
                icon={HiUser}
                label={"User"} 
                labelColor="dark"
                as="div">
                    Profile
                </Sidebar.Item>
                </Link>
                <Sidebar.Item  icon={HiArrowRight} onClick={handleSignOut}>
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
