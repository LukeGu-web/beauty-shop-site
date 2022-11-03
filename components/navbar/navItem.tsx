import { ReactNode } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Content, InnerContent, StyledButton, Wrapper } from './navItem.styles'
interface NavItemInterface {
  name: string
  id: string | number
  children: ReactNode
}

function NavItem({ name, id, children }: NavItemInterface) {
  return (
    <Wrapper key={id}>
      <StyledButton>
        {name}
        <ExpandMoreIcon />
      </StyledButton>
      <Content>
        <InnerContent>{children}</InnerContent>
      </Content>
    </Wrapper>
  )
}

export default NavItem
