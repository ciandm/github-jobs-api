import React, { useState, useEffect } from 'react'
import * as Styled from './JobBoard.styled';
import { useTheme } from '../../theme/ThemeProvider';
import Button from '../Button/Button';
import useFetchJobs from '../../hooks/useFetchJobs';
import JobFilter from '../JobFilter/JobFilter';
import JobList from '../JobList/JobList';

function JobBoard({
  hideJobBoard,
  hidden,
  setJobDetail
}) {

  const [formInputs, setFormInputs] = useState({
    description: '',
    location: '',
    fullTime: false,
    isPristine: true
  })

  const [page, setPage] = useState(1);
  const [params, setParams] = useState(formInputs);

  const {
    jobs,
    loading,
    error,
    hasLoadMore
  } = useFetchJobs(params, page);

  const {
    dark
  } = useTheme()

  const handleFormSubmit = e => {
    e.preventDefault();
    const { description, location, fullTime, isPristine } = formInputs;
    if (isPristine) return;
    setPage(1);
    setParams(prevParams => ({
      ...prevParams,
      description,
      location,
      fullTime,
    }))
    setFormInputs(prevInputs => ({
      ...prevInputs,
      isPristine: description === '' && location === '' && fullTime === false
    }))
  }

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  const handleJobCardClick = (job) => {
    setJobDetail({
      visible: true,
      job
    })
  }

  if (hideJobBoard) return null;

  return (
    <Styled.JobBoardContainer
      hidden={hidden}
    >
      <JobFilter
        handleFormSubmit={handleFormSubmit}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
      />
      { error ? (
        <Styled.JobBoardError
          dark={dark}
        >
          Something went wrong. Please try again.
        </Styled.JobBoardError>
      ) : (
          <JobList
            loading={loading}
            jobs={jobs}
            dark={dark}
            handleJobCardClick={handleJobCardClick}
          />
        )}
      { hasLoadMore && !error &&
        <Button
          label="Load more"
          type="button"
          variation="primary"
          alignSelf="center"
          handleButtonClick={handleLoadMore}
        />
      }
    </Styled.JobBoardContainer>
  )
}

export default JobBoard
