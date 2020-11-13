import StarRating from 'react-svg-star-rating'

function AddMovieForm() {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" name="name" placeholder="Name of the movie" />
      </div>

      <div>
        <label>Category</label>
        <select name="category">
          <option value="">Select a category</option>
          <option value="action-adventure">Action/Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
        </select>
      </div>

      <div>
        <label>Rating</label>
        <StarRating
          name="rating"
          count={5}
          initialRating={0}
          emptyColor="#CCCCCC"
          activeColor="#FFC93D"
          hoverColor="#FFC93D"
          outerRadius={45}
          innerRadius={25}
          size={32}
        />
      </div>

      <div>
        <button>Add Movie</button>
      </div>
    </form>
  );
}

export default AddMovieForm;
