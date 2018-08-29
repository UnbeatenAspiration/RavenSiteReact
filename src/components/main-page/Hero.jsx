import React,{PureComponent} from 'react'
import {Description,CharacterDiv,CharacterImage,CharacterTitle} from '../stylus/Comics'

export default class Hero extends PureComponent{
    state = {
        error: null,
        isLoaded: false,
        items: [],
        hovered: false,
    }
    // description,events(hard),series(hard),stories,url(type:detail,wiki,comiclink)
    render(){
        const {hero}  = this.props
        const image = `${hero.thumbnail.path}.${hero.thumbnail.extension}`
        return(
            <CharacterDiv key ={hero.id} {...this.state}>
                <CharacterImage style={{'background' : `url(${image}) center no-repeat`,backgroundSize : 'cover'}} onMouseLeave={()=>{this.setState({ hovered : false })}} onMouseOver={()=>{this.setState({ hovered : true })}}>
                    <Description {...this.state}>
                        <div>
                              <div><span> Name : </span>{hero.name}</div>
                              {hero.description && <div><span>Description :</span> {hero.description}</div> }
                              <div><span>Available comics :</span> {hero.comics.available}</div>
                              <div><span>Available events :</span> {hero.events.available}</div>
                              <div><span>Available series :</span> {hero.series.available}</div>
                        </div>
                    </Description>
                </CharacterImage>
                <CharacterTitle {...this.state}>{hero.name}</CharacterTitle>
            </CharacterDiv>
        )
    }
}
