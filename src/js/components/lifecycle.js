import { html, LitElement } from "lit";

class MyLifeElement extends LitElement {
  static properties = {
    namel: {
      type: String,
      hasChanged(newVal, oldVal) {
        console.log("namel: hasChanged");
        return newVal !== oldVal;
      },
    },
    age: {
      type: Number,
      hasChanged(newVal, oldVal) {
        console.log("age: hasChanged");
        return newVal !== oldVal;
      },
    },
  };

  constructor() {
    super();
    console.log("constructor");

    this.namel = "John Doe";
    this.age = 30;
  }

  // Pra update
  requestUpdate(namel, oldValue, options) {
    console.log("requestUpdate");
    super.requestUpdate(namel, oldValue, options);
  }

  // Updating
  performUpdate() {
    console.log("performUpdate");
    return super.performUpdate();
  }

  shouldUpdate(_changedProperties) {
    console.log("shouldUpdate");
    console.log(_changedProperties);
    return _changedProperties.has('age');
  }

  willUpdate(_changedProperties) {
    console.log("willUpdate");
    super.willUpdate(_changedProperties);
  }

  update(changedProperties) {
    console.log("update");
    super.update(changedProperties);
  }

  render() {
    console.log("render");
    return html`
      <p>Selamat Datang!</p>
      <p>${this.namel}, ${this.age}</p>
    <button @click=${() => this.requestUpdate()}>

      Tombol
    </button>
    `;
  }

  // Post Update
  firstUpdated(_changedProperties) {
    console.log("firstUpdated");
    super.firstUpdated(_changedProperties);
  }

  updated(_changedProperties) {
    console.log("updated");
    super.updated(_changedProperties);
  }


}

customElements.define("life-cycle", MyLifeElement);
