import React,{Component} from 'react'
import styled from 'styled-components'
import BlackWidow from '../../images/black-widow-char.jpg'
import BlackWidowEye from '../../images/black-widow-eye.png'
const Errors = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    height: 400px;
    min-width: auto;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
    background: ${BlackWidow}
`
const Eye = styled.div`
    widtwidth: 75px;
    height: 75px;
    top: auto;
    bottom: 83px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-size: cover;
    background : ${BlackWidowEye}
`
export default class ErrorsC extends Component{
    state = {
        hasError : false,
    }

    componentDidCatch(error,info){
        console.log('error -->',error)
        console.log('info -->',info)
        this.setState( ()=>({hasError : true })  )
    }
    render(){
        ErrorsC.displayName = `Error(${this.props.children.displayName || this.props.children.type.name})`
        if(this.state.hasError){
            return(
                <div>
                    <p>Not even the eye of Uatu sees your request</p>
                    <Errors /><Eye />
                </div>
            )
        }else{
            return this.props.children
        }
    }
}
