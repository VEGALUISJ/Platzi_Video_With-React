import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>What movie do you want watch today?</h2>
    <input className='input' type='text' placeholder='Search...' />
  </section>
);

export default Search;
