import styled from '@emotion/styled'

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ItemInnerWrapper = styled.div<{ borderLeft?: boolean }>`
  padding: 1rem;
  border-left: ${(props) =>
    props.borderLeft && '1px solid var(--nav-submenu-tile-color)'};
`
