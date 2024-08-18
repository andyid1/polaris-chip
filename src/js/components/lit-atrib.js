import { LitElement, html, css, nothing } from "lit";

class LitAtribut extends LitElement {
  static properties = {
    minPasswordLength: {
      type: Number,
    },
    freeze: {
      type: Boolean,
    },
    withPlaceholder: {
      type: Boolean,
    },
  };

  constructor() {
    super();

    this.minPasswordLength = 8;
  }

  static styles = css`
    form > div {
      margin-block-end: 8px;
    }

    label,
    input {
      display: block;
    }
  `;


  render() {
    return html`
      <form>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" 
          ?readonly=${this.freeze}
          placeholder=${this.withPlaceholder ? 'Masukkan email' : nothing}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            ?readonly=${this.freeze}
            minlength=${this.minPasswordLength}
            placeholder=${this.withPlaceholder ? 
            "Masukkan password" : nothing}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    `;
  }
}

customElements.define("lit-atribut", LitAtribut);
