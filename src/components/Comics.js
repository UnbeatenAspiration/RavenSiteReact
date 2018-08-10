import React,{PureComponent} from 'react'
{/*
    title,creators,characters,dates,description,id,images,pageCount,prices,series,stories(items),textObjects,thumnail[extension],urls
*/}
export default class Comics extends PureComponent{
    state = {

    }
    render(){
        const {comics} = this.props
        const desc = comics.description
        const image = comics.images
        return (
            <div className="ComicsBlock card">
                <div className="Comics-img">
                </div>
                <h3 className="display-3"> {comics.title} </h3>
                <div className="desc card-body"> {desc} </div>
            </div>
        )
    }
}
