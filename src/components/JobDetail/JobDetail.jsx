import React, { useEffect } from 'react'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import PropTypes from 'prop-types';
import * as Styled from './JobDetail.styled';
import Button from '../Button/Button';
import { useTheme } from '../../theme/ThemeProvider';
import ReactMarkdown from 'react-markdown'

function JobDetail({
  shown,
  job,
  cancelJobDetail
}) {

  const {
    company,
    company_logo,
    company_url,
    created_at,
    description,
    how_to_apply,
    location,
    title,
    type,
    url
  } = job;

  const {
    dark
  } = useTheme()

  useEffect(() => {
    // when component mounts, scroll user to top of screen
    let timer;
    if (shown) {
      timer = setTimeout(() => {
        document.documentElement.scrollTop = 0;
      }, 400)
    }

    return () => clearTimeout(timer);
  }, [shown])

  if (!shown) return null;

  return (
    <>
      <Styled.Container>
        <Styled.Header
          dark={dark}
        >
          <Styled.BackButton
            onClick={() => cancelJobDetail()}
          >
            Back
          </Styled.BackButton>
          <Styled.LogoContainer
            dark={dark}
          >
            <Styled.Logo
              url={company_logo}
            />
          </Styled.LogoContainer>
          <Styled.HeaderInner>
            <Styled.CompanyDetails>
              <Styled.Company
                dark={dark}
              >
                {company}
              </Styled.Company>
              <Styled.Website>
                {company_url}
              </Styled.Website>
            </Styled.CompanyDetails>
            <Button
              variation="secondary"
              dark={dark}
              label="Company Site"
              as="a"
              target="_blank"
              href={company_url}
            />
          </Styled.HeaderInner>
        </Styled.Header>
        <Styled.Job
          dark={dark}
        >
          <Styled.JobHeader>
            <Styled.JobDescription>
              <Styled.Date>
                <Styled.Age>
                  {formatDistanceStrict(Date.parse(new Date()), Date.parse(created_at))}
                </Styled.Age>
                <span />
                <Styled.Type>{type}</Styled.Type>
              </Styled.Date>
              <Styled.Role
                dark={dark}
              >{title}</Styled.Role>
              <Styled.Location>{location}</Styled.Location>
            </Styled.JobDescription>
            <Button
              variation="primary"
              label="Apply Now"
              alignSelf="center"
              as="a"
              target="_blank"
              href={url}
            />
          </Styled.JobHeader>
          <Styled.Body
            dark={dark}
          >
            <ReactMarkdown
              children={description}
              renderers={{
                paragraph: Styled.MDParagraph,
                list: Styled.MDList,
                listItem: Styled.MDListItem,
                heading: Styled.MDHeading
              }}
            />
          </Styled.Body>
        </Styled.Job>
        <Styled.Footer>
          <Styled.FooterTitle>How to Apply</Styled.FooterTitle>
          <ReactMarkdown
            children={how_to_apply}
            renderers={{
              paragraph: Styled.MDParagraph,
              list: Styled.MDList,
              listItem: Styled.MDListItem,
              heading: Styled.MDHeading
            }}
          />
        </Styled.Footer>
      </Styled.Container>
      <Styled.Banner
        dark={dark}
      >
        <Styled.BannerInner>
          <Styled.BannerDetails>
            <Styled.BannerTitle
              dark={dark}
            >{title}</Styled.BannerTitle>
            <Styled.BannerCompany>{company}</Styled.BannerCompany>
          </Styled.BannerDetails>
          <Button
            label="Apply now"
            as="a"
            target="_blank"
            href={url}
          />
        </Styled.BannerInner>
      </Styled.Banner>
    </>
  )
}

JobDetail.propTypes = {
  job: PropTypes.object.isRequired,
}

export default JobDetail
