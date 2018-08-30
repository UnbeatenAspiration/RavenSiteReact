import styled from 'styled-components'
import Done from '../../images/done.svg'
import BlackCogWheel from '../../images/black.svg'

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
    height ${props => props.open ? '300px' : '70px'};
    position relative;
`
export const SettingsInput = styled.input`
    display none;
    & ~ label{
        user-select none;
        & + label{
            margin-left 10px;
        }
        &>i{
            width 32px;
            height 32px;
            display inline-block;
            background url(${BlackCogWheel});
        }
    }
    &:checked ~ label{
        &>i{
            background url(${Done});
        }
    }
`
export const Cross = styled.div`
    position absolute;
    right 10px;
    top 30px;
    width 30px;
    height 30px;
    &>div{
        display block;
        height 4px;
        width 100%;
        background #000;
        border-radius 8px;
        transition .9s all;
        ${props => props.lines ? `
            transform rotate(0deg);
            &:last-child{
                position relative;
                top 7px;
            }
            ` :`
            position absolute;
            top 0;
            &:first-child{
                transform rotate(45deg);
            }
            &:last-child{
                transform rotate(-45deg);
            }`}
    }
`
