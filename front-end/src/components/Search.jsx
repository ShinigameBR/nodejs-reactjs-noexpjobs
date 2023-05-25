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
        <div className='flex flex-col gap-5 bg-grayColor rounded-xl p-3 mx-4 md:p-[1.5rem] sm:mx-12'>
            <form action="">
                <div className="rounded-lg bg-whiteColor p-2 md:p-3 lg:p-5 shadow-lg shadow-grayColor-700">
                    <div className="flex p-1 sm:p-0 gap-2 items-center">
                        <BsSearch className='text-[18px] md:text-[25px] cursor-pointer text-blackColor' />
                        <input id='search_bar' onChange={handleChangeInput} type="text" className='bg-transparent text-blackColor focus:outline-none w-[100%] text-[12px] md:text-[18px]' placeholder='Busque por cargo, empresa, local...' />
                        {eraser ? <BsEraserFill onClick={eraseInput} tabIndex={0} role='button' className='text-[18px] md:text-[25px] cursor-pointer text-blackColor' /> : ""}
                    </div>
                </div>
            </form>
            <div className='flex flex-col md:flex-row items-stretch md:items-center justify-center gap-5 lg:gap-10 text-[10px] lg:text-[16px]'>
                <div className='flex items-center gap-2'>
                    <label htmlFor="relevance" className='text-blackColor font-semibold'>Ordenar por:</label>
                    <select name="" id="relevance" className='bg-whiteColor rounded px-2 py-1 w-full md:w-auto'>
                        <option value="relevance">Relevância</option>
                        <option value="date">Data</option>
                        <option value="higher">Maior Salário</option>
                        <option value="lower">Menos Candidatos</option>
                    </select>
                </div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="type" className='text-blackColor font-semibold'>Tipo:</label>
                    <select name="" id="type" className='bg-whiteColor rounded px-2 py-1 w-full md:w-auto'>
                        <option value="full_time">Período Integral</option>
                        <option value="part_time">Meio Período</option>
                        <option value="date">Período Flexível</option>
                        <option value="relevance">Personalizado</option>
                    </select>
                </div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="contract" className='text-blackColor font-semibold'>Contrato:</label>
                    <select name="" id="contract" className='bg-whiteColor rounded px-2 py-1 w-full md:w-auto'>
                        <option value="clt">CLT</option>
                        <option value="pj">PJ</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="other">Outro</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Search