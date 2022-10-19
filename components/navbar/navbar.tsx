import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
} from '@mui/material'
import styled from '@emotion/styled'
import Link from 'next/link'
import NavItem from './navItem'


let ItemsWrapper = styled.div({
    display: "flex",
    flexWrap: 'wrap'
})

function Navbar() {

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4">Navbar</Typography>
                <ItemsWrapper>
                    <NavItem title="test - 1" id={1}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">contact</Link>
                        <Link href="/faq">FAQ</Link>
                    </NavItem>
                    <NavItem title="test - 2" id={2}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">contact</Link>
                        <Link href="/faq">FAQ</Link>
                    </NavItem>
                    <NavItem title="test - 3" id={3}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">contact</Link>
                        <Link href="/faq">FAQ</Link>
                    </NavItem>

                </ItemsWrapper>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar
