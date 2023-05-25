import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

const JobCard = ({ job }) => {
    return (
        <div className="flex flex-col group group/item w-[250px] p-[20px] bg-whiteColor rounded-[10px] hover:bg-blackColor shadow-lg shadow-grayColor-400/700 hover:shadow-lg">
            <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-blackColor group-hover:text-whiteColor'>{job.job_name}</h1>
                <span className='flex items-center text-grayColor gap-1'>
                    <BiTimeFive />{job.job_elapsed_time}
                </span>
            </span>
            <h6 className="text-grayColor">
                {job.job_city}
            </h6>
            <p className="text-[13px] text-blackColor text-justify pt-[20px] border-blackColor border-t-[2px] mt-[20px] group-hover:text-whiteColor group-hover:border-whiteColor">
                {job.job_description}
            </p>
            <div className='flex items-center gap-2 mt-auto'>
                <img src={job.job_company_image} alt={job.job_company_name} className='w-[10%]' />
                <span className="text-[14px] py-[1rem] block group-hover:text-whiteColor">{job.job_company_name}</span>
            </div>
            <a href={job.job_page_link} className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] text-center font-semibold text-blackColor hover:bg-whiteColor group-hover:hover:text-blackColor group-hover:text-whiteColor'>
                Ver mais
            </a>
        </div>
    )
}
export default JobCard