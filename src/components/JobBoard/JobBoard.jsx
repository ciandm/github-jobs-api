import React, { useState, useEffect } from 'react'
import * as Styled from './JobBoard.styled';
import { useTheme } from '../../theme/ThemeProvider';
import JobCard from './JobCard/JobCard';
import Button from '../Button/Button';
import useFetchJobs from '../../hooks/useFetchJobs';
import Form from '../Form/Form';

function JobBoard({
  hideJobBoard,
  hidden,
  setJobDetail
}) {

  const [formInputs, setFormInputs] = useState({
    description: '',
    location: '',
    fullTime: false
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
    const { description, location, fullTime } = formInputs
    setPage(1);
    setParams(prevParams => ({
      ...prevParams,
      description,
      location,
      fullTime
    }))
  }

  const handleButtonClick = () => {
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
      <Form
        handleFormSubmit={handleFormSubmit}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
      />
      <Styled.JobBoard
        hidden={hidden}
      >
        {
          loading ? (
            <h1>Loading...</h1>
          ) : (
              jobs.map(j => (
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
              ))
            )
        }
      </Styled.JobBoard>
      { hasLoadMore &&
        <Button
          label="Load more"
          type="button"
          variation="primary"
          alignSelf="center"
          handleButtonClick={handleButtonClick}
        />
      }
    </Styled.JobBoardContainer>
  )
}

export default JobBoard
