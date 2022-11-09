import { useEffect, useState } from 'react'
import { Toolbar } from '@mui/material'
import { client } from 'lib/sanity'
import NavItem from './navItem'
import { ItemInnerWrapper, ItemsWrapper } from './navbar.styles'
import { BlockItem, BlockItemInterface } from './blockItem'
import { ListItemInterface, ListItems } from './listItem'
import { groq } from 'next-sanity'

type navItemProps = {
  isBlockItem: boolean
  blockItem: BlockItemInterface
  listName: string
  listLink: string
  listItems: ListItemInterface[]
}

const query = `
  *[_type == "navbar"] {
      name,
      sections[]->{
        category->{
        name,
        'link':slug.current
      },
      items[]{
        isBlockItem,
        blockItem{
          imageSrc,
          'name':product->.name,
          'link': product->.category->.slug.current + product->.slug.current
        },
        listName,
        'listLink': listLink->.category->.slug.current + listLink->.slug.current,
        listItems[]{
          name,
          'link': product->.category->.slug.current + product->.slug.current,
        }
      }
    }
  }
`

type navbarSectionProps = {
  category: { name: string; link: string }
  items: any[]
}

function Navbar() {
  const [navData, setNavData] = useState([])

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        setNavData(data[0].sections)
      })
      .catch(console.error)
  }, [])

  console.log('navData: ', navData)

  return (
    <Toolbar>
      {navData.length > 0 && (
        <ItemsWrapper>
          {navData.map((navItem: navbarSectionProps, nIndex: number) => (
            <NavItem
              name={navItem.category.name}
              id={nIndex}
              key={`${navItem.category.name}_${nIndex}`}
            >
              {navItem.items.map((item: navItemProps, iIndex: number) => (
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
              ))}
            </NavItem>
          ))}
        </ItemsWrapper>
      )}
    </Toolbar>
  )
}
export default Navbar
