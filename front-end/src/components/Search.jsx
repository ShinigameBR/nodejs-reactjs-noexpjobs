import React, { useState } from 'react'
import { BsSearch, BsEraserFill } from 'react-icons/bs'

const Search = () => {
    const [eraser, setEraser] = useState(false)

    const handleChangeInput = event => {
        if (event.target.value) {
            setEraser(true);
        } else {
            setEraser(false);
        }
    };

    function eraseInput() {
        document.getElementById("search_bar").value = '';
        setEraser(false);
    }



    return (
        <div className='grid gap-10 bg-grayColor rounded-xl p-3 sm:p-[1.5rem]'>
            <form action="">
                <div className="rounded-lg bg-whiteColor p-1 sm:p-5 shadow-lg shadow-grayColor-700">
                    <div className="flex p-1 sm:p-0 gap-2 items-center">
                        <BsSearch className='text-[18px] sm:text-[25px] cursor-pointer text-blackColor' />
                        <input id='search_bar' onChange={handleChangeInput} type="text" className='bg-transparent text-blackColor focus:outline-none w-[100%] text-[12px] sm:text-[18px]' placeholder='Busque por cargo, empresa, local...' />
                        {eraser ? <BsEraserFill onClick={eraseInput} className='text-[18px] sm:text-[25px] cursor-pointer text-blackColor' /> : ""}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search