import React,{PureComponent} from 'react'
import { chunk } from 'lodash'
import Key from '../../apikey.jsx'
import Hero from '../Hero'
import Errors from '../utils/ErrorCatching'
import {HeroRow} from '../stylus/Comics'
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
                                items : bands,
                                isLoaded : true
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
            if(!this.state.isLoaded){
                return(
                    <div className="cssload-container">
                        <div className="cssload-shaft1"></div>
                        <div className="cssload-shaft2"></div>
                        <div className="cssload-shaft3"></div>
                        <div className="cssload-shaft4"></div>
                        <div className="cssload-shaft5"></div>
                        <div className="cssload-shaft6"></div>
                        <div className="cssload-shaft7"></div>
                        <div className="cssload-shaft8"></div>
                        <div className="cssload-shaft9"></div>
                        <div className="cssload-shaft10"></div>
                    </div>
                )
            }
            else{
                const rowOfHeroes = chunk(this.state.items,4)
                return (
                    <div>
                        {rowOfHeroes.map( (group,index) =>{
                            return (
                                <HeroRow key={index}>
                                    {group.map( (character,index) =>{
                                        const {results} = character.data;
                                            return (
                                                  <Errors key={index}>
                                                      <Hero  hero = {results[0]}/>
                                                  </Errors>
                                            )}
                                        )}
                                </HeroRow>
                                )}
                            )}
                    </div>
                )
            }
        }
    else
        return null
}
}
