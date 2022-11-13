import Image from 'next/image'
import Link from 'next/link'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  BrandbarWrapper,
  LogoWrapper,
  FunctionWrapper,
  StyledOption,
  StyledOptionTitle,
} from './header.styles'

export function Brandbar() {
  return (
    <BrandbarWrapper>
      <Link href="/">
        <LogoWrapper>
          <Image
            alt="Logo"
            width={280}
            height={180}
            src={'https://www.laserclinics.com.au/globalassets/logo-white.svg'}
          />
        </LogoWrapper>
      </Link>
      <FunctionWrapper>
        <StyledOption>
          <AssistantDirectionIcon />
          <StyledOptionTitle>Shop Skinstitut™</StyledOptionTitle>
        </StyledOption>
        <StyledOption>
          <AccountCircleIcon />
          <StyledOptionTitle>login / sign up</StyledOptionTitle>
        </StyledOption>
        <StyledOption>
          <ShoppingCartIcon />
          <StyledOptionTitle>my cart (0)</StyledOptionTitle>
        </StyledOption>
      </FunctionWrapper>
    </BrandbarWrapper>
  )
}
