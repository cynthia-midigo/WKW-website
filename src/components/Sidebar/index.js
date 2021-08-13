import React from 'react';
import { 
    SidebarContainer,
    Icon,
     CloseIcon,
     SidebarWrapper,
     SideBtnWrap,
     SidebarLink,
     SidebarMenu,
     SidebarRoute
    } from './SidebarElements';
    
const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
               <SidebarMenu>
               <SidebarLink to='about'onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='discover'onClick={toggle}>
                    Founder
                </SidebarLink>
                <SidebarLink to='services'onClick={toggle}>
                    who we are
                </SidebarLink>
                <SidebarLink to='signup'onClick={toggle}>
                    Activities
                </SidebarLink>
                <SidebarLink to='ourWork'onClick={toggle}>
                    Our Work
                </SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to='/visitus'>Support Us</SidebarRoute>
               </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
            
    );
};

export default Sidebar
