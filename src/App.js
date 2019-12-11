import React from 'react';
import './App.css';
import Logo from './images/logo.png'
import Loader from './componets/Loader'
import CharacterCard from './componets/CharacterCard'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nextPage: 1,
      loading: true, 
      error: null,
      data: {
        results: []
      }
    }
  }
  componentDidMount(){
    this.fetchCharacter()
  }
  handleGetmore(){
    
  }
  fetchCharacter = async () => {
    this.setState({
      loading:true,
    })
    try{
      let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`)
      let data = await response.json()
        this.setState({
          loading: false,
          data: {
            info: data.info,
            results: [].concat(this.state.data.results, data.results)
          },
          nextPage: this.state.nextPage + 1,
        }) 
    }
    catch(error){
      this.setState({
        loading:false,
        error: error
      })
    }
  }
  render(){
    if(this.state.error){
      return this.state.error
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="row center-md">
            <div className="col-md-12 ">
               <img src={Logo} alt="rick and morty"/>
               <ul className="row">
                   {this.state.data.results.map(character => (
                      <li className="col-sm-6 col-md-3" style={{listStyle:'none'}}key={character.id}>
                        <CharacterCard character={character}/>
                      </li>
                   ))}
               </ul>
               {this.state.loading && (
                <div className="loader">
                  <Loader />
                </div>
              )}
              {!this.state.loading && (
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-success" onClick={() => this.fetchCharacter()}>Get more</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
