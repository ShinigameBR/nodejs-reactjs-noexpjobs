import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-[1rem] sm:p-[3rem]'>
            <div>
                <a href='/' className="text-[15px] sm:text-[25px] text-blackColor"><strong>NoExp</strong>Jobs</a>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <button className="text-blackColor text-[8px] sm:text-[16px] w-[60px] h-4 sm:w-[120px] sm:h-8 font-semibold rounded hover:outline-double outline-3 outline-offset-1 sm:outline-offset-4">
                    Empresa
                </button>
                <button className="bg-blackColor text-whiteColor text-[8px] sm:text-[16px] w-[64px] h-6 sm:w-[128px] sm:h-12 font-semibold rounded-lg sm:rounded-xl hover:text-grayColor">
                    Cadidato
                </button>
            </div>
        </div>
    )
}

export default Navbar