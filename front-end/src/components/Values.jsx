import React from 'react'

const Values = () => {
    return (
        <div className='mb-[4rem] mt-[6rem]'>
            <h1 className="text-blackColor text-[25px] pt-[2rem] pb-[3rem] font-bold block text-center">Os valores que buscamos manter.</h1>
            <div className="grid gap-4 lg:gap-40 grid-rows-3 lg:grid-cols-3 items-center">
                <div className="rounded-[10px] hover:bg-lightGreenColor p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="p-[4px] rounded-[.8rem] bg-darkGreenColor h-[40px] w-[40px] flex items-center justify-center">
                            <img src="../src/assets/values/arrow.png" alt="Simplicidade" className='w-[70%]' />
                        </div>
                        <span className="font-semibold text-blackColor text-[18px]">
                            Simplicidade
                        </span>
                    </div>
                    <p className='text-[13px] text-justify text-blackColor opacity-[.7] py-[1rem] font-semibold'>
                        Economize seu tempo na busca por empregos com nossos processos simplificados e informações claras sobre as oportunidades disponíveis.
                    </p>
                </div>
                <div className="rounded-[10px] hover:bg-lightGreenColor p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="p-[4px] rounded-[.8rem] bg-darkGreenColor h-[40px] w-[40px] flex items-center justify-center">
                            <img src="../src/assets/values/infinity.png" alt="Inclusão" className='w-[70%]' />
                        </div>
                        <span className="font-semibold text-blackColor text-[18px]">
                            Inclusão
                        </span>
                    </div>
                    <p className='text-[13px] text-justify text-blackColor opacity-[.7] py-[1rem] font-semibold'>
                        Valorizamos a diversidade, oferecendo igualdade de oportunidades para candidatos de todas as origens e habilidades.
                    </p>
                </div>
                <div className="rounded-[10px] hover:bg-lightGreenColor p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="p-[4px] rounded-[.8rem] bg-darkGreenColor h-[40px] w-[40px] flex items-center justify-center">
                            <img src="../src/assets/values/man.png" alt="Suporte" className='w-[70%]' />
                        </div>
                        <span className="font-semibold text-blackColor text-[18px]">
                            Suporte
                        </span>
                    </div>
                    <p className='text-[13px] text-justify text-blackColor opacity-[.7] py-[1rem] font-semibold'>
                        Oferecemos suporte durante todo o seu processo até a contratação, com recursos úteis como dicas de currículo e orientações para entrevistas.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Values