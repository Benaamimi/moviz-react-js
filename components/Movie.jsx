import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';
import {useState} from 'react'




export default function movie(props) {

  // const [personnalNote, setPersonnalNote] = useState(0);

  // setPersonnalNote(i+1)



  const stars = [];
  for (let i = 0; i < 10; i++) {
    let style ={};
    if (i < props.vote_average - 1){
      style = {color:'#f1c40f' }
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }


//rating
const [personalNote, setPersonalNote] = useState(0);
const personalStars = [];
  
for (let i = 0; i < 10; i++) {
  let starStyle = { cursor: 'pointer' };

  if (i < personalNote) {
    starStyle = { cursor: 'pointer', color: '#2196f3' };
  }
  personalStars.push(
    <FontAwesomeIcon
      key={i}
      icon={faStar}
      onClick={() => setPersonalNote(i + 1)}
      style={starStyle}
    />
  );
}

//video
  const [watchCount, setWatchCount] = useState(0);
  const handleWatch = () => {
    setWatchCount(watchCount + 1)
  }
  const video = [];
  let style ={};
  if (watchCount == 0){
    style = {color:'rgba(0, 0, 0, 0.195)' }
  }
  video.push(<FontAwesomeIcon icon={faVideo} style={style}  />);
  

//heart
  const [like, setLike] = useState(false);
  const handleClick = () => {
  setLike(!like)
  }
  const heart = [];
  let heartStyle ={} = {color: 'rgba(0, 0, 0, 0.195)',  cursor: 'pointer'};
  // heartStyle = {color: 'rgba(0, 0, 0, 0.195)'}

  if (like === true){
    heartStyle = {color:'#e74c3c'}
  }


  console.log(like);
  
  return (
    <div className={styles.card}>
      
            <img src={"https://image.tmdb.org/t/p/w500"+ props.poster_path} alt= {props.title} />

            <div className={styles.content}>

                <h3>{props.title}</h3>

                <h4> <span className={styles.vote}>{stars}</span> {props.vote_average}</h4>

                <h4><span className={styles.personalNote}>{personalStars}</span> {personalNote}</h4>
                {/* <span className={styles.personalNote}>{personnalStars}</span> */}

                <h4> <span onClick={() => handleWatch()} className={styles.video}>{video}</span> {watchCount}</h4>

                {/* <h4> <span onClick={() => handleClick()} className={styles.heart}>{heart}</span> </h4> */}
                <span><FontAwesomeIcon onClick={() => handleClick()} icon={faHeart} className={styles.heartStyle} style={heartStyle}/> {heart}</span>
          


                <h4>{props.vote_count} <span className={styles.votes}>(votes)</span></h4>

                <p>{props.overview}</p>

            </div>
    </div>
  )
}



