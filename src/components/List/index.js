import React, { useState, useEffect } from 'react';
import {
  getAllMovies
} from '../../api/MovieAPI'
import ListItem from './ListItem'

const List = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const onSuccess = (res) => {
      setData(res.data);
    }

    getAllMovies(onSuccess);
  }, []);

  return (
      <section>
        {
          data
            .sort((a, b) => a.rating < b.rating ? 1 : -1)
            .map((movie, index) => (
              <ListItem key={index} {...movie} />
            ))
        }
      </section>
    );
}

export default List
