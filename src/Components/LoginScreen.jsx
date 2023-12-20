import React from 'react'

const LoginScreen = () => {
  return (
    <div className='w-full h-full'>
        <div className='flex justify-center items-center bg-red-700'>

            <div className='border border-green-600 p-6'>
                <h2>Create account</h2>
            <div className='flex flex-col '>
                <p className='py-1'>Name</p>
                <input type="text" />
                <p className='py-1'>Surname</p>
                <input type="text" />
                <p className='py-1'>Email</p>
                <input type="t" />
                <p className='py-1'>Password</p>
                <input type="password" />
                <p className='py-1'>Re-enter password</p>
                <input type="password" />

                <button className='sm:text-xs lg:text-sm font-bold outline-none w-full cursor-pointer bg-[#59AE43] 
                transition duration-300 ease-in-out hover:bg-[#58ae43c2] text-white justify-center
                 flex items-center uppercase py-2 my-2 rounded-full '>Register</button>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default LoginScreen