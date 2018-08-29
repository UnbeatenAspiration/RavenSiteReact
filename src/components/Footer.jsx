import React from 'react'
import styled from 'styled-components'
import Logo from '../images/footer.jpg'

const Footer = styled.div`
    display block;
    background #000;
    width 100%;
    padding 50px;
    text-align center;
    margin-top  -40px;
    color #fff;
    &>img{
        margin 0 auto 50px 0 auto;
        width 300px
    }
`
export default () =>(
    <Footer>
        <img src={Logo} alt="MarvelCompany" />
        <p>Data provided by Marvel. ©2018 Marvel</p>
    </Footer>
)
