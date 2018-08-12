import React,{PureComponent} from 'react'
{/*
    title,creators,characters,dates,description,id,images,pageCount,prices,series,stories(items),textObjects,thumnail[extension],urls
*/}
export default class Comics extends PureComponent{
    state = {
    }
    render(){
        const {isOpen,comics} = this.props
        const desc = comics.description
        const image = comics.images.length ? <img src={`${comics.images[0].path}.${comics.images[0].extension}`} /> :null
        const divName = `ComicsBlock card ${!this.props.isOpen ? 'tower' : '' }`
        return (
            <div className={divName}>
                <h3 className="display-3"> {comics.title} </h3>
                {isOpen && image}
                <div className="desc card-body"> {desc} </div>
            </div>
        )
    }
}
