import { Button, TextInput } from 'flowbite-react'

import {useSelector} from 'react-redux'
import { useState } from 'react'


export default function DashProfile() {
    const {currentUser} = useSelector(state => state.user)
    // console.log(currentUser)
    const [imageFile,setImageFile] = useState(null)
    const [imageFileUrl,setImageFileUrl] = useState(null)
    const handleImageChange =(e)=>{
        const file =e.target.files[0];
        // console.log("e.target.files[0]",file)
        if(file){
        setImageFile(file)
        setImageFileUrl(URL.createObjectURL(file))
        }
    }
    // console.log(imageFileUrl)
    // console.log(imageFile) // we can use this image as object so it convert into  temp url
  return (
    <div className='max-w-lg p-3 w-full mx-auto'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4 w-80'>
            <input type='file' accept='image/*'
            onChange={handleImageChange}/>
            <div className='w-32 h-32 self-center cursor-pointer'>
            <img src={ imageFileUrl ||currentUser.profilePicture} alt="user"
            className='rounded-full w-full
         h-full border-8 border-gray-400 object-cover' />
            </div>



            <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username}/>
            <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email}/>
            <TextInput type='password' id='password' placeholder='password' />

            <Button type='submit' gradientDuoTone='purpleToBlue' outline>
                Update
            </Button>
        </form>
        <div className='text-red-600 flex justify-between mt-5'>
            <span className='cursor-pointer'>Delete Account</span>
            <span className='cursor-pointer'>Sign Out</span>
        </div>
    </div>
  )
}
