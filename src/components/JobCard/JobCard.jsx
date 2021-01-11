import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './JobCard.styled'

function JobCard({
  job,
  ...restProps
}) {
  return (
    <Styled.Card
      {...restProps}
    >
      <Styled.Logo />
      <Styled.Header>
        <Styled.HeaderItem>5h ago</Styled.HeaderItem>
        <span />
        <Styled.HeaderItem>Full Time</Styled.HeaderItem>
      </Styled.Header>
      <Styled.Title
        {...restProps}
      >
        Senior Software Engineer
      </Styled.Title>
      <Styled.Company>
        So Digital Inc.
      </Styled.Company>
      <Styled.Location>
        Remote, Seoul, Tokyo, Mountain View, San Francisco
      </Styled.Location>

    </Styled.Card>
  )
}

export default JobCard
