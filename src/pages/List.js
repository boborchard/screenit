import React from 'react';
import Header from '../components/Header';
import ListMovies from '../components/List';
import FloatingAddButton from '../components/FloatingAddButton';

const List = () => (
  <>
    <Header active="list" />
    <ListMovies />
    <FloatingAddButton />
  </>
);

export default List;
