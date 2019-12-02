import { Component, h, Build } from '@stencil/core';

@Component({
  tag: 'app-process',
  styleUrl: 'app-process.scss',
})
export class AppProcess {
  componentDidLoad() {
    if (Build.isBrowser) {
      window.scrollTo(0, 0);
    }
  }

  changeMetadata() {
    // Change meta tags dynamically
    document.querySelector("meta[property='og:title']").setAttribute('content', 'Startup Consulting Services in Philadelphia | OpenForge');
    document
      .querySelector("meta[property='og:description']")
      .setAttribute(
        'content',
        'OpenForge is Philadelphia’s Top Startup Consulting Firm.  We Specialize in Startup Consulting, Application Development, and LEAN Canvas Methodologies.   Let Us Help You With Marketing and CTO As a Service.'
      );
    document.querySelector("meta[property='og:url']").setAttribute('content', 'https://openforge.io/services/startup-consulting/');
    document.querySelector("meta[property='og:image']").setAttribute('content', 'https://openforge.io/assets/team-landing-header-management-team.jpeg');
    document.querySelector("meta[name='keywords']").setAttribute('content', 'Philadelphia, Startup Consulting, App Development, CTO As a Service, Tech Consulting');
  }

  render() {
    return (
      <div class="services">
        {/* header - hero */}
        <header class="hero">
          <div class="container desktop">
            <div class="services-graphic-background" aria-label="header" />
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <h1>
                  <app-translate keyword="process.hero.title" />
                </h1>
                <div class="svg-header-desktop" aria-label="header" />
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <p>
                  <app-translate keyword="process.hero.text" />
                </p>
              </div>
            </div>
          </div>
          <div class="container mobile">
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <app-img src="/assets/services-graphic-header.png" alt="Header" />
                <h1>
                  <app-translate keyword="process.hero.title" />
                </h1>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-12 flex-column">
                <p>
                  <app-translate keyword="process.hero.text" />
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="our-services" class="our-services">
          <div class="row card flex-fill">
            <div class="col-lg-6 col-md-6 col-sm-12 img-col">
              <app-img class="img-fluid" src="/assets/services/app-designer/header.png" alt="Digital Experience Design" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 text-col">
              <h3>
                <app-translate keyword="process.cards.digital-experience-design.title" />
              </h3>
              <p>
                <app-translate keyword="process.cards.digital-experience-design.text" />
              </p>
            </div>
          </div>

          <div class="row card flex-fill">
            <div class="col-lg-6 col-md-6 col-sm-12 text-col">
              <h3>
                <app-translate keyword="process.cards.webapp-development.title" />
              </h3>
              <p>
                <app-translate keyword="process.cards.webapp-development.text" />
              </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 img-col">
              <app-img class="img-fluid" src="/assets/services/app-developer/header.png" alt="Web App Development" />
            </div>
          </div>

          <div class="row card flex-fill">
            <div class="col-lg-6 col-md-6 col-sm-12 img-col">
              <app-img class="img-fluid" src="/assets/services/startup-consulting/header.png" alt="Startup Consulting" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 text-col">
              <h3>
                <app-translate keyword="process.cards.technology-consulting.title" />
              </h3>
              <p>
                <app-translate keyword="process.cards.technology-consulting.text" />
              </p>
            </div>
          </div>

          <div class="row card flex-fill">
            <div class="col-lg-6 col-md-6 col-sm-12 text-col">
              <h3>
                <app-translate keyword="process.cards.process-training-support.title" />
              </h3>
              <p>
                <app-translate keyword="process.cards.process-training-support.text" />
              </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 img-col">
              <app-img class="img-fluid" src="/assets/services/training/header.png" alt="Process Training Support" />
            </div>
          </div>
        </section>
        <app-cta />
        <app-footer />
      </div>
    );
  }
}
