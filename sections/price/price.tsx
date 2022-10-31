import styled from '@emotion/styled'
import { ContainedButton } from 'components/button/button'
import { InnerWrapper, Wrapper } from 'sections/general.styles'

const SectionWrapper = styled(Wrapper)`
  background-color: #82635b;
`

const SectionInnerWrapper = styled(InnerWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
`

const ContentWrapper = styled.div``

const ContentTitle = styled.h2``

const ContentDescription = styled.p``

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const ListTitle = styled.h6`
  color: #ddc6af;
  border-bottom: 2px solid;
  padding: 0.5rem 0;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 0.5rem 0;
`

export function Price() {
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <ContentWrapper>
          <ContentTitle>
            Our Anti-Wrinkle Injectables prices and packages
          </ContentTitle>
          <ContentDescription>
            We recommend a complimentary consultation with one of our Registered
            Nurses or Doctors to advise you on the appropriate product and
            pricing based on your tailored needs.
          </ContentDescription>
          <ContainedButton>BOOK A FREE CONSULTATION</ContainedButton>
        </ContentWrapper>
        <div>
          <ListTitle>ANTI-WRINKLE SINGLE UNITS</ListTitle>
          <List>
            <ListItem>
              <span>0-32 units</span>
              <span>$11.99 per unit</span>
            </ListItem>
            <ListItem>
              <span>33+ units</span>
              <span>$9.99 per unit</span>
            </ListItem>
          </List>
          <ListTitle>ANTI-WRINKLE PACKAGES</ListTitle>
          <List>
            <ListItem>
              <span>Wrinkle Treatment (2 areas)</span>
              <span>$369</span>
            </ListItem>
            <ListItem>
              <span>Wrinkle Treatment (3 areas)</span>
              <span>$529</span>
            </ListItem>
            <ListItem>
              <span>Wrinkle Treatment & Dermal Fillers</span>
              <span>$690 / $849 / $990</span>
            </ListItem>
          </List>
        </div>
      </SectionInnerWrapper>
    </SectionWrapper>
  )
}
