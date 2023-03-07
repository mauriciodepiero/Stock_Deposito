import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <section>
      <nav className="navbar navbar-expand-md main_menu drop_down right fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><img src={logonav2} width="200px" className="img-fluid" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navhover navbar-nav text-center fontnav">
              {/* Para que vuelva al tamaño original de cada item debo poner la clase "fs-5" al lado del text white */}
              <li className="nav-item sombra">
                <Link to="/" className="nav-link active text-white" aria-current="page">HOME</Link>
              </li> &emsp;&emsp;
              <li className="nav-item sombra">
                <Link to="/proyecto" className="nav-link active text-white">PROYECTOS</Link>
              </li> &emsp;&emsp;
              <li className="nav-item sombra">
                <Link to="/elestudio" className="nav-link active text-white">EL ESTUDIO</Link>
              </li> &emsp;&emsp;
              <li className="nav-item sombra">
                <Link to="/contacto" className="nav-link active text-white">CONTACTO</Link>
              </li> &emsp;&emsp;
            </ul>
            <div className="col-md-1 text-end">
              <button type="button" className="btn btn-outline-light me-4">
                <Link to="/login" className="nav-link active" href="#">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

    </section>
  )
}

export default Navbar;
