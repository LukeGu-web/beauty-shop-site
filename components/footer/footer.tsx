import {
  StyledFooter,
  Wrapper,
  ColumnWrapper,
  ColumnTitle,
  XpperWrapper,
} from './footer.styles'

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <ColumnWrapper>
          <ColumnTitle>Company</ColumnTitle>
          <a href="#">About Us</a>
          <a href="#">Expansion Plan</a>
          <a href="#">Careers</a>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnTitle>Support</ColumnTitle>
          <a href="#">FAQs</a>
          <a href="#">Email Us</a>
          <a href="#">Refund Policy</a>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnTitle>Partnerships</ColumnTitle>
          <a href="#">Become a Partner</a>
          <a href="#">Check Status</a>
        </ColumnWrapper>
      </Wrapper>
      <XpperWrapper>@Powered by Xpper</XpperWrapper>
    </StyledFooter>
  )
}
export default Footer
