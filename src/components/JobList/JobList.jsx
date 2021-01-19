import React from 'react'
import * as Styled from './JobList.styled';
import JobCard from '../JobCard/JobCard';
import JobCardSkeleton from '../JobCard/JobCardSkeleton/JobCardSkeleton';
import formatDistanceStrict from 'date-fns/formatDistanceStrict'

function JobList({
  jobs,
  dark,
  loading,
  handleJobCardClick
}) {
  return (
    <Styled.JobList>
      {
        loading ? (
          [...Array(5)].map((_, i) => {
            return (
              <JobCardSkeleton
                dark={dark}
                key={i} />
            )
          })
        ) : (
            jobs.map(j => (
              <JobCard
                job={j}
                key={j.id}
                id={j.id}
                dark={dark}
                company_logo={j.company_logo}
                created_at={formatDistanceStrict(Date.parse(new Date()), Date.parse(j.created_at))}
                type={j.type}
                title={j.title}
                company={j.company}
                location={j.location}
                handleJobCardClick={handleJobCardClick}
              />
            ))
          )
      }
    </Styled.JobList>
  )
}

export default JobList
