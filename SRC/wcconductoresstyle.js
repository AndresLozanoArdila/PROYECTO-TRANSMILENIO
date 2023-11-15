import { css } from "lit-element";

export default css`
/* Estilos para centrar el formulario */
:host {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Estilos personalizados para el formulario */
form {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  text-align: center;
}

/* Estilos para los campos de entrada y botones */
.form-group input,
.form-group button,
.form-group select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

/* Estilos para los botones */
.btn {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

/* Lista de conductores y rutas */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

/* Estilos para los botones */
.form-group button {
  background-color: #4CAF50; /* Verde por defecto */
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-group button:hover {
  background-color: #45a049; /* Cambia de color al pasar el ratón por encima */
}

/* En tu archivo CSS o SCSS */
.small-input {
  width: 150px; /* Ancho deseado para las cajas de texto */
  height: 30px; /* Altura deseada para las cajas de texto */
}

.small-button {
  padding: 5px 10px; /* Relleno deseado para los botones */
  font-size: 14px; /* Tamaño de fuente deseado para los botones */
  border-radius: 20px; /* Bordes redondeados para los botones */
  background-color: green; /* Color de fondo al descansar */
  color: white; /* Color de texto al descansar */
}

.small-button:hover {
  background-color: blue; /* Color de fondo al pasar el ratón por encima */
}

  `;