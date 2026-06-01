class SharedNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="site-nav">
        <a href="/" class="nav-logo">
          <img src="cabimate.png" alt="CABIMATE Logo" class="logo-img">
        </a>

        <ul class="nav-links">
<li><a href="/product2">Collection</a></li>
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
        </ul>

        <a href="/contact" class="nav-cta">Shop with Trade Price</a>
      </nav>
    `;
  }
}

customElements.define('shared-navbar', SharedNavbar);