import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import {exceptQ} from '../../apikey'
import Hero from '../Hero'
import Settings from './Settings'
import {chunk} from 'lodash'
import Errors from '../utils/ErrorCatching'
import '../../css/utils/Loading.css'
import {CharacterRow} from '../stylus/Characters'
import TitleImg from '../../images/H1.png'

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
            let arr = []
            if(this.state.withOutImages){
                arr = this.state.characters.filter(item => item.thumbnail.path.split('/').slice(-1)[0] !== 'image_not_available')
            }
            else{
                arr = this.state.characters
            }
            const rowOfHeroes = chunk(arr,5)
            return (
                <div className="AllCharactersContainer">
                    <img src={TitleImg} alt="" style={{margin : '0 auto',display : 'block',paddingRight: '27px'}} />
                    <Settings
                        change={this.change.bind(this)}
                        open={this.state.openSettings}
                        click={this.openIt.bind(this)}
                        changed={this.state.withOutImages}/>
                    {rowOfHeroes.map( (arr,index) => {
                        return (
                            <CharacterRow key={index}>
                                {arr.map( (character,key) =>{
                                    return(
                                        <Errors key={character.id}>
                                            <Hero  hero = {character} leftDesc={key === 4} styleMake={true}/>
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
    change = ()=> this.setState(prevState =>{return {withOutImages : !prevState.withOutImages} })
    openIt = ()=> this.setState(prevState => {return {openSettings : !prevState.openSettings} })
}
