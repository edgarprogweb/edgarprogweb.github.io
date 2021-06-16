class Footer
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Méndez Villa Edgar
      </p>`;
  }
}

customElements.define(
  "footer", MiFooter);
