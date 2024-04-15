function Tabel(props) {
    const menus= props.menu;
    const title= props.title;
    return (
      <div className="App">
          <h1>{title}</h1>
          <div>
            <table class="table table-bordered">
                <thead class="table-dark">
                    <tr>
                        <th>Menu</th>
                        <th>Harga</th>
                    </tr>
                </thead>
            
            
            {menus.map((data) => (
                <thead class="table-light">
                    <tr key= {data.idmenu}>
                        <td>{data.menu}</td>
                        <td>{data.harga}</td>
                    </tr>
                </thead>
            ))}
            </table>
          </div>
      </div>
    );
  }
  
  export default Tabel;