import { AppBar } from '@mui/material'
import styled from '@emotion/styled'

export const StyledAppBar = styled(AppBar)`
  background-color: var(--nav-main-bg-color);
  color: var(--nav-default-text-color);
`

export const BrandbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 0 2.5rem;
`

export const LogoWrapper = styled.div`
  display: flex;
  width: 6rem;
  cursor: pointer;
`

export const FunctionWrapper = styled.ul`
  display: flex;
  color: #fff;
`

export const StyledOption = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export const StyledOptionTitle = styled.p`
  margin: 0 0 0 0.5rem;
`
