import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div id="site-wrapper">
    <header>
      <article class="top">
        <div class="container">
          <div class="row">
            <div class="col s12 m4">
              <div class="logo">
                <a href="https://abacusdesk.com">
                  <img
                    src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-logos/abacus-white/abacus-full.png"
                    alt="Abacus Desk"
                  />
                </a>

                <a href="https://abacusdesk.com">
                  <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-logos/abacus-normal/abacus-full.png" />
                </a>
              </div>
              {/* <button class="main-menu-button" style="display: none;">
                <i class="fa fa-bars"></i>
              </button> */}
            </div>
            <div class="col s12 m8">
              <div class="main-menu">
                <ul class="tabs">
                  <li class="tab">
                    <a href="#capabilities" onclick="addBodyClass(this)">
                      Capabilities <i class="fa fa-chevron-down"></i>
                    </a>
                  </li>

                  <li class="tab">
                    <a href="#about-mega" onclick="addBodyClass(this)">
                      About <i class="fa fa-chevron-down"></i>
                    </a>
                  </li>
                  <li class="tab">
                    <a href="#support-mega" onclick="addBodyClass(this)">
                      Support <i class="fa fa-chevron-down"></i>
                    </a>
                  </li>
                  <li class="cross-itemm onhover">
                    <a href="#">Work</a>
                  </li>
                  <li class="cross-itemm onhover">
                    <a href="#">Insights</a>
                  </li>
                  <li class="cross-itemm onhover">
                    <a href="#">Career</a>
                  </li>
                  <li class="cross-itemm onhover">
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <div class="icon search">
                  <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/search/Shape.png" />
                </div>
              </div>
            </div>
            <div class="open-search">
              <div class="close-search">
                <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" />
              </div>
              <div class="search-here">
                <div class="input-here">
                  <form
                    role="search"
                    method="get"
                    class="search-form"
                    action="https://abacusdesk.com/"
                  >
                    <label for="search-form-5f19d23e70f38">
                      <span class="screen-reader-text">Search for:</span>
                    </label>
                    <input
                      type="search"
                      id="search-form-5f19d23e70f38"
                      class="search-field"
                      placeholder="Search &hellip;"
                      value=""
                      name="s"
                    />
                    <button type="submit" class="search-submit">
                      <span class="screen-reader-text">Search</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="menu-main-div" id="capabilities">
        <div class="container">
          <div class="row">
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Design.</h2>
                <ul>
                  <li>
                    <a href="https://abacusdesk.com/capabilities/logo/">Logo</a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/corporate-identity/">
                      Corporate Identity
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/branding-strategy/">
                      Branding Strategy
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/brochure-flyers/">
                      Brochure &#038; Flyers
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/email-newsletters/">
                      Email Newsletters
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Development.</h2>
                <ul>
                  <li>
                    <a href="https://abacusdesk.com/capabilities/website/">
                      Website
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/e-commerce/">
                      E-commerce
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/cms/">CMS</a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/mobile-apps/">
                      Mobile apps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Enterprise.</h2>
                <ul>
                  <li>
                    <a href="https://abacusdesk.com/capabilities/crm/">CRM</a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/erp/">ERP</a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/cloud-hosting/">
                      Cloud Hosting
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/domain-management/">
                      Domain management
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/enterprise-email/">
                      Enterprise email
                    </a>
                  </li>
                  <li>
                    <a href="https://abacusdesk.com/g-suite/">G Suite</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Marketing.</h2>
                <ul>
                  <li>
                    <a href="https://abacusdesk.com/capabilities/seo/">SEO</a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/social-media/">
                      Social media
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/orm/">ORM</a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/email-marketing/">
                      Email marketing
                    </a>
                  </li>

                  <li>
                    <a href="https://abacusdesk.com/capabilities/ppc-advertising/">
                      PPC advertising
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="cross-item">
          <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" />
        </div>
      </article>
      <article class="menu-main-div" id="about-mega">
        <div class="container">
          <div class="row">
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Profile.</h2>
                <ul>
                  <li>
                    Our truly unique products and customer-centric approach can
                    help your company remain ahead in the IT race.
                  </li>
                </ul>
                <div class="more-arrow-sign">
                  <div class="sign-more">
                    <a href="https://abacusdesk.com/company-profile/">
                      <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/right-arrow/Shape.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Why Us.</h2>
                <ul>
                  <li>
                    We strive to create a strategic and data-driven advantage
                    for your organization.
                  </li>
                </ul>
                <div class="more-arrow-sign">
                  <div class="sign-more">
                    <a href="https://abacusdesk.com/why-us/">
                      <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/right-arrow/Shape.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Clients.</h2>
                <ul>
                  <li>
                    We have over 1000 companies across the globe as our clients.
                  </li>
                </ul>
                <div class="more-arrow-sign">
                  <div class="sign-more">
                    <a href="https://abacusdesk.com/clients/">
                      <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/right-arrow/Shape.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>About Us.</h2>
                <div class="menu-about-menu-container">
                  <ul id="menu-about-menu" class="menu">
                    <li
                      id="menu-item-108"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-108"
                    >
                      <a href="https://abacusdesk.com/case-studies/">
                        Case Studies
                      </a>
                    </li>
                    <li
                      id="menu-item-107"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-107"
                    >
                      <a href="https://abacusdesk.com/testimonials/">
                        Testimonials
                      </a>
                    </li>
                    <li
                      id="menu-item-106"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-106"
                    >
                      <a href="https://abacusdesk.com/infrastructure/">
                        Infrastructure
                      </a>
                    </li>
                    <li
                      id="menu-item-105"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105"
                    >
                      <a href="https://abacusdesk.com/associates/">
                        Associates
                      </a>
                    </li>
                    <li
                      id="menu-item-104"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104"
                    >
                      <a href="https://abacusdesk.com/abacus-experiments/">
                        Abacus Experiments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cross-item">
          <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" />
        </div>
      </article>
      <article class="menu-main-div" id="support-mega">
        <div class="container">
          <div class="row">
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Offices.</h2>
                <ul>
                  <li>
                    For queries related to our digital services, contact us at
                    any of our global offices.
                  </li>
                </ul>
                <div class="more-arrow-sign">
                  <div class="sign-more">
                    <a href="https://abacusdesk.com/offices/">
                      <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/right-arrow/Shape.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Submit RFP.</h2>
                <ul>
                  <li>
                    Thank you for your interest in Abacus digital services.
                    Please fill the RFP form here.
                  </li>
                </ul>
                <div class="more-arrow-sign">
                  <div class="sign-more">
                    <a href="https://abacusdesk.com/submit-rfp/">
                      <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/right-arrow/Shape.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Quick contact.</h2>
                <ul>
                  <li>
                    <a href="mailto:info@abacusdesk.co.in">
                      info@abacusdesk.co.in
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 935 005 9390">+91 935 005 9390</a>
                  </li>
                  <li>
                    <a href="tel:+91 999 985 2209">+91 999 985 2209</a>
                  </li>
                  <li>
                    <a href="tel:+91 129 402 1258">+91 129 402 1258</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="content-menu">
                <h2>Support.</h2>
                <div class="menu-support-container">
                  <ul id="menu-support" class="menu">
                    <li
                      id="menu-item-130"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-130"
                    >
                      <a href="https://abacusdesk.com/help-desk/">Help Desk</a>
                    </li>
                    <li
                      id="menu-item-129"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-129"
                    >
                      <a href="https://abacusdesk.com/email-client-setup/">
                        Email Client Setup
                      </a>
                    </li>
                    <li
                      id="menu-item-132"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-132"
                    >
                      <a href="https://abacusdesk.com/web-design-tips/">
                        Web design tips
                      </a>
                    </li>
                    <li
                      id="menu-item-128"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-128"
                    >
                      <a href="https://abacusdesk.com/responsive-site-help/">
                        Responsive Site Help
                      </a>
                    </li>
                    <li
                      id="menu-item-127"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-127"
                    >
                      <a href="https://abacusdesk.com/cpanel-help/">
                        CPANEL HELP
                      </a>
                    </li>
                    <li
                      id="menu-item-126"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-126"
                    >
                      <a href="https://abacusdesk.com/terms-conditions/">
                        Terms &#038; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cross-item">
          <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" />
        </div>
      </article>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
