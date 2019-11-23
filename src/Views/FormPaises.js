import React from "react";
import Axios from "axios";
import apibaseurl from "../apiconfig";
export default class FormPaises extends React.Component {
    state = {
        form: {
          codigoPostal: '',
          nombre: '',
          poblacionTotal: '',
          extensionTerritorial: '',
          pib: '',
        },
      };
  handleSubmit = e => {
    e.preventDefault();
    Axios.post(apibaseurl+"paises/",this.state.form).then(res=>{
        window.location = '/'
    })
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    
    return (
      <div className="container">
        <div className="row justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Codigo Postal</label>
              <input
              onChange={this.handleChange}
                className="form-control"
                type="number"
                min="0"
                max="999"
                name="codigoPostal"
                value={this.state.form.codigoPostal}
              />
            </div>
            <div className="form-group">
              <label>Nombre</label>
              <input
              onChange={this.handleChange}
                className="form-control"
                type="text"
                name="nombre"
                value={this.state.form.nombre}
              />
            </div>
            <div className="form-group">
              <label>poblacion Total</label>
              <input
              onChange={this.handleChange}
                className="form-control"
                type="number"
                name="poblacionTotal"
                value={this.state.form.poblacionTotal}
              />
            </div>
            <div className="form-group">
              <label>extension Territorial</label>
              <input
              onChange={this.handleChange}
                className="form-control"
                type="number"
                name="extensionTerritorial"
                value={this.state.form.extensionTerritorial}
              />
            </div>
            <div className="form-group">
              <label>PIB</label>
              <input
              onChange={this.handleChange}
                className="form-control"
                type="number"
                name="pib"
                value={this.state.form.pib}
              />
            </div>
            <button onClick={this.handleClick} className="btn btn-primary">
            Guardar Pais
          </button>
          </form>
        </div>
      </div>
    );
  }
}
