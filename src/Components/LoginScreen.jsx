import React from 'react'

const LoginScreen = () => {
  return (
    <div className='w-full h-full'>
        <div className='flex justify-center items-center '>

            <div className='border border-green-600 p-6 bg-slate-400 h-1/2'>
                <h1 className='text-xl font-semibold flex justify-center'>Create account</h1>
            <div className='flex flex-col '>
                <p className='py-1 pt-3'>Name</p>
                <input className='px-2 outline-none' type="text" />
                <p className='py-1 pt-3'>Surname</p>
                <input className='px-2 outline-none' type="text" />
                <p className='py-1 pt-3'>Email</p>
                <input className='px-2 outline-none' type="t" />
                <p className='py-1 pt-3'>Password</p>
                <input className='px-2 outline-none' type="password" />
                <p className='py-1 pt-3'>Re-enter password</p>
                <input className='px-2 outline-none' type="password" />

                <button className='sm:text-xs lg:text-sm font-bold outline-none w-full cursor-pointer bg-[#59AE43] 
                transition duration-300 ease-in-out hover:bg-[#58ae43c2] text-white justify-center
                 flex items-center uppercase py-2 mt-4 rounded-full '>Register</button>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default LoginScreen