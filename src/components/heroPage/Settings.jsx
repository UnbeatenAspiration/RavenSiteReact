import React,{PureComponent} from 'react'
import {SettingsDiv,SettingsInput,Cross} from '../stylus/Characters'
export default class Settings extends PureComponent{
    state = {
    }
    render(){
        if(!this.props.open)
            return (
                <SettingsDiv onClick={this.props.click} {...this.props}>
                    <Cross lines>
                        <div></div><div></div>
                    </Cross>
                    <h1>Click to see list of options</h1>
                </SettingsDiv>
            )
        else
            return(
                <SettingsDiv{...this.props}>
                        <Cross onClick={this.props.click}>
                            <div></div><div></div>
                        </Cross>
                        <SettingsInput type="checkbox" id="ImageFilter"  onChange={this.props.change} checked={this.props.changed}/>
                        <label htmlFor="ImageFilter"><i></i></label>
                        <label htmlFor="ImageFilter">Hide heroes without images</label>
                </SettingsDiv>
            )
    }
}
