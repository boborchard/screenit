import ListItem from './ListItem'

const movies = [
{
  name: "Death Becomes Her",
  category: "Comedy",
  rating: "3",
},
{
  name: "Ghostbusters",
  category: "Comedy",
  rating: "5",
  // avatar: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/di9t2YVpWDKuUtYkrm10yVld50x.jpg"
},
{
  name: "Harry Potter - Sorcerer's Stone",
  category: "Drama",
  rating: "4",
},
{
  name: "Jurassic Park",
  category: "Action/Adventure",
  rating: "4",
  // avatar: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9i3plLl89DHMz7mahksDaAo7HIS.jpg"
},
{
  name: "The Sandlot",
  category: "Comedy",
  rating: "4",
  // avatar: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dQkE6saKpkBxKsuGG2bU3CXQwMX.jpg"
}]

function List() {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
          <ListItem {...movie} />
        ))}
    </div>
  );
}

export default List;
