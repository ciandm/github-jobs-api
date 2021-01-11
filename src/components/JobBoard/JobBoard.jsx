import React from 'react'
import * as Styled from './JobBoard.styled';
import { useTheme } from '../../theme/ThemeProvider';
import JobCard from '../JobCard/JobCard';

function JobBoard({
  jobs
}) {

  const {
    dark
  } = useTheme()

  return (
    <Styled.JobBoard>
      <JobCard
        dark={dark}
      />
    </Styled.JobBoard>
  )
}

export default JobBoard
