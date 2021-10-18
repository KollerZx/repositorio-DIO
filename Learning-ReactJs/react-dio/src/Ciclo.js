import React, {Component} from "react";

export class Ciclo extends Component{
    // //deprecated 17.0
    // componentWillMount(){
    // }
    // //deprecated 17.0
    // componentWillReceiveProps(){
    // }
    // //deprecated 17.0
    // componentWillUpdate(){
    // }

    state = {
        status: 'title',
    }
    componentDidMount(){
        const { posts, loading } = this.props
        console.log('componentDidMount', posts)
        console.log('componentDidMount: loading', loading)

    }
    componentDidUpdate(prevProps){
        const { loading } = this.props
        if(this.props.loading !== prevProps.loading){
            console.log('componentDidUpdate: loading', loading)
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount: Componente removido');
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.state.status !== nextState.status //|| nextProps.loading !== this.props.loading
        
    }

    status = () => {
        this.setState({
            status: true
        })
    }
    render(){
        const { posts } = this.props
        console.log('render', posts);
        return(
            <div>
                <button onClick={this.status}>Re-render</button>
                <h1>Ciclos de vida com Classes</h1>
            </div>
        )
    }


}