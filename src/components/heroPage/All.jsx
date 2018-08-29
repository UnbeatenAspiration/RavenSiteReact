import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import {exceptQ} from '../../apikey'
import Hero from '../main-page/Hero'
import Settings from './Settings'
import {chunk} from 'lodash'
import Errors from '../utils/ErrorCatching'
import '../../css/utils/Loading.css'
import {CharacterRow,PageTitle} from '../stylus/Characters'

export default () => (
    <Switch>
      <Route exact path='/characters' component={AllCharacters}/>
      <Route path='/characters/:number' component={AllCharacters}/>
    </Switch>
)
class AllCharacters extends Component {
    state ={
        error: null,
        isLoaded: false,
        newPage : 0,
        previosPage : null,
        withOutImages : true,
        openSettings : false,
    }
    componentDidMount() {
        var url = null
        if(this.state.newPage){
            url = `http://gateway.marvel.com/v1/public/characters?limit=40&offset=${this.state.previosPage}&${exceptQ}`
            this.setState((prevState) => { return { previousPage : prevState.previosPage + 40 , newPage : prevState.newPage + 1  } })
        }
        else{
             url = `http://gateway.marvel.com/v1/public/characters?limit=40&${exceptQ}`
        }
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              total: result.data.total,
              characters: result.data.results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render(){
        const { error, isLoaded } = this.state;
        if (error)
            return <div>{error.message}</div>
        else if (!isLoaded)
            return (
            <div className="cssload-thecube">
                <div className="cssload-cube cssload-c1"></div>
                <div className="cssload-cube cssload-c2"></div>
                <div className="cssload-cube cssload-c4"></div>
                <div className="cssload-cube cssload-c3"></div>
            </div>
        )
        else{
            const rowOfHeroes = chunk(this.state.characters,5)
            return (
                <div className="AllCharactersContainer">
                    <PageTitle > Marvel Heroes </PageTitle>
                    <Settings change={this.openIt.bind(this)} change ={this.change.bind(this)} open={this.state.openSettings} click={this.openIt.bind(this)}/>
                    {rowOfHeroes.map( (arr,index) => {
                        return (
                            <CharacterRow key={index}>
                                {arr.map( (character) =>{
                                    return(
                                        <Errors key={character.id}>
                                            <Hero  hero = {character}/>
                                        </Errors>
                                    )
                                })}
                            </CharacterRow>
                        )
                    })}
                </div>
            )
        }
    }
    change(){
        this.setState( (prevState) =>  {withOutImages : !prevState.withOutImages} )
    }
    openIt(){
        console.log('two')
        this.setState({ openSettings : !this.state.openSettings })
        this.setState( (prevState) =>  {openSettings : !prevState.openSettings} )
    }
}
