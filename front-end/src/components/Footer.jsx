import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-5 p-[5rem] m-auto mb-4 bg-lightGreenColor rounded-[10px] gap-8 items-center justify-center text-blackColor'>
            <div>
                <div>
                    <h1 className="text-[15px] sm:text-[25px] pb-[1.5rem]"><strong>NoExp</strong>Jobs</h1>
                </div>
                <p className='pb-[13px] opacity-70 leading-7'>
                    Conectamos empresas em busca de novos talentos a candidatos determinados a começar suas carreiras.
                </p>
            </div>
            <div className="grid">
                <span className='text-[18px] font-semibold pb-[1.5rem]'>
                    Empresas
                </span>
                <div className="grid gap-3 list-none">
                    <li className='opacity-[.7] hover:opacity-[1]'>Sobre</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>Ferramentas</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>Notícias</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>FAQ</li>
                </div>
            </div>
            <div className="grid">
                <span className='text-[18px] font-semibold pb-[1.5rem]'>
                    Acesso Rápido
                </span>
                <div className="grid gap-3 list-none">
                    <li className='opacity-[.7] hover:opacity-[1]'>Conta</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>Central de Suporte</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>Feedback</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>Contato</li>
                </div>
            </div>
            <div className="grid">
                <span className='text-[18px] font-semibold pb-[1.5rem]'>
                    Recursos
                </span>
                <div className="grid gap-3 list-none">
                    <li className='opacity-[.7] hover:opacity-[1]'>Eventos</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>Anúncios</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>Req. Demostrações</li>
                    <li className='opacity-[.7] hover:opacity-[1]'>Trabalhe Conosco</li>
                </div>
            </div>
            <div className="grid">
                <span className='text-[18px] font-semibold pb-[1.5rem]'>
                    Mídias Digitais
                </span>
                <div>
                    <small className='text-[14px]'>
                        contato@noexpjobs.com
                    </small>
                    <div className="flex gap-4 py-[1rem]">
                        <AiFillInstagram className='text-[40px] text-blackColor' />
                        <AiFillLinkedin className='text-[40px] text-blackColor' />
                        <AiFillTwitterCircle className='text-[40px] text-blackColor' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer