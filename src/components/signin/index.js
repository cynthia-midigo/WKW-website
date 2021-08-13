import React from 'react'

import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    
    Text
}from './SigninElements'

const SignIn = () => {
    return (
       <>
       <Container>
           <FormWrap>
               <Icon to='/'>WKW</Icon>
               <FormContent>
                   <Form action="#">
                       <FormH1>Donate</FormH1>
                       <Text>LIPA NA MPESA</Text>
                       <Text>BUSINESS NUMBER (PAYBILL NUMBER) : 764915</Text>
                       <Text>Account NUMBER  : YOUR NAME & PHONE NUMBER</Text>
                                          
                       <FormH1>Visit Us</FormH1>
                       <Text>You can pay us a Visit at the center</Text>
                       <Text>Contact us on 0776918372</Text>
                   </Form>
               </FormContent>

           </FormWrap>
       </Container>
       </>
    )
}

export default SignIn
