import styled from '@emotion/styled'
import Link from 'next/link'
import { ContainedButton } from 'components/button/button'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'

const SectionWrapper = styled(Wrapper)`
  background-color: #82635b;
`

const SectionInnerWrapper = styled(InnerWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-row-gap: 2rem;
  color: #fff;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`

const ContentWrapper = styled.div``

const ContentTitle = styled.h2``

const ContentDescription = styled.p``

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const ListTitle = styled.h6`
  color: #ddc6af;
  border-bottom: 2px solid;
  padding: 0.5rem 0;
  text-transform: uppercase;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 0.5rem 0;
`

type priceType = {
  name: string
  cost: string
}

type priceListProps = {
  name: string
  prices: priceType[]
}

type priceProps = {
  content: {
    title: string
    description: string
    buttonLabel: string
    buttonLink: string
  }
  lists: priceListProps[]
}

function PriceList({ name, prices }: priceListProps) {
  return (
    <div>
      <ListTitle>{name}</ListTitle>
      {prices.map((item) => (
        <ListItem key={item.name}>
          <span>{item.name}</span>
          <span>{item.cost}</span>
        </ListItem>
      ))}
    </div>
  )
}

export function Price({ content, lists }: priceProps) {
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        {content && (
          <ContentWrapper>
            <ContentTitle>{content.title}</ContentTitle>
            <ContentDescription>{content.description}</ContentDescription>
            <Link href={content.buttonLink || ''}>
              <a>
                <ContainedButton>{content.buttonLabel}</ContainedButton>
              </a>
            </Link>
          </ContentWrapper>
        )}
        <div>
          {lists &&
            lists.map((item) => <PriceList key={item.name} {...item} />)}
        </div>
      </SectionInnerWrapper>
    </SectionWrapper>
  )
}
