import styled from '@emotion/styled'

export const Content = styled.div`
  display: none;
  position: absolute;
  background-color: var(--nav-dropdown-bg-color);
  min-width: 160px;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 1rem;
`

export const InnerContent = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  margin: 0 auto;
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  color: var(--nav-default-text-color);
  background-color: inherit;
  font-weight: bold;
  min-height: 4rem;
  @media (max-width: 767px) {
    min-height: unset;
  }
`

export const Wrapper = styled.div`
  float: left;
  overflow: hidden;
  &:hover {
    ${StyledButton} {
      border-bottom: 4px solid #000;
    }
    ${Content} {
      display: block;
    }
  }
`
