import Link from 'next/link'
import Image from 'next/image'
import { Typography } from '@mui/material'
import styled from '@emotion/styled'

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

const TitleLink = styled(Typography)`
  margin-top: 0.5rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export interface BlockItemInterface {
  title: string
  image: string
  link: string
}

export function BlockItem({ blockItem }: { blockItem: BlockItemInterface }) {
  return (
    <Link href={blockItem?.link || '/'}>
      <LinkWrapper>
        <Image
          alt={blockItem?.title}
          width={280}
          height={180}
          src={blockItem.image || ''}
        />
        <TitleLink>{blockItem.title}</TitleLink>
      </LinkWrapper>
    </Link>
  )
}
