import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setLoading(false);
    console.log(json);
    setMovies(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>{movies.title}</h2>
          <img src={movies.medium_cover_image} alt={movies.title} />
          <p>{movies.summary}</p>
          <p>
            <b>genres: </b>
            {movies.genres}
          </p>
          <p>
            <b>year: </b>
            {movies.year}
          </p>
          <p>
            <b>rating: </b>
            {movies.rating}
          </p>
          <p>
            <b>runtime: </b>
            {movies.runtime} (min)
          </p>
          <p>
            <b>like_count: </b>
            {movies.like_count}
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
