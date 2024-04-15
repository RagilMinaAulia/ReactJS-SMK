function ListS(props) {
  const siswa= props.judul.map(
    (item,a) => <li key={a}>{item}</li>
  );
  return (
      <div className="App">
          {/* <h1>{props.judul[2]}</h1> */}
          <ul>
            {siswa}
          </ul>
      </div>
    );
  }
  
  export default ListS;