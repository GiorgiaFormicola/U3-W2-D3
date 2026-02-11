import AccountNavbar from "./AccountNavbar";
import MovieDetailsMain from "./MovieDetailsMain";
import { useParams } from "react-router-dom";

const MovieDetails = function () {
  const selectedFilmID = useParams().movieID;
  return (
    <>
      <div className="vh-100 d-flex flex-column">
        <AccountNavbar></AccountNavbar>
        <MovieDetailsMain filmID={selectedFilmID}></MovieDetailsMain>
      </div>
    </>
  );
};

export default MovieDetails;
