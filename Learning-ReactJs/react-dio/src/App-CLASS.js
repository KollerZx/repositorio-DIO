import React, {Component} from 'react'
import { Ciclo } from './Ciclo'

class App extends Component{
  state={
    loading: false,
    actived:true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }
  render(){
    const posts = [{
      title:'foo',
      description:'bar'
    }, 
    {
      title:'bar',
      description:'foo'
    }
  ]
    
    return(
      <div>
        <button onClick={this.onRemove}>Remover Componente</button>
        {this.state.actived && (
          <Ciclo posts={ posts } loading={this.state.loading}/>
        )}
        
        </div>
    )
    
  } 
    
}
export default App