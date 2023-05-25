import React from 'react'
import JobCard from './JobCard';
import JobData from "../constants/jobs"

const Jobs = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-10 justify-center items-stretch py-10">
                {
                    JobData.map((job) => {
                        return (
                            <JobCard key={job.id} job={job} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Jobs