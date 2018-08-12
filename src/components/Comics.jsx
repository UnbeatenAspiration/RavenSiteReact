import React,{PureComponent} from 'react'
// import { get } from 'lodash'
import Characters from './Characters'
/*
    title,creators,characters,dates,description,id,images,pageCount,prices,series,stories(items),textObjects,thumnail[extension],urls
*/
export default class Comics extends PureComponent{
    state = {
    }
    render(){
        const {isOpen,comics,openIt} = this.props
        const desc = comics.description
        const image = comics.images.length ? <img src={`${comics.images[0].path}.${comics.images[0].extension}`}  alt ="comics.title"/> :null
        const characters = isOpen && <div className="characters"> {comics.characters.available ? <Characters item={ comics.characters.items } /> : ''}</div>
        const divName = `ComicsBlock card ${!isOpen ? 'tower' : 'bigger' }`
        return (
            <div className={divName} onClick={openIt}>
                <h3 className="display-3"> {comics.title} </h3>
                {isOpen && image}
                <div className="desc card-body" dangerouslySetInnerHTML= { { __html: desc } } />
                {characters}
            </div>
        )
    }
}
