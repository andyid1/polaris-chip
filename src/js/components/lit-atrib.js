import { LitElement, html, css } from "lit";

class LitAtribut extends LitElement {

    static properties = {
        minPasswordLength: {
            type: Number,
        }

    }

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
          <input type="email" id="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" 
          minlength=${this.minPasswordLength}
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
