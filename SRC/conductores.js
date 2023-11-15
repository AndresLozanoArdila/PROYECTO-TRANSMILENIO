import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';
import stylesScss from './conductoresStyle';

class Conductores extends LitElement {
  static get properties() {
    return {
      // Referencia al menú desplegable
      menu: { type: Object },
      // Referencia al contenido de la página
      contenido: { type: Object },
    };
  }

  constructor() {
    super();

    // Obtenemos una referencia al menú desplegable
    this.menu = document.querySelector('.menu');

    // Obtenemos una referencia al contenido de la página
    this.contenido = document.querySelector('.contenido');
  }

  static get styles() {
    return [stylesScss];
  }


  render() {
    return html`
         <h1>Conductores</h1>


  <main>
    <section class="menu">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Lista de conductores</a></li>
        <li><a href="#">Agregar conductor</a></li>
        <li><a href="#">Editar conductor</a></li>
        <li><a href="#">Eliminar conductor</a></li>
      </ul>
    </section>

    <section class="contenido">
      <h2>Lista de conductores</h2>
      <ul>
        ${this.conductores.map((conductor) => html`
          <li>
            <h3>${conductor.nombre}</h3>
            <p>${conductor.apellido}</p>
            <p>${conductor.licencia}</p>
          </li>
        `)}
      </ul>
    </section>
  </main>
<br>
  <footer>
    <p>Copyright &copy; 2023</p>
  </footer>
    `;
  }
}

customElements.define('conductores', Conductores);
