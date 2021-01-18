import React from 'react'
import * as Styled from './JobList.styled';
import JobCard from '../JobCard/JobCard';

function JobList({
  jobs,
  dark,
  handleJobCardClick
}) {
  return (
    <>
      {jobs.map(j => (
        <JobCard
          job={j}
          key={j.id}
          id={j.id}
          dark={dark}
          companyLogo={j.company_logo}
          createdAt={j.created_at}
          type={j.type}
          title={j.title}
          company={j.company}
          location={j.location}
          handleJobCardClick={handleJobCardClick}
        />
      ))}
    </>
  )
}

export default JobList
