import React,{PureComponent} from 'react'
import { get } from 'lodash'
import Key from '../apikey.jsx'

export default class Characters extends PureComponent{
    state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    componentDidMount() {
        Promise.all( this.props.item.map( ( characterName ) => {

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
    render(){
        return <div>

        </div>
    }
}
