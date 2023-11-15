import { css } from "lit-element";

export default css`
.form-container {
    display: flex;
    justify-content: flex-start; /* Centrar el formulario al lado izquierdo */
    align-items: center; /* Centrar verticalmente */
    height: 50vh; /* Altura del 100% de la ventana */
    width: 90%; /* Ocupar el 50% del ancho de la ventana */
  }
  
  .table-container {
    float: right; /* Mover la tabla al lado derecho */
    width: 30%;
    height: 30vh; /* Altura del 50% de la ventana */
  }
  .container {
    display: flex;
    align-items: center; /* Centrar verticalmente el contenido */
  }
  
  .form-container {
    flex: 1; /* Ocupa el espacio restante del contenedor */
    /* Resto de estilos... */
  }

  .form-group {
    margin: 10px;
    
  }

  .table {
    width: 100%;
  }

  .btn-registrar {
    border-radius: 10px;
  }

  .mensaje {
    color: #008000; /* Color verde para el mensaje de éxito */
  }
  
  `;