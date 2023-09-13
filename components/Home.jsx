import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Movie from './Movie';

 

function Home() {
  const[moviesData, setMoviesData] = useState([]);

  const TMDB_API_KEY = '4d118c1be0429c6b9bffd72711e39ee6';

    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
      .then((response)=>response.json())


      .then((data)=> {
        const formatedData = data.result.map((movie, i)=>{
          const poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
          const overview = movie.overview;
          if(movie.lenght > 250){
            overview.overview.slice(0, 250) + '...';
          }
          return{
            poster,
            overview,
            title: movie.vote_average
          }
        })
        setMoviesData(data.results);
      })


    }, []);
    
  

  const movies = moviesData.map((movie, i)=>{
    return < Movie key={i} {...movie} />
  })

  return (
    <div>
        <header className={styles.header}>
            <h1 className={styles.logo} > 
                <img className={styles.logoimg} src="/img/logo.png" alt="logo" /> 
                <img className={styles.logoletter} src="/img/logoletter.png" alt="logo" />
            </h1>
        </header>
        <div class={styles.body}>
          <div className={styles.title}>LAST RELEASES</div>
          <div className={styles.cards}>{movies}</div>
        </div>
    </div>
  )
}

export default Home

