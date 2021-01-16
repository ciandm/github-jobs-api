import React from 'react'
import * as Styled from './JobCardSkeleton.styled';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const JobCardSkeleton = ({
  dark
}) => {
  return (
    <Styled.SkeletonCard
      dark={dark}
    >
      <SkeletonTheme
        color={dark ? 'hsla(219, 29%, 9%, 1)' : 'hsla(210, 22%, 94%, 1)'}
        highlightColor={dark ? 'hsla(219, 29%, 5%, 0.8)' : 'hsla(210, 22%, 87%, .5)'}
      >
        <Styled.SkeletonLogo>
          <Skeleton
            height={50}
            width={50}
            duration={1.5}
          />
        </Styled.SkeletonLogo>
        <Styled.SkeletonDetails>
          <Skeleton
            height={16}
            duration={1.5}
          />
        </Styled.SkeletonDetails>
        <Styled.SkeletonTitle>
          <Skeleton
            height={24}
            duration={1.5}
          />
        </Styled.SkeletonTitle>
        <Styled.SkeletonCompany>
          <Skeleton
            height={16}
            duration={1.5}
          />
        </Styled.SkeletonCompany>
        <Styled.SkeletonLocation>
          <Skeleton
            height={16}
            duration={1.5}
          />
        </Styled.SkeletonLocation>
      </SkeletonTheme>
    </Styled.SkeletonCard >
  )
}
