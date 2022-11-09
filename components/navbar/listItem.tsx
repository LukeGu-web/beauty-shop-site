import Link from 'next/link'
import styled from '@emotion/styled'

const ListItemsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`

const LinkWrapper = styled.li`
  margin-bottom: 0.5rem;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`

const H3 = styled.h3`
  margin-bottom: 0.5rem;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`

const StyledLink = styled.a``

export interface ListItemInterface {
  name: string
  link: string
}

export function ListItems({
  listName,
  listLink,
  listItems,
}: {
  listName: string
  listLink: string
  listItems: ListItemInterface[]
}) {
  return (
    <ListItemsWrapper>
      <Link href={listLink}>
        <a>
          <H3>{listName}</H3>
        </a>
      </Link>
      {listItems.map((listItem: ListItemInterface) => (
        <LinkWrapper key={listItem.name}>
          <Link href={listItem.link}>
            <StyledLink>{listItem.name}</StyledLink>
          </Link>
        </LinkWrapper>
      ))}
    </ListItemsWrapper>
  )
}
