import React from 'react'
import { Toolbar, CssBaseline } from '@mui/material'
import NavItem from './navItem'
import { navData } from './navData'
import { ItemInnerWrapper, ItemsWrapper, StyledAppBar } from './navbar.styles'
import { BlockItem, BlockItemInterface } from './blockItem'
import { ListItemInterface, ListItems } from './listItem'

function Navbar() {
  return (
    <StyledAppBar position="sticky">
      <CssBaseline />
      <Toolbar>
        <ItemsWrapper>
          {navData.map((navItem, nIndex) => (
            <NavItem
              title={navItem.category}
              id={nIndex}
              key={`${navItem.category}_${nIndex}`}
            >
              {navItem.items.map((item, iIndex) => (
                <ItemInnerWrapper
                  borderLeft={item.type === 'list' && iIndex > 0}
                  key={`${item.type}_${iIndex}`}
                >
                  {item.type === 'list' ? (
                    <ListItems
                      listItems={item.listItems as ListItemInterface[]}
                    />
                  ) : (
                    <BlockItem
                      blockItem={item.blockItem as BlockItemInterface}
                    />
                  )}
                </ItemInnerWrapper>
              ))}
            </NavItem>
          ))}
        </ItemsWrapper>
      </Toolbar>
    </StyledAppBar>
  )
}
export default Navbar
