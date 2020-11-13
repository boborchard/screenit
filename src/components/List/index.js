import React from 'react';
import axios from 'axios';
import ListItem from './ListItem'

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
    this.apiUrl = 'https://5fadd4f12ec98b0016048b4a.mockapi.io/api/v1/movies'
  }

  componentDidMount(){
    axios.get(this.apiUrl)
      .then((res) => {
        this.setState({data:res.data});
      });
  }

  render(){
    return (
      <section>
        {this.state.data.map((movie) => (
            <ListItem {...movie} />
          ))}
      </section>
    );
  }
}

export default List;
