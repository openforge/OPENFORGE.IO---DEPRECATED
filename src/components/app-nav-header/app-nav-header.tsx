import { Component } from '@stencil/core';
import { translate, TranslationService } from '../../services/translation.service';

@Component({
  tag: 'app-nav-header',
  styleUrl: 'app-nav-header.scss',
})
export class AppNavHeader {
  isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

  constructor() {
    const translationService = new TranslationService();
    translationService.init('en');
  }

  componentDidLoad() {
    const links: any = document.querySelectorAll('.navbar li.dropdown a.dropdown-item');
    links.forEach(link => {
      link.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      });
    });
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark align-items-lg-end fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <stencil-route-link tabindex="0" url="/" exact={true} anchorClass="nav-link" activeClass="active">
              <h1>
                <app-img class="img-fluid" src="/assets/logo-openforge.png" alt={translate('nav.header.img.alt')} />
              </h1>
            </stencil-route-link>
          </div>
          <button
            class="navbar-toggler"
            data-cy="burgerMenu"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon" /> */}
            <i id="bars-icon" class="fa fa-bars" aria-hidden="true" />
          </button>

          <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link url="/" exact={true} anchorClass="nav-link" activeClass="active">
                  {translate('nav.links.home')}
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link url="/our-work" exact={true} anchorClass="nav-link" activeClass="active">
                  Our Work
                </stencil-route-link>
              </li>
              <li class="nav-item dropdown split" data-target="#navbarSupportedContent">
                <stencil-route-link anchorClass="nav-link main" url="/resources/pwa-white-paper" role="button" activeClass="active">
                  Resources
                </stencil-route-link>
                <a href="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <stencil-route-link url="/services/app-designer" anchorClass="nav-link dropdown-item" activeClass="active">
                    Mobile Design
                  </stencil-route-link>
                  <stencil-route-link url="/services/app-developer" anchorClass="nav-link dropdown-item" activeClass="active">
                    Development
                  </stencil-route-link>
                  <stencil-route-link url="/blog" exact={true} anchorClass="nav-link dropdown-item" activeClass="active">
                    {translate('nav.links.blog')}
                  </stencil-route-link>
                  <a class="nav-link dropdown-item" id="github" href="https://github.com/openforge" title={translate('nav.links.github')} target="_blank" rel="noopener">
                    <div class="fab fa-github" /> &nbsp; Github
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown" data-target="#navbarSupportedContent">
                <a href="" class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {translate('nav.links.about')}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <stencil-route-link url="/about" anchorClass="nav-link dropdown-item" activeClass="active">
                    Meet the team
                  </stencil-route-link>
                  <stencil-route-link url="/our-process" anchorClass="nav-link dropdown-item" activeClass="active">
                    Our Process
                  </stencil-route-link>
                  <stencil-route-link url="/partners" anchorClass="nav-link dropdown-item" activeClass="active">
                    Partners
                  </stencil-route-link>
                </div>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link url="/contact" anchorClass="nav-link" activeClass="active">
                  {translate('nav.links.contact')}
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link url="/search" anchorClass="nav-link" activeClass="active">
                  Search &nbsp;
                  <div class="fa fa-search" />
                </stencil-route-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
