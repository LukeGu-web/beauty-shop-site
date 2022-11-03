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

const StyledLink = styled.a``

export interface ListItemInterface {
  title: string
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
        <h3>{listName}</h3>
      </Link>
      {listItems.map((listItem: ListItemInterface) => (
        <LinkWrapper key={listItem.title}>
          <Link href={listItem.link}>
            <StyledLink>{listItem.title}</StyledLink>
          </Link>
        </LinkWrapper>
      ))}
    </ListItemsWrapper>
  )
}
