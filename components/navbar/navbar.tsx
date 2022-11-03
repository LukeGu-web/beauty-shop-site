import { useEffect, useState } from 'react'
import { Toolbar } from '@mui/material'
import { client } from 'lib/sanity'
import NavItem from './navItem'
import { ItemInnerWrapper, ItemsWrapper } from './navbar.styles'
import { BlockItem, BlockItemInterface } from './blockItem'
import { ListItemInterface, ListItems } from './listItem'

function Navbar() {
  const [navData, setNavData] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "navbar"] {
      ..., 
      name->,
      categories[]->
    }
    `,
      )
      .then((data) => {
        setNavData(data[0].categories)
      })
  }, [])

  return (
    <Toolbar>
      {navData.length > 0 && (
        <ItemsWrapper>
          {navData.map(
            (
              navItem: { name: string; items: any[] },
              nIndex: string | number,
            ) => (
              <NavItem
                name={navItem.name}
                id={nIndex}
                key={`${navItem.name}_${nIndex}`}
              >
                {navItem.items.map(
                  (
                    item: {
                      isBlockItem: boolean
                      listItems: ListItemInterface[]
                      blockItem: BlockItemInterface
                    },
                    iIndex: number,
                  ) => (
                    <ItemInnerWrapper
                      borderLeft={!item.isBlockItem && iIndex > 0}
                      key={`nav_item_${iIndex}`}
                    >
                      {!item.isBlockItem ? (
                        <ListItems
                          listName={item.listName}
                          listLink={item.listLink}
                          listItems={item.listItems as ListItemInterface[]}
                        />
                      ) : (
                        <BlockItem
                          blockItem={item.blockItem as BlockItemInterface}
                        />
                      )}
                    </ItemInnerWrapper>
                  ),
                )}
              </NavItem>
            ),
          )}
        </ItemsWrapper>
      )}
    </Toolbar>
  )
}
export default Navbar
