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

          <!-- Showrooms -->
          <div>
            <div class="footer-col-title">Showroom & Store</div>

            <div class="footer-location">
              <h4>Markham</h4>
              <p>Mon to Sat | 9:00 AM - 5:30 PM</p>
              <p>500 Esna Park Dr. Unit 1-4,<br>
              Markham, Ontario, L3R 1H5 Canada</p>
            </div>

            <div class="footer-location">
              <h4>Vaughan</h4>
              <p>Mon to Fri | 8:00 AM - 5:30 PM</p>
              <p>Sat | 9:00 AM - 5:30 PM</p>
              <p>65 Bowes Road, Unit 8,<br>
              Vaughan, Ontario, L4K 1H5 Canada</p>
            </div>

            <div class="footer-location">
              <h4>Mississauga</h4>
              <p>Mon to Sat | 9:00 AM - 5:30 PM</p>
              <p>1530 Drew Road, Unit 17-18,<br>
              Mississauga, Ontario, L5S 1W8 Canada</p>
            </div>

            <p class="footer-note">
              *Except public holidays
            </p>
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