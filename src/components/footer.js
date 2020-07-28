import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <div id="site-wrapper">
    <footer>
      <article class="heading-area-footer">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <div class="menu-contant">
                <h2>How can we help?</h2>
                <div class="contant-btn">
                  <a href="https://abacusdesk.com/offices/">
                    Let's talk <i class="fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="menu-area-footer">
        <div class="container">
          <div class="row">
            <div class="col m3 s12">
              <div class="menu-footer">
                <h3>About Us</h3>
                <div class="menu-footer-about-menu-container">
                  <ul id="menu-footer-about-menu" class="menu">
                    <li
                      id="menu-item-143"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"
                    >
                      <a href="https://abacusdesk.com/company-profile/">
                        Company Profile
                      </a>
                    </li>
                    <li
                      id="menu-item-147"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-147"
                    >
                      <a href="https://abacusdesk.com/why-us/">Why Us?</a>
                    </li>
                    <li
                      id="menu-item-142"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"
                    >
                      <a href="https://abacusdesk.com/clients/">Clients</a>
                    </li>
                    <li
                      id="menu-item-141"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
                    >
                      <a href="https://abacusdesk.com/case-studies/">
                        Case Studies
                      </a>
                    </li>
                    <li
                      id="menu-item-146"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-146"
                    >
                      <a href="https://abacusdesk.com/testimonials/">
                        Testimonials
                      </a>
                    </li>
                    <li
                      id="menu-item-145"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-145"
                    >
                      <a href="https://abacusdesk.com/infrastructure/">
                        Infrastructure
                      </a>
                    </li>
                    <li
                      id="menu-item-140"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140"
                    >
                      <a href="https://abacusdesk.com/associates/">
                        Associates
                      </a>
                    </li>
                    <li
                      id="menu-item-139"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
                    >
                      <a href="https://abacusdesk.com/abacus-experiments/">
                        Experiments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="menu-footer">
                <h3>Services</h3>
                <div class="menu-footer-services-container">
                  <ul id="menu-footer-services" class="menu">
                    <li
                      id="menu-item-150"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-150"
                    >
                      <a href="https://abacusdesk.com/capabilities/corporate-identity/">
                        Corporate Identity
                      </a>
                    </li>
                    <li
                      id="menu-item-148"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-148"
                    >
                      <a href="https://abacusdesk.com/capabilities/branding-strategy/">
                        Branding Strategy
                      </a>
                    </li>
                    <li
                      id="menu-item-156"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-156"
                    >
                      <a href="https://abacusdesk.com/capabilities/website/">
                        Website &amp; App Design
                      </a>
                    </li>
                    <li
                      id="menu-item-153"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-153"
                    >
                      <a href="https://abacusdesk.com/capabilities/erp/">
                        BasiqERP
                      </a>
                    </li>
                    <li
                      id="menu-item-151"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-151"
                    >
                      <a href="https://abacusdesk.com/capabilities/crm/">
                        BasiqCRM
                      </a>
                    </li>
                    <li
                      id="menu-item-154"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-154"
                    >
                      <a href="https://abacusdesk.com/capabilities/seo/">SEO</a>
                    </li>
                    <li
                      id="menu-item-155"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-155"
                    >
                      <a href="https://abacusdesk.com/capabilities/social-media/">
                        Social Media
                      </a>
                    </li>
                    <li
                      id="menu-item-152"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-152"
                    >
                      <a href="https://abacusdesk.com/capabilities/enterprise-email/">
                        Enterprise Email
                      </a>
                    </li>
                    <li
                      id="menu-item-149"
                      class="menu-item menu-item-type-post_type menu-item-object-capabilities menu-item-149"
                    >
                      <a href="https://abacusdesk.com/capabilities/cloud-hosting/">
                        Cloud Servers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="menu-footer">
                <h3>Support</h3>
                <div class="menu-footer-support-container">
                  <ul id="menu-footer-support" class="menu">
                    <li
                      id="menu-item-162"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-162"
                    >
                      <a href="https://abacusdesk.com/help-desk/">Help Desk</a>
                    </li>
                    <li
                      id="menu-item-161"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-161"
                    >
                      <a href="https://abacusdesk.com/email-client-setup/">
                        Setting Up Email
                      </a>
                    </li>
                    <li
                      id="menu-item-159"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-159"
                    >
                      <a href="https://abacusdesk.com/web-design-tips/">
                        Web Design Tips
                      </a>
                    </li>
                    <li
                      id="menu-item-160"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-160"
                    >
                      <a href="https://abacusdesk.com/responsive-site-help/">
                        Responsive Tips
                      </a>
                    </li>
                    <li
                      id="menu-item-158"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-158"
                    >
                      <a href="https://abacusdesk.com/cpanel-help/">
                        cPanel Help
                      </a>
                    </li>
                    <li
                      id="menu-item-165"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-165"
                    >
                      <a href="https://abacusdesk.com/privacy-policy/">
                        Privacy Policy
                      </a>
                    </li>
                    <li
                      id="menu-item-1781"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1781"
                    >
                      <a href="https://abacusdesk.com/terms-conditions/">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col m3 s12">
              <div class="menu-footer">
                <h3>Social</h3>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/abacusdesk">Facebook</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/abacus_desk">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/abacusdesk/">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://youtu.be/TZ_4gHOxX9k">YouTube</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/abacusdesk-it-solutions-pvt-ltd-">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </footer>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
