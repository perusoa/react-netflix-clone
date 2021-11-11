import './FeaturedBanner.css';
import { useState, useEffect } from 'react';
import HTTP from '../../utils/http';
import movieRoutes from '../../utils/movieRoutes';
import _ from 'lodash';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import YouTube from 'react-youtube';
import Toast from '../common/Toast';

export default function FeaturedBanner () {
  const [movie, setMovie] = useState(null);
  const [trailerId, setTrailerId] = useState('');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData () {
      const { results: movies } = (await HTTP.get(movieRoutes.fetchNetflixOriginals.url)).data;
      const randomMovie = movies[_.random(0, movies.length - 1)];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  const handleGetVideos = async () => {
    const { results } = (await HTTP.get(`/tv/${movie.id}/videos`)).data;
    if (results.length === 0) {
      setIsError(true);
      return _.delay(() => setIsError(false), 3000);
    }
    setTrailerId(results[0].key);
    setIsVideoOpen(true);
  };

  const handleCloseModal = async () => {
    setIsVideoOpen(false);
  };

  const trailerOptions = {
    playerVars: {
      autoplay: 1,
      playsinline: 1,
      modestbranding: 1
    }
  };

  const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '6px solid #000',
    boxShadow: 24,
    width: '100%',
    maxWidth: '600px',
    '&::after': {
      content: '""',
      display: 'block',
      paddingBottom: '56.25%'
    }
  };

  return (
    <>
      {movie && (
        <div className="c-featured-banner" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}>
          <div className="c-featured-banner__content">
            <h1 className="c-featured-banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
            <div className="c-featured-banner__buttons">
              <Button onClick={handleGetVideos} className="c-featured-banner__button" variant="contained" size="large">Play</Button>
              <Button className="c-featured-banner__button" variant="contained" size="large">Add To My List</Button>
            </div>
            <p className="c-featured-banner__overview">{movie.overview}</p>
            <p className="c-featured-banner__rating">Rating: {movie.vote_average}/10</p>
          </div>
          <Modal open={isVideoOpen} onBackdropClick={handleCloseModal}>
            <Box sx={boxStyles}>
              <YouTube className="c-featured-banner__trailer" videoId={trailerId} opts={trailerOptions} onEnd={handleCloseModal} />
            </Box>
          </Modal>
          <Toast isOpen={isError} severity="error" title="Error" message="Sorry, there is no trailer available for this tv/movie!" />
        </div>
      )}
    </>
  );
}