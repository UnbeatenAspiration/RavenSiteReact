import React,{PureComponent} from 'react'
// import { get } from 'lodash'
import Characters from './Characters'
import sizeMe from 'react-sizeme'
/*
    title,creators,characters,dates,description,id,images,pageCount,prices,series,stories(items),textObjects,thumnail[extension],urls
*/
class Comics extends PureComponent{
    state = {
    }
    render(){
        const {isOpen,comics,openIt} = this.props
        const {height} = this.props.size
        const desc = comics.description
        const image = comics.images.length ? <img src={`${comics.images[0].path}.${comics.images[0].extension}`}  alt ="comics.title"/> :null
        const divName = `ComicsBlock card ${!isOpen ? 'tower' : 'bigger' }`
        const f = (height < 700)?  'medium' : 'hard'
        return (
            <div className={`${divName} ${f}`} onClick={openIt}>
                <h3 className="display-3"> {comics.title} </h3>
                {isOpen && image}
                <div className="desc card-body" dangerouslySetInnerHTML= { { __html: desc } } />
                <Characters open={ isOpen } item={ comics.characters.items } />
            </div>
        )
    }
}
export default sizeMe({ monitorHeight: true })(Comics)
