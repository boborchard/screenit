import React from 'react';
import axios from 'axios';
import {
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import StarRating from 'react-svg-star-rating'

const StyledFormGroup = styled.div.attrs({
  className: "flex items-center justify-between mb-6"
})`
  min-height: 4.5rem;
`;

const StyledLabel = styled.label.attrs({
  className: "font-semibold w-1/3 text-2xl leading-7"
})``;

const StyledTextField = styled.input.attrs({
  className: "flex items-center bg-white box-border text-2xl px-6 w-full focus:outline-none focus:shadow-outline rounded-lg font-light placeholder-brand-gray-dark placeholder-opacity-100 focus:placeholder-brand-gray"
})`
  height: 4.5rem;
  border: 1px solid #CCCCCC;
`;

const StyledSelectField = styled.select.attrs({
  className: "block appearance-none w-full bg-white border border-brand-gray box-border text-2xl px-6 rounded focus:outline-none focus:shadow-outline rounded-lg font-light placeholder-brand-gray-dark placeholder-opacity-100 focus:placeholder-brand-gray"
})`
  height: 4.5rem;
`;

const StyledButton = styled.button.attrs({
  className: "text-white box-border font-medium text-2xl text-center px-8 h-16 w-full rounded-lg bg-gradient-to-b from-brand-blue to-brand-blue-dark border border-brand-blue-dark mb-6 mr-4"
})`
  box-shadow: 0px 2px 4px rgba(97, 160, 255, 0.5), 0px 4px 8px rgba(97, 160, 255, 0.25);
`;

const StyledDeleteButton = styled.button.attrs({
  className: "text-white box-border font-medium text-2xl text-center px-8 h-16 w-full rounded-lg bg-gradient-to-b from-brand-red to-brand-red-dark border border-brand-red-dark mb-6"
})`
  box-shadow: 0px 2px 4px rgba(255, 68, 51, 0.5), 0px 4px 8px rgba(209, 58, 38, 0.25);
`;

class EditMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      rating: '',
      redirect: false
    };
    this.apiUrl = 'https://5fadd4f12ec98b0016048b4a.mockapi.io/api/v1/movies'
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnRatingSelect = this.handleOnRatingSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount(){
    axios.get(`${this.apiUrl}/${this.props.id}`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          avatar: res.data.avatar,
          category: res.data.category,
          rating: res.data.rating
        });
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleOnRatingSelect(rating) {
    const value = rating;
    const name = "rating";
    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    const movie = {
      name: this.state.name,
      category: this.state.category,
      rating: this.state.rating
    }
    axios.put(`${this.apiUrl}/${this.props.id}`, movie)
       .then((res) => {
          this.setState({ redirect: true });
       });
    event.preventDefault();
  }

  handleRemove(event) {
    console.log('Made it to the handleRemove function')
    axios.delete(`${this.apiUrl}/${this.props.id}`)
       .then((res) => {
          this.setState({ redirect: true });
       });
    event.preventDefault();
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }

    return (
      <section>
        <form className="flex flex-col p-10 pb-4" onSubmit={this.handleSubmit}>
          <StyledFormGroup>
            <StyledLabel>Name</StyledLabel>
            <div className="block relative w-full">
              <StyledTextField type="text" name="name" placeholder="Name of the movie" value={this.state.name} onChange={this.handleInputChange} />
            </div>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledLabel>Category</StyledLabel>
            <div className="block relative w-full">
              <StyledSelectField name="category" value={this.state.category} onChange={this.handleInputChange}>
                <option value="">Select a category</option>
                <option value="Action/Adventure">Action/Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
              </StyledSelectField>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 12L0.0717965 4.76837e-07L13.9282 4.76837e-07L7 12Z" fill="#CCCCCC"/>
                </svg>
              </div>
            </div>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledLabel>Rating</StyledLabel>
            <StarRating
              name="rating"
              containerClassName="flex flex-row items-center w-full justify-end"
              count={5}
              initialRating={this.state.rating}
              emptyColor="#CCCCCC"
              activeColor="#FFC93D"
              hoverColor="#FFC93D"
              outerRadius={45}
              innerRadius={25}
              size={32}
              handleOnClick={this.handleOnRatingSelect}
            />
          </StyledFormGroup>

          <div className="text-center">
            <div className="flex items-center">
              <StyledButton type="submit">Update Movie</StyledButton>
              <StyledDeleteButton onClick={ this.handleRemove }>Remove Movie</StyledDeleteButton>
            </div>
            <Link to="/" className="relative leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">Cancel and go back</Link>
          </div>
        </form>
      </section>
    );
  }
}

export default EditMovieForm;