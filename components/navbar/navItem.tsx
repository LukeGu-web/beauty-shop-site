import { ReactNode } from 'react'
import styled from '@emotion/styled'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface NavItemInterface {
  title: string
  id: string | number
  children: ReactNode
}

const Content = styled.div`
  display: none;
  position: absolute;
  background-color: var(--nav-dropdown-bg-color);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

const StyledButton = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
`

const Wrapper = styled.div`
  float: left;
  overflow: hidden;
  &:hover {
    background-color: red;
    ${Content} {
      display: block;
    }
  }
`

function NavItem({ title, id, children }: NavItemInterface) {
  return (
    <Wrapper key={id}>
      <StyledButton>
        {title}
        <ExpandMoreIcon />
      </StyledButton>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default NavItem
