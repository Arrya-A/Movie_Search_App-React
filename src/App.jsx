import { useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const [movie, setMovie] = useState('');
  const [searchMovie, setSearchMovie] = useState(''); // New state for the searched movie
  const [showDetails, setShowDetails] = useState(false);

  const data = useFetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${searchMovie}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie) {
      // console.log(movie);

      setSearchMovie(movie); //to update search movie

      setShowDetails(true); //to show details only after clicking search
    }
  }

  return (
    <>
      {/* header */}
      <div className='bg-primary'>
        <h1 className='text-center text-light py-3 mb-5'>CineSearch <span className='fs-2 ms-1'><i className="fa-solid fa-clapperboard"></i></span></h1>
      </div>


      {/* Search bar */}
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <div className="d-flex w-75">
            <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} placeholder="Movie Name" className="form-control" />
            <button type='submit' className="btn btn-primary ms-1 px-3">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </form>


      {/*Error Messages */}
      {data.Response === "False" && showDetails && (
        <div className="text-center text-danger p-5">
          <h2 className='fw-bold'>Movie not found</h2>
        </div>
      )}


      {/* Body */}
      {showDetails && data && data.Response !== "False" && (
        <div className="card mb-3 py-3 mt-5 mx-auto" style={{ width: '70%', backgroundColor: 'light-blue' }}>
          <div className="row g-0">
            <h3 className='ms-3'>{data.Title}</h3>
            <h6 className='ms-3'>{data.Year} . {data.Language}</h6>
            <div className="col-md-3 p-3">
              <img src={data.Poster} className="img-fluid rounded" alt={data.Title} />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <ul className="list-group list-group-flush border rounded">
                  <li className="list-group-item"><span className='fw-bold'>Genre :</span> {data.Genre}</li>
                  <li className="list-group-item"><span className='fw-bold'>Director :</span> {data.Director}</li>
                  <li className="list-group-item"><span className='fw-bold'>Writer :</span> {data.Writer}</li>
                  <li className="list-group-item"><span className='fw-bold'>Stars :</span> {data.Actors}</li>
                  <li className="list-group-item"><span className='fw-bold'>Awards :</span> {data.Awards}</li>
                  <li className="list-group-item"><span className='fw-bold'>IMDB Rating :</span> {data.imdbRating}</li>
                </ul>
              </div>
              <p className='ms-3'><span className='fw-bold'>Plot :</span> {data.Plot}</p>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}

export default App;
