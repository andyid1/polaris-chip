import { LitElement, html, css, nothing } from "lit";

class ReactPro extends LitElement {
  static properties = {
    name: {
        type: Boolean,
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

customElements. define('react-pro', ReactPro)