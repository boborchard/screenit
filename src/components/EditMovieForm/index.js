import React, { useState, useEffect } from 'react';
import {
  Link,
  Redirect
} from "react-router-dom";
import {
  getMovie,
  updateMovie,
  removeMovie
} from '../../api/MovieAPI'
import {
  UIFormGroup,
  UILabel,
  UITextField,
  UISelectField,
  UIButton,
  UIButtonDelete
} from '../StyleGuide'
import StarRating from 'react-svg-star-rating'

const EditMovieForm = (props) => {
  const { id } = props;

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    const data = {
      name: name,
      category: category,
      rating: rating,
      avatar: avatar
    }
    updateMovie(id, data, () => setRedirect(true));
    event.preventDefault();
  };

  const handleRemove = (event) => {
    removeMovie(id, () => setRedirect(true));
    event.preventDefault();
  };

  useEffect(() => {
    const onSuccess = (res) => {
      setName(res.data.name);
      setCategory(res.data.category);
      setRating(res.data.rating);
      setAvatar(res.data.avatar);
    }

    getMovie(id, onSuccess);
  }, []);

  if (redirect) {
    return <Redirect to='/'/>;
  }

  return (
    <section>
      <form className="flex flex-col p-10 pb-4" onSubmit={handleSubmit}>
        <UIFormGroup>
          <UILabel>Name</UILabel>
          <div className="block relative w-full">
            <UITextField
              type="text"
              name="name"
              placeholder="Name of the movie"
              value={name}
              onChange={(event) => setName(event.target.value)} />
          </div>
        </UIFormGroup>

        <UIFormGroup>
          <UILabel>Category</UILabel>
          <div className="block relative w-full">
            <UISelectField
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}>
              <option value="">Select a category</option>
              <option value="Action/Adventure">Action/Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
            </UISelectField>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12L0.0717965 4.76837e-07L13.9282 4.76837e-07L7 12Z" fill="#CCCCCC"/>
              </svg>
            </div>
          </div>
        </UIFormGroup>

        <UIFormGroup>
          <UILabel>Rating</UILabel>
          <StarRating
            name="rating"
            containerClassName="flex flex-row items-center w-full justify-end"
            count={5}
            initialRating={rating}
            emptyColor="#CCCCCC"
            activeColor="#FFC93D"
            hoverColor="#FFC93D"
            outerRadius={45}
            innerRadius={25}
            size={32}
            handleOnClick={(rating) => setRating(rating)}
          />
        </UIFormGroup>

        <div className="text-center">
          <div className="flex items-center">
            <UIButton type="submit">Update Movie</UIButton>
            <UIButtonDelete onClick={ handleRemove }>Remove Movie</UIButtonDelete>
          </div>
          <Link to="/" className="relative leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">Cancel and go back</Link>
        </div>
      </form>
    </section>
  );
}

export default EditMovieForm;
