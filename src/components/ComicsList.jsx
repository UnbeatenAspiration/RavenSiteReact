import React,{Component} from 'react'
import '../css/ComicsList.css'
import Key from '../apikey'
import Comics from './Comics'
export default class ComicsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          openComics : null,
        };
    }
    componentDidMount() {
      fetch(`http://gateway.marvel.com/v1/public/comics${Key}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              total: result.data.total,
              comics: result.data.results
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
        const { error, isLoaded, comics } = this.state;
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
        else
            return (
                <div className="ComicsList container">
                    <ul>
                        {comics.map((item,index) =>{
                            return (
                                <li key={item.id}>
                                    <Comics key={item.id} comics={item} isOpen = {this.state.openComics === item.id } openIt = { this.openIt.bind(this,item.id)} />
                                </li>
                            )})}

                    </ul>
                </div>
            )
    }
    openIt = openComics => this.setState({ openComics });
}
