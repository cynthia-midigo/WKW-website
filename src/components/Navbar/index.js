import React, {useState , useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import{ IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import{
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
    }
     from './NavbarElements';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = ()=>{
        if(window.scrollY>= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll' , changeNav)
    }, []);

    const toggleHome = () =>{
        scroll.scrollToTop()
    };

    return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>
                  WKW
              </NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks
                       to='about'
                      smooth={true} 
                      duration ={500}
                       spy={true} 
                       exact='true' 
                       offset={-80}
                       >
                           About</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='discover'
                      smooth={true} 
                      duration ={500}
                       spy={true} 
                       exact='true' 
                       offset={-80}
                       >Founder</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='services'
                      smooth={true} 
                      duration ={500}
                       spy={true} 
                       exact='true' 
                       offset={-80}
                       >Who we are</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='Activities'
                      smooth={true} 
                      duration ={500}
                       spy={true} 
                       exact='true' 
                       offset={-80}
                       >Activities</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='whatWeDo'
                      smooth={true} 
                      duration ={500}
                       spy={true} 
                       exact='true' 
                       offset={-80}
                       >What We do</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='ourWork'
                      smooth={true} 
                      duration ={500}
                       spy={true} 
                       exact='true' 
                       offset={-80}
                       >Our Work</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to='/visitus'>
                      Support us
                  </NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
      </IconContext.Provider>
      </>  
    );
};

export default Navbar;




 