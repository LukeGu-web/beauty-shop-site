import { AppBar } from '@mui/material'
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

export const StyledAppBar = styled(AppBar)`
  background-color: var(--nav-main-bg-color);
  color: var(--nav-default-text-color);
`
