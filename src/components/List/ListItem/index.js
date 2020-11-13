import Avatar from 'react-avatar';
import StarRating from 'react-svg-star-rating';

function ListItem(movie) {
  return (
    <div className="flex items-center justify-items-stretch px-10 py-8 border-t border-gray w-full">
      <Avatar
        name={movie.name.replace(/[^a-zA-Z ]/g, "")}
        src={movie.avatar}
        round={true}
        color="#61A0FF"
        maxInitials={3}
        size={64}
        textSizeRatio={2.5}
        textMarginRatio={.2}
      />
      <div className="flex-shrink pl-6 w-3/5 pr-6">
        <h2 className="font-medium text-2xl truncate w-full max-w-full">{movie.name}</h2>
        <p className="text-brand-gray-dark">{movie.category}</p>
      </div>
      <div className="flex-1">
        <StarRating
          name="rating"
          containerClassName="flex flex-row items-center w-full justify-end"
          count={5}
          initialRating={movie.rating}
          isReadOnly="true"
          emptyColor="#CCCCCC"
          activeColor="#FFC93D"
          hoverColor="#FFC93D"
          outerRadius={45}
          innerRadius={25}
          size={32}
        />
      </div>
    </div>
  );
}

export default ListItem;
