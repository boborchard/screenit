import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import EditMovieForm from '../components/EditMovieForm';

function Edit() {

  const { id } = useParams()

  return (
    <>
      <Header />
      <EditMovieForm id={id} />
    </>
  );
}

export default Edit;
