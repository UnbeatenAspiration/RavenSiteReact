import styled from 'styled-components'
import Shield from '../../images/shield.jpg'

export  const Description = styled.div`
  position  absolute;
  ${props => props.leftDesc ? `left -320px;` : `right -320px;` }
  width ${state =>state.hovered ? '320px' : '0px' };
  height ${state =>state.hovered ? '350px' : '0px' };
  overflow hidden;
  top 0;
  background : url(${Shield}) center center no-repeat;
  background-size : cover;
  color #fff;
  transition: 0.7s width;
    &>div{
        display ${state =>state.hovered ? 'block' : 'none' };
        padding-right 17px;
        position absolute;
        overflow-y : scroll;
        right : -17px;
        left 20px;
        height : 320px;
        top 20px;
    }
    & span{
      color green;
      font-size 1.1em;
    }
`
export const HeroRow = styled.div`
    display block;
    text-align center;
`
export const CharacterDiv = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right:${props => props.styleMake? '15px' : '6px' }
  position: relative;
  z-index: ${state => state.hovered ? 18 : 0}
`
export const CharacterImage = styled.div`
  height: 350px;
  background-size: cover;
  width: 150px;
  transform: skewX(${props => props.styleMake? '-5deg' : '-2deg' });
  transition: .9s all;
  z-index -1;
    &:hover{
      width: 350px;
      z-index: 999;
    }
`
export const CharacterTitle = styled.div`
  width: 150px;
  font-size: 1.2em;
  text-align: center;
  margin-left: -7px;
  transition: .9s all;
  transform : ${state =>state.hovered ? 'translateX(100px)' : 'none' };
  color : ${props => props.styleMake ? '#fff' : ''}
`
