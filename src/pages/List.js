import Header from '../components/Header';
import ListMovies from '../components/List';
import FloatingAddButton from '../components/FloatingAddButton';

function List() {
  return (
    <>
      <Header active="list" />
      <ListMovies />
      <FloatingAddButton />
    </>
  );
}

export default List;
