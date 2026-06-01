class SharedNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="site-nav">
        <a href="index.html" class="nav-logo">
          <img src="cabimate.png" alt="CABIMATE Logo" class="logo-img">
        </a>

        <ul class="nav-links">
          <li><a href="shop.html">Collection</a></li>
          <li><a href="index.html#finishes">Finishes</a></li>
          <li><a href="index.html#kitchen">Kitchen</a></li>
          <li><a href="index.html#shower">Shower</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="#">DesignLab</a></li>
        </ul>

        <a href="shop.html#series" class="nav-cta">Shop Now</a>
      </nav>
    `;
  }
}

// Register the custom element
customElements.define('shared-navbar', SharedNavbar);