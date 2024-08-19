import { LitElement, html, css, nothing } from "lit";

class ReactPro extends LitElement {
  static properties = {
    name: {
      // type: Boolean, perubahan sebelumnya
      
      type: String,
   
    converter: {
      fromAttribute(value, type) {
        console.log('fromAttribute');

        if (value) {
          return type(value).toLowerCase();
        }
        return value;
      },
      toAttribute(value, type) {
        console.log('toAttribute');

        return String(value).toUpperCase();
      },
    },
  },

};

render() {
  let template;
  if (this.name) {
    template = html`
        <p>Selamat datang, ${this.name}</p>
        <p>
          <button @click=${this._logout}>Keluar</button>
        </p>
      `;
  } else {
    template = html`
        <p>Selamat datang, ${this.name}</p>
        <p>
          <button @click=${this._login}>Masuk</button>
        </p>
      `;
  }

  return template;
}

_login() {
  this.name = 'John Doe';
}
_logout() {
  this.name = null;
}
}

customElements.define('react-pro', ReactPro)