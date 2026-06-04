class SharedFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-top">
          <div>
            <div class="footer-brand">CAB<span>I</span>MATE</div>
            <p class="footer-tagline">
              Charm your cabinet. Define your space. Canadian cabinet hardware, crafted for distinction.
            </p>
            <span class="footer-badge">cabimatehardware.com</span>
          </div>

          <div>
            <div class="footer-col-title">Collection</div>
            <ul class="footer-links">
              <li><a href="/product2.html">Series 11</a></li>
              <li><a href="/product2.html">Kitchen Handles</a></li>
              <li><a href="/product2.html">Shower Hardware</a></li>
              <li><a href="/product2.html">Knobs & Pulls</a></li>
              <li><a href="/product2.html">Bar Handles</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Finishes</div>
            <ul class="footer-links">
              <li><a href="/product2.html">Matte Black</a></li>
              <li><a href="/product2.html">Polished Chrome</a></li>
              <li><a href="/product2.html">Brushed Nickel</a></li>
              <li><a href="/product2.html">Antique Brass</a></li>
              <li><a href="/product2.html">Rose Gold</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Company</div>
            <ul class="footer-links">
              <li><a href="/about.html">About Cabimate</a></li>
              <li><a href="/contact.html">Dealer Locator</a></li>
              <li><a href="/contact.html">Trade Program</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/catalogue.html">Catalogue</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 Cabimate Hardware. All rights reserved.</span>
          <span class="footer-country">CANADIAN CABINET HARDWARE</span>
        </div>
      </footer>
    `;
  }
}

customElements.define("shared-footer", SharedFooter);