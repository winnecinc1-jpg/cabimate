class SharedFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-top">

          <!-- Brand -->
          <div>
            <div class="footer-brand">CAB<span>I</span>MATE</div>
            <p class="footer-tagline">
              Charm your cabinet. Define your space. Canadian cabinet hardware, crafted for distinction.
            </p>
            <span class="footer-badge">cabimatehardware.com</span>
          </div>

          <!-- Company -->
          <div>
            <div class="footer-col-title">Company</div>
            <ul class="footer-links">
              <li><a href="/about.html">About Cabimate</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/contact.html">Trade Program</a></li>
              <li><a href="/product2.html">Collections</a></li>
            </ul>
          </div>

<div>
  <div class="footer-col-title">Contact Us</div>

  <div class="footer-newsletter-heading">
    Email Us For<br>
    Business Inquiries
  </div>

  <p class="footer-newsletter-text">
    Whether you're a dealer, designer, contractor, or builder, our team is here to help with product recommendations, quotations, and project support.
  </p>

  <a href="mailto:sales@cabimatehardware.com" class="footer-contact-btn">
    Contact Our Team
  </a>
</div>
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