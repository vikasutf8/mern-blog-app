import { Alert, Button, Label, TextInput,Spinner } from 'flowbite-react'
import {useState }from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice.js'

export default function SignIn() {
  const [formData,setFormData] = useState({})
  // const [errorMessage,setErrorMessage] = useState(null)
  // const [loading,setLoading] = useState(false)
  const {loading ,error :errorMessage} = useSelector((state)=>state.user);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
    // console.log(formData)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(formData)
    if(  !formData.email || !formData.password){
      // return setErrorMessage('Please fill all the fields') 
      return dispatch(signInFailure('Please fill all the fields') )
    }
    
    try {
      // setLoading(true)
      // setErrorMessage(null)
      dispatch(signInStart())
      const res =await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),  
      })
      const data = await res.json()
      if(data.success ===false){
        // return setErrorMessage(data.message)
        dispatch(signInFailure(data.message))
      }
      // setLoading(false)
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      // console.log(error)
     // setErrorMessage("Error in signup ",error.message || 'Something went wrong')
      //setLoading(false)
      dispatch(signInFailure(error.message || 'Something went wrong'))
    }
  }

  return (
    <div className='min-h-screen mt-20'>
        <div className=' flex p-3 max-w-4xl mx-auto flex-col md:flex-row gap-10'>
          {/* left */}
          <div className='flex-1'>
          <Link
        to="/"
        className="font-bold text-4xl dark:text-white"
      >
        <span
          className="px-2 py-1 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white
          "
        >
          Nishu's
        </span>
        Blog
      </Link>
        <p className='text-sm mt-5'>
        Tech will transform from something we actively use to a more seamless integrated experience that is ‘on’ all the time.
        </p>
          </div>
          {/* right */}
          <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              
              <div>
                <Label value='Your email' />
                <TextInput
                   type='email'
                   placeholder='name@company.com'
                   id='email' 
                   onChange={handleChange}/>
              </div>
              <div>
                <Label value='Your password' />
                <TextInput
                   type='password'
                   placeholder=' *********'
                   id='password' 
                   onChange={handleChange}/>
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading} >
                {
                  loading ? (
                    <>
                    <Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span>
                    </>

                  ) : 'Sign In'
                }
              </Button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Don't have account ?</span>
              <Link to='/sign-up' className='text-blue-500'>Sign Up</Link>
            </div>
            {
              errorMessage &&(
                <Alert className='mt-5 ' color='failure'>
                  {errorMessage}
                </Alert>
              )
            }
          </div>
        </div>
    </div>
  )
}
