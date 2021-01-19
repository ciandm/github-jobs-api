import React from 'react';
import * as Styled from './JobCard.styled';
import Skeleton from 'react-loading-skeleton';

function JobCard({
  job,
  id,
  company_logo,
  created_at,
  type,
  title,
  company,
  location,
  handleJobCardClick,
  loading,
  ...restProps
}) {

  return (
    <Styled.Card
      onClick={() => handleJobCardClick(job)}
      {...restProps}
    >
      <Styled.Logo>
        <img src={company_logo} alt="Company logo" />
      </Styled.Logo>
      { loading ? (
        <Skeleton height={20} />
      ) : (
          <Styled.Header>
            <Styled.HeaderItem>{created_at}</Styled.HeaderItem>
            <span />
            <Styled.HeaderItem>{type}</Styled.HeaderItem>
          </Styled.Header>
        )}
      <Styled.Title
        {...restProps}
      >
        {title}
      </Styled.Title>
      <Styled.Company>
        {company}
      </Styled.Company>
      <Styled.Location>
        {location}
      </Styled.Location>

    </Styled.Card>
  )
}

export default JobCard
