import React from 'react'
import { CssBaseline } from '@mui/material'
import { StyledAppBar } from './header.styles'
import Navbar from '../navbar/navbar'
import { Brandbar } from './brandbar'

function Header() {
  return (
    <StyledAppBar position="sticky">
      <CssBaseline />
      <Brandbar />
      <Navbar />
    </StyledAppBar>
  )
}
export default Header
