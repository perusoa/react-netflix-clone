import './App.css';
import NavBar from './components/common/NavBar';
import FeaturedBanner from './components/FeaturedBanner/FeaturedBanner';
import MovieRow from './components/movie/MovieRow';
import movieRoutes from './utils/movieRoutes';
import _ from 'lodash';

export default function App () {
  const movieCategories = _.orderBy(movieRoutes, ['order'], ['asc']);
  return (
    <div className="App">
      <NavBar />
      <FeaturedBanner />
      {movieCategories.map(({category, type, url}) => {
        return <MovieRow key={category} category={category} type={type} url={url} />;
      })}
    </div>
  );
}
