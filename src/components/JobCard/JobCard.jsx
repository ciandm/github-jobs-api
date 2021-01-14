import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './JobCard.styled'

function JobCard({
  companyLogo,
  createdAt,
  type,
  title,
  company,
  location,
  ...restProps
}) {
  return (
    <Styled.Card
      {...restProps}
    >
      <Styled.Logo>
        <img src={companyLogo} alt="Company logo" />
      </Styled.Logo>
      <Styled.Header>
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
