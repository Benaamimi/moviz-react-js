import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faVideo, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';
import { useState } from 'react';

function Movie(props) {
  // States
  const [personalNote, setPersonalNote] = useState(0);
  const [watchCount, setWatchCount] = useState(0);
  const [like, setLike] = useState(false);

  const stars = [];
  for (let i = 0; i < 10; i++) {
    let style = {};

    if (i < props.voteAverage - 1) {
      style = { color: '#f1c40f' };
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }

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

  const handleWatch = () => {
    setWatchCount(watchCount + 1);
  };
  let camStyle = { cursor: 'pointer' };
  if (watchCount > 0) {
    camStyle = { cursor: 'pointer', color: '#e74c3C' };
  }

  const handleLike = () => {
    setLike(!like);
  };
  let likeStyle = { cursor: 'pointer' };
  if (like) {
    likeStyle = { cursor: 'pointer', color: '#e74c3C' };
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.poster} alt="Poster" />
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.title}</span>
        <p className={styles.description}>{props.overview}</p>
        <div className={styles.voteContainer}>
          <span className={styles.vote}>
            {stars} ({props.voteCount})
          </span>
          <span className={styles.vote}>
            {personalStars} ({personalNote})
          </span>
          <span>
            <FontAwesomeIcon
              onClick={() => handleWatch()}
              icon={faVideo}
              style={camStyle}
            />
            ({watchCount})
          </span>
          <span>
            <FontAwesomeIcon
              onClick={() => handleLike()}
              icon={faHeart}
              style={likeStyle}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
