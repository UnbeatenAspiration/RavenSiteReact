import React,{PureComponent} from 'react'
// import { get } from 'lodash'
import Characters from './Characters'
import sizeMe from 'react-sizeme'
import Image from '../utils/ImageMaker'
/*
    title,creators,characters,dates,description,id,images,pageCount,prices,series,stories(items),textObjects,thumnail[extension],urls
*/
class Comics extends PureComponent{
    render(){
        const {isOpen,comics,openIt} = this.props
        const {height} = this.props.size
        const desc = comics.description
        const image = comics.images.length ? <Image image={`${comics.images[0].path}.${comics.images[0].extension}`} width={550} height={834} /> :null
        const divName = `ComicsBlock card ${!isOpen ? 'tower' : 'open' }`
        const f = (height < 1000)?  'medium' : 'hard'
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
