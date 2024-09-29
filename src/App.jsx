import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const data = useFetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=roja`)
  // (`https://www.omdbapi.com/?apikey=fa1c9c03&t=${moviename}`)
  console.log(data);
  return (
    <>
      <div className='bg-primary'>
        <h1 className='text-center text-light py-3 mb-5'>Movie Search</h1>
      </div>

      {/* searchbar */}
      <div className="d-flex justify-content-center">
        <div className="d-flex w-75">
          <input type="text" placeholder="Movie Name" className="form-control" id="input" />
          <button className="btn btn-primary ms-1 px-3"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>

      {/* body */}
      <div className="card mb-3 py-3 mt-5 mx-auto" style={{ width: '70%', backgroundColor: 'whitesmoke' }}>
        <div className="row g-0">
          <h3 className='ms-3'>Title</h3>
          <h6 className='ms-3 '>Year . Language</h6>
          <div className="col-md-3 p-3 ">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSOTwZcIfUCGKc-TpN0SlavOLb_fP5NZULw&s" className="img-fluid rounded" alt="..." />


          </div>
          <div className="col-md-9 ">
            <div className="card-body">
              <ul className="list-group list-group-flush border rounded">
                <li className="list-group-item">Genre :</li>
                <li className="list-group-item">Director : </li>
                <li className="list-group-item">Writer :</li>
                <li className="list-group-item">Stars : </li>
                <li className="list-group-item">Awards :</li>
                <li className="list-group-item">IMDB Rating :</li>
              </ul>
            </div>
          </div>
        </div>
        <p className='ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime ullam omnis libero itaque maiores cupiditate deleniti debitis iusto aspernatur veniam ex, vero magni veritatis dicta minima autem dolorem nulla?</p>
      </div>
    </>
  )
}

export default App
