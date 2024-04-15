import ListS from './ListS';

function Siswa() {
  const nama= ['tinky', 'lala', 'poo'];
  return (
      <div className="App">
          <ListS judul={nama}/>
      </div>
    );
  }
  
  export default Siswa;