import React,{PureComponent} from 'react'
import { get } from 'lodash'
import Key from '../apikey.jsx'

export default class Characters extends PureComponent{
    state = {
      error: null,
      isLoaded: false,
      items: [],
    };

    componentWillReceiveProps( nextProps ){
        if( !this.state.isLoaded && nextProps.open ){
            Promise.all( nextProps.item.map( ( characterName ) => {

                return new Promise( ( resolve, reject ) => {

                    return fetch( `${characterName.resourceURI}${Key}` )
                    .then( ( resp ) => resp.json() )
                    .then( ( data ) => {
                        if ( data && !data.error ){
                            return resolve( data )
                        } else {
                            return reject( data.error )
                        }
                    } )
                    .catch( ( e ) => {
                        return reject( e )
                    } )

                } )

            } ) )
            .then( ( bands ) => {
                if ( bands ) {
                    return (
                        <div>
                            {this.setState({
                                items : bands
                            })}
                        </div>
                    )
                } else {
                    return <div> No results </div>
                }

    } )
        }

    }
    render(){
        if ( this.props.open ){
            return (
                <div>
                    {this.state.items.map( character =>{
                        const {results} = character.data;
                        return (
                            <React.Fragment key ={results[0].id}>
                                <img className="character_image" src={`${results[0].thumbnail.path}.${results[0].thumbnail.extension}`} alt="thums" />
                                <div className="hero-title">{results[0].name}</div>
                            </React.Fragment>
                        )
                    }
                )}
                </div>
            )
        }
    else
        return null
    }
}
