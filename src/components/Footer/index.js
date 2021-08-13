import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer, 
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    websiteRights,
    SocialIcons,
    SocialIconsLinks
} from './FooterElements';

const Footer = () => {

 const toggleHome = () =>{
        scroll.scrollToTop()
    };

    return (
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle> About us</FooterLinkTitle>
                               <FooterLink to="/signin">How it works</FooterLink>
                               <FooterLink to="/signin">Testimonials</FooterLink>
                               <FooterLink to="/signin">Careers</FooterLink>
                               <FooterLink to="/signin">Investors</FooterLink>
                               <FooterLink to="/signin">Terms of Service</FooterLink>
                           
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle> About us</FooterLinkTitle>
                               <FooterLink to="/signin">How it works</FooterLink>
                               <FooterLink to="/signin">Testimonials</FooterLink>
                               <FooterLink to="/signin">Careers</FooterLink>
                               <FooterLink to="/signin">Investors</FooterLink>
                               <FooterLink to="/signin">Terms of Service</FooterLink>
                           
                       </FooterLinkItems>
                   </FooterLinksWrapper>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle> About us</FooterLinkTitle>
                               <FooterLink to="/signin">How it works</FooterLink>
                               <FooterLink to="/signin">Testimonials</FooterLink>
                               <FooterLink to="/signin">Careers</FooterLink>
                               <FooterLink to="/signin">Investors</FooterLink>
                               <FooterLink to="/signin">Terms of Service</FooterLink>
                           
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle> About us</FooterLinkTitle>
                               <FooterLink to="/signin">How it works</FooterLink>
                               <FooterLink to="/signin">Testimonials</FooterLink>
                               <FooterLink to="/signin">Careers</FooterLink>
                               <FooterLink to="/signin">Investors</FooterLink>
                               <FooterLink to="/signin">Terms of Service</FooterLink>
                           
                       </FooterLinkItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/' onClick={toggleHome}>
                           WKW
                       </SocialLogo>
                       <websiteRights>WKW ©{new Date().getFullYear()} All rights reserved</websiteRights>
                       <SocialIcons>
                           <SocialIconsLinks href="/" target="_blank" arial-label="Facebook">
                               <FaFacebook/>
                           </SocialIconsLinks>
                           <SocialIconsLinks href="/" target="_blank" 
                           arial-label="Instagram">
                               <FaInstagram/>
                           </SocialIconsLinks>
                           <SocialIconsLinks href="/" target="_blank" 
                           arial-label="Youtube">
                               <FaYoutube/>
                           </SocialIconsLinks>
                           <SocialIconsLinks href="/" target="_blank" 
                           arial-label="Twitter">
                               <FaTwitter/>
                           </SocialIconsLinks>
                           <SocialIconsLinks href="/" target="_blank" 
                           arial-label="LinkedIn">
                               <FaLinkedin/>
                           </SocialIconsLinks>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
       </FooterContainer>

    )
}

export default Footer
