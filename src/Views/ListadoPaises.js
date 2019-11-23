import React from "react";
import Table from "react-bootstrap/Table";
import apibaseurl from "../apiconfig";
import axios from "axios";
export default class ListadoPaises extends React.Component {
  constructor() {
    super();
    this.state = {
      paises: []
    };
    this.obtenerPaises();
  }
  obtenerPaises = () => {
    axios.get(apibaseurl + "paises/").then(res => {
      this.setState({
        paises: JSON.parse(JSON.stringify(res.data))
      });
    });
  };
  deleteCountry = e=>{
    let request = {
      method: "DELETE",
      headers:{
          "Content-type":"application/json",
          "Accept":"application/json",
      },
      body: JSON.stringify({
          _id: e.target.value,
      }) 
  }

  fetch(apibaseurl+`paises/`, request)
      .then(res=>res.json())
      .then(res=>{
          this.obtenerPaises()
      })
      .catch(err=>{

      })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Codigo Postal</th>
                  <th>Nombre</th>
                  <th>Poblacion Total</th>
                  <th>Extension Territorial(KM)</th>
                  <th>PIB</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.paises.map(pais => {
                  return (
                    <tr key={pais._id}>
                      <td>{pais.codigoPostal}</td>
                      <td>{pais.nombre}</td>
                      <td>{pais.poblacionTotal}</td>
                      <td>{pais.extensionTerritorial.$numberDecimal}</td>
                      <td>{pais.pib.$numberDecimal}</td>
                      <td><button className="btn btn-danger" onClick={this.deleteCountry} value={pais._id}>Eliminar</button></td>
                      
                    </tr>
                  );
                })}
                
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
