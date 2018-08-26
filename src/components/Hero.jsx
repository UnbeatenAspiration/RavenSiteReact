import React,{PureComponent} from 'react'
export default class Hero extends PureComponent{
    state = {
        error: null,
        isLoaded: false,
        items: [],
        hovered: false,
    }
    // description,events(hard),series(hard),stories,url(type:detail,wiki,comiclink)
    render(){
        const {results} = this.props
        const image = `${results[0].thumbnail.path}.${results[0].thumbnail.extension}`
        console.log(results[0])
        return(
            <div key ={results[0].id} className="character-div">
                <div className="character-image" style={{'background' : `url(${image}) center no-repeat`,backgroundSize : 'cover'}} onMouseLeave={()=>{this.setState({ hovered : false })}} onMouseOver={()=>{this.setState({ hovered : true })}}></div>
                <div className="character-title">{results[0].name}</div>
            </div>
        )
    }
}
