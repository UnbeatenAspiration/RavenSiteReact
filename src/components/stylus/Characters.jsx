import styled from 'styled-components'

export const CharacterRow = styled.div`
    display block;
    text-align center;
`
export const PageTitle = styled.h1`
    display block;
    text-align center;
    font-size 200px;
    color #50078f;
    letter-spacing: 11px;
    font-family Finger;
`
export const SettingsDiv = styled.div`
    padding 20px 30px;
    font-size 2em;
    width 50%;
    margin 0 auto;
    background #eee;
    margin-bottom 20px;
    transition .9s height;
    height ${props => props.open ? '300px' : '100px'};
`
export settingsInput = styled.input`
    &:checked + label i{
        width 30px;
        height 30px;
        display inline-block;
        border-radius 50px;
        border 1px solid #000;
    }
`
