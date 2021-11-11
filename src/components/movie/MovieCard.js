import './MovieCard.css';
import { useState } from 'react';
import HTTP from '../../utils/http';
import YouTube from 'react-youtube';
import Toast from '../common/Toast';
import _ from 'lodash';

export default function MovieCard ({ movie, type }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [trailerId, setTrailerId] = useState('');
  const [isError, setIsError] = useState(false);

  const handleGetVideos = async () => {
    const { results } = (await HTTP.get(`/${movie.media_type || type}/${movie.id}/videos`)).data;
    if (results.length === 0) {
      setIsError(true);
      return _.delay(() => setIsError(false), 3000);
    }
    setIsExpanded(!isExpanded);
    setTrailerId(results[0].key);
  }

  const collapseTrailer = () => {
    setIsExpanded(false);
  };

  const trailerOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1
    }
  };

  const movieCardStyles= {
    backgroundImage: `url('https://image.tmdb.org/t/p/w342${movie.poster_path}')`
  };

  const movieCardClasses = `c-movie-card ${isExpanded ? 'c-movie-card--expanded' : ''}`;
  return (
    <div onClick={handleGetVideos} className={movieCardClasses}>
      <div className="c-movie-card__poster" style={movieCardStyles}></div>
      {isExpanded && <YouTube className="c-movie-card__trailer" videoId={trailerId} opts={trailerOptions} onEnd={collapseTrailer} />}
      <Toast isOpen={isError} severity="error" title="Error" message="Sorry, there is no trailer available for this tv/movie!" />
    </div>
  );
}