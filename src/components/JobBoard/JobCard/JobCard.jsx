import React from 'react';
import * as Styled from './JobCard.styled';

function JobCard({
  job,
  id,
  companyLogo,
  createdAt,
  type,
  title,
  company,
  location,
  handleJobCardClick,
  ...restProps
}) {
  return (
    <Styled.Card
      onClick={() => handleJobCardClick(job)}
      {...restProps}
    >
      <Styled.Logo
        loading="true"
      >
        <img src={companyLogo} alt="Company logo" />
      </Styled.Logo>
      <Styled.Header
        loading="true"
      >
        <Styled.HeaderItem>5h ago</Styled.HeaderItem>
        <span />
        <Styled.HeaderItem>{type}</Styled.HeaderItem>
      </Styled.Header>
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
