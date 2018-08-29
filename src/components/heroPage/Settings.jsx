import React,{PureComponent} from 'react'
import {SettingsDiv} from '../stylus/Characters'
export default class Settings extends PureComponent{
    state = {
    }
    render(){
        if(!this.props.open)
            return (
                <SettingsDiv onClick={this.props.click} {...this.props}>
                    <h1>Click to see list of options</h1>
                </SettingsDiv>
            )
        else
            return(
                <SettingsDiv onClick={this.props.click} {...this.props}>
                        <input type="hidden" id="ImageFilter" />
                        <label htmlFor="ImageFilter"><i></i></label>
                        <label htmlFor="ImageFilter">Hide heroes without images</label>
                </SettingsDiv>
            )
    }
}
