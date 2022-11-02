import { ReactNode } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Content, InnerContent, StyledButton, Wrapper } from './navItem.styles'
interface NavItemInterface {
  title: string
  id: string | number
  children: ReactNode
}

function NavItem({ title, id, children }: NavItemInterface) {
  return (
    <Wrapper key={id}>
      <StyledButton>
        {title}
        <ExpandMoreIcon />
      </StyledButton>
      <Content>
        <InnerContent>{children}</InnerContent>
      </Content>
    </Wrapper>
  )
}

export default NavItem
