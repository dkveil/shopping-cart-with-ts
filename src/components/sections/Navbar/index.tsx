import Container from '../../containers/container';
import { NavbarWrapper, NavbarContentWrapper, NavbarMenu, NavbarItem, NavbarLink } from './Navbar.styles';
import Button from '../../elements/Button'
import Icon from '../../elements/Icon'

type menuItem = {
  name: string;
  path: string;
}

const menuItems: menuItem[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Store',
    path: '/store'
  }
]



const Navbar = () => {

  const handleButtonClick = () => {
    console.log('button action')
  }

  return (
      <NavbarWrapper>
          <Container>
              <NavbarContentWrapper>
                  <NavbarMenu>
                      {menuItems.map((item) => (
                          <NavbarItem key={item.name}>
                              <NavbarLink to={item.path}>
                                  {item.name}
                              </NavbarLink>
                          </NavbarItem>
                      ))}
                  </NavbarMenu>
                  <Button
                      styletype="triangle"
                      border="1px solid rgb(200,200,200)"
                      buttoncolor="white"
                      onClickHandler={handleButtonClick}
                      hovercolor="blue"
                  >
                      <Icon
                          icontype="shoppingcart"
                          iconcolor="blue"
                          iconpadding='8px'
                          hovercolor="white"
                      />
                  </Button>
              </NavbarContentWrapper>
          </Container>
      </NavbarWrapper>
  );
}

export default Navbar;
