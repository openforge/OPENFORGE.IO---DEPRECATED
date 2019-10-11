/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  BlogPost,
} from './model/blog-post.model';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface AppAbout {}
  interface AppBlog {
    'butter': any;
  }
  interface AppBlogCard {
    'blogPost': BlogPost;
  }
  interface AppBlogContent {
    'blogPost': BlogPost;
  }
  interface AppBlogFeatured {
    'blogPost': BlogPost;
  }
  interface AppBlogIndex {
    'butter': any;
  }
  interface AppBlogPost {
    'butter': any;
    'history': RouterHistory;
    'match': MatchResults;
    'preRenderBlogPost': BlogPost;
  }
  interface AppCarouselIndicators {
    'activeIndex': string;
  }
  interface AppCaseStudy {}
  interface AppContact {
    'errorIconStyles': { display: string; marginBottom: string; paddingRight: string; };
  }
  interface AppCta {}
  interface AppDetailedService {
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppFooter {}
  interface AppHome {
    'butter': any;
    'history': RouterHistory;
  }
  interface AppImg {
    'alt': string;
    'fit': boolean;
    'preLoad': boolean;
    'src': string;
  }
  interface AppInput {
    'inputId': string;
    'label': string;
    'maxlength': string;
    'name': string;
    'placeholder': string;
    'required': boolean;
    'type': string;
  }
  interface AppMembers {
    'members': any[];
  }
  interface AppNavHeader {}
  interface AppOpportunities {
    'errorIconStyles': { display: string; marginBottom: string; paddingRight: string; };
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppRadio {
    'label': string;
    'name': string;
    'required': boolean;
    'value': string;
  }
  interface AppResources {
    'errorIconStyles': { display: string; marginBottom: string; paddingRight: string; };
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppServiceLevelAgreement {}
  interface AppServices {}
  interface AppSlider {
    'label': string;
    'name': string;
  }
  interface AppTeamLanding {
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppTextarea {
    'inputId': string;
    'label': string;
    'maxlength': string;
    'name': string;
    'placeholder': string;
    'required': boolean;
    'rows': number;
  }
  interface AppToolbox {}
  interface AppTos {}
  interface AppTranslate {
    'params': {};
    'tKey': string;
  }
  interface ContentGraphic {
    'imgUrl': string;
    'preLoadImg': boolean;
    'reverse': boolean;
  }
  interface LazyImg {
    'alt': string;
    'src': string;
    'width': number;
  }
  interface OpenForgeApp {}
}

declare global {


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppBlogElement extends Components.AppBlog, HTMLStencilElement {}
  var HTMLAppBlogElement: {
    prototype: HTMLAppBlogElement;
    new (): HTMLAppBlogElement;
  };

  interface HTMLAppBlogCardElement extends Components.AppBlogCard, HTMLStencilElement {}
  var HTMLAppBlogCardElement: {
    prototype: HTMLAppBlogCardElement;
    new (): HTMLAppBlogCardElement;
  };

  interface HTMLAppBlogContentElement extends Components.AppBlogContent, HTMLStencilElement {}
  var HTMLAppBlogContentElement: {
    prototype: HTMLAppBlogContentElement;
    new (): HTMLAppBlogContentElement;
  };

  interface HTMLAppBlogFeaturedElement extends Components.AppBlogFeatured, HTMLStencilElement {}
  var HTMLAppBlogFeaturedElement: {
    prototype: HTMLAppBlogFeaturedElement;
    new (): HTMLAppBlogFeaturedElement;
  };

  interface HTMLAppBlogIndexElement extends Components.AppBlogIndex, HTMLStencilElement {}
  var HTMLAppBlogIndexElement: {
    prototype: HTMLAppBlogIndexElement;
    new (): HTMLAppBlogIndexElement;
  };

  interface HTMLAppBlogPostElement extends Components.AppBlogPost, HTMLStencilElement {}
  var HTMLAppBlogPostElement: {
    prototype: HTMLAppBlogPostElement;
    new (): HTMLAppBlogPostElement;
  };

  interface HTMLAppCarouselIndicatorsElement extends Components.AppCarouselIndicators, HTMLStencilElement {}
  var HTMLAppCarouselIndicatorsElement: {
    prototype: HTMLAppCarouselIndicatorsElement;
    new (): HTMLAppCarouselIndicatorsElement;
  };

  interface HTMLAppCaseStudyElement extends Components.AppCaseStudy, HTMLStencilElement {}
  var HTMLAppCaseStudyElement: {
    prototype: HTMLAppCaseStudyElement;
    new (): HTMLAppCaseStudyElement;
  };

  interface HTMLAppContactElement extends Components.AppContact, HTMLStencilElement {}
  var HTMLAppContactElement: {
    prototype: HTMLAppContactElement;
    new (): HTMLAppContactElement;
  };

  interface HTMLAppCtaElement extends Components.AppCta, HTMLStencilElement {}
  var HTMLAppCtaElement: {
    prototype: HTMLAppCtaElement;
    new (): HTMLAppCtaElement;
  };

  interface HTMLAppDetailedServiceElement extends Components.AppDetailedService, HTMLStencilElement {}
  var HTMLAppDetailedServiceElement: {
    prototype: HTMLAppDetailedServiceElement;
    new (): HTMLAppDetailedServiceElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppImgElement extends Components.AppImg, HTMLStencilElement {}
  var HTMLAppImgElement: {
    prototype: HTMLAppImgElement;
    new (): HTMLAppImgElement;
  };

  interface HTMLAppInputElement extends Components.AppInput, HTMLStencilElement {}
  var HTMLAppInputElement: {
    prototype: HTMLAppInputElement;
    new (): HTMLAppInputElement;
  };

  interface HTMLAppMembersElement extends Components.AppMembers, HTMLStencilElement {}
  var HTMLAppMembersElement: {
    prototype: HTMLAppMembersElement;
    new (): HTMLAppMembersElement;
  };

  interface HTMLAppNavHeaderElement extends Components.AppNavHeader, HTMLStencilElement {}
  var HTMLAppNavHeaderElement: {
    prototype: HTMLAppNavHeaderElement;
    new (): HTMLAppNavHeaderElement;
  };

  interface HTMLAppOpportunitiesElement extends Components.AppOpportunities, HTMLStencilElement {}
  var HTMLAppOpportunitiesElement: {
    prototype: HTMLAppOpportunitiesElement;
    new (): HTMLAppOpportunitiesElement;
  };

  interface HTMLAppRadioElement extends Components.AppRadio, HTMLStencilElement {}
  var HTMLAppRadioElement: {
    prototype: HTMLAppRadioElement;
    new (): HTMLAppRadioElement;
  };

  interface HTMLAppResourcesElement extends Components.AppResources, HTMLStencilElement {}
  var HTMLAppResourcesElement: {
    prototype: HTMLAppResourcesElement;
    new (): HTMLAppResourcesElement;
  };

  interface HTMLAppServiceLevelAgreementElement extends Components.AppServiceLevelAgreement, HTMLStencilElement {}
  var HTMLAppServiceLevelAgreementElement: {
    prototype: HTMLAppServiceLevelAgreementElement;
    new (): HTMLAppServiceLevelAgreementElement;
  };

  interface HTMLAppServicesElement extends Components.AppServices, HTMLStencilElement {}
  var HTMLAppServicesElement: {
    prototype: HTMLAppServicesElement;
    new (): HTMLAppServicesElement;
  };

  interface HTMLAppSliderElement extends Components.AppSlider, HTMLStencilElement {}
  var HTMLAppSliderElement: {
    prototype: HTMLAppSliderElement;
    new (): HTMLAppSliderElement;
  };

  interface HTMLAppTeamLandingElement extends Components.AppTeamLanding, HTMLStencilElement {}
  var HTMLAppTeamLandingElement: {
    prototype: HTMLAppTeamLandingElement;
    new (): HTMLAppTeamLandingElement;
  };

  interface HTMLAppTextareaElement extends Components.AppTextarea, HTMLStencilElement {}
  var HTMLAppTextareaElement: {
    prototype: HTMLAppTextareaElement;
    new (): HTMLAppTextareaElement;
  };

  interface HTMLAppToolboxElement extends Components.AppToolbox, HTMLStencilElement {}
  var HTMLAppToolboxElement: {
    prototype: HTMLAppToolboxElement;
    new (): HTMLAppToolboxElement;
  };

  interface HTMLAppTosElement extends Components.AppTos, HTMLStencilElement {}
  var HTMLAppTosElement: {
    prototype: HTMLAppTosElement;
    new (): HTMLAppTosElement;
  };

  interface HTMLAppTranslateElement extends Components.AppTranslate, HTMLStencilElement {}
  var HTMLAppTranslateElement: {
    prototype: HTMLAppTranslateElement;
    new (): HTMLAppTranslateElement;
  };

  interface HTMLContentGraphicElement extends Components.ContentGraphic, HTMLStencilElement {}
  var HTMLContentGraphicElement: {
    prototype: HTMLContentGraphicElement;
    new (): HTMLContentGraphicElement;
  };

  interface HTMLLazyImgElement extends Components.LazyImg, HTMLStencilElement {}
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };

  interface HTMLOpenForgeAppElement extends Components.OpenForgeApp, HTMLStencilElement {}
  var HTMLOpenForgeAppElement: {
    prototype: HTMLOpenForgeAppElement;
    new (): HTMLOpenForgeAppElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-blog': HTMLAppBlogElement;
    'app-blog-card': HTMLAppBlogCardElement;
    'app-blog-content': HTMLAppBlogContentElement;
    'app-blog-featured': HTMLAppBlogFeaturedElement;
    'app-blog-index': HTMLAppBlogIndexElement;
    'app-blog-post': HTMLAppBlogPostElement;
    'app-carousel-indicators': HTMLAppCarouselIndicatorsElement;
    'app-case-study': HTMLAppCaseStudyElement;
    'app-contact': HTMLAppContactElement;
    'app-cta': HTMLAppCtaElement;
    'app-detailed-service': HTMLAppDetailedServiceElement;
    'app-footer': HTMLAppFooterElement;
    'app-home': HTMLAppHomeElement;
    'app-img': HTMLAppImgElement;
    'app-input': HTMLAppInputElement;
    'app-members': HTMLAppMembersElement;
    'app-nav-header': HTMLAppNavHeaderElement;
    'app-opportunities': HTMLAppOpportunitiesElement;
    'app-radio': HTMLAppRadioElement;
    'app-resources': HTMLAppResourcesElement;
    'app-service-level-agreement': HTMLAppServiceLevelAgreementElement;
    'app-services': HTMLAppServicesElement;
    'app-slider': HTMLAppSliderElement;
    'app-team-landing': HTMLAppTeamLandingElement;
    'app-textarea': HTMLAppTextareaElement;
    'app-toolbox': HTMLAppToolboxElement;
    'app-tos': HTMLAppTosElement;
    'app-translate': HTMLAppTranslateElement;
    'content-graphic': HTMLContentGraphicElement;
    'lazy-img': HTMLLazyImgElement;
    'open-forge-app': HTMLOpenForgeAppElement;
  }
}

declare namespace LocalJSX {
  interface AppAbout {}
  interface AppBlog {
    'butter'?: any;
  }
  interface AppBlogCard {
    'blogPost'?: BlogPost;
  }
  interface AppBlogContent {
    'blogPost'?: BlogPost;
  }
  interface AppBlogFeatured {
    'blogPost'?: BlogPost;
  }
  interface AppBlogIndex {
    'butter'?: any;
  }
  interface AppBlogPost {
    'butter'?: any;
    'history'?: RouterHistory;
    'match'?: MatchResults;
    'preRenderBlogPost'?: BlogPost;
  }
  interface AppCarouselIndicators {
    'activeIndex'?: string;
  }
  interface AppCaseStudy {}
  interface AppContact {
    'errorIconStyles'?: { display: string; marginBottom: string; paddingRight: string; };
  }
  interface AppCta {}
  interface AppDetailedService {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }
  interface AppFooter {}
  interface AppHome {
    'butter'?: any;
    'history'?: RouterHistory;
  }
  interface AppImg {
    'alt'?: string;
    'fit'?: boolean;
    'preLoad'?: boolean;
    'src'?: string;
  }
  interface AppInput {
    'inputId'?: string;
    'label'?: string;
    'maxlength'?: string;
    'name'?: string;
    'onValueChange'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
    'required'?: boolean;
    'type'?: string;
  }
  interface AppMembers {
    'members'?: any[];
  }
  interface AppNavHeader {}
  interface AppOpportunities {
    'errorIconStyles'?: { display: string; marginBottom: string; paddingRight: string; };
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }
  interface AppRadio {
    'label'?: string;
    'name'?: string;
    'onValueChange'?: (event: CustomEvent<any>) => void;
    'required'?: boolean;
    'value'?: string;
  }
  interface AppResources {
    'errorIconStyles'?: { display: string; marginBottom: string; paddingRight: string; };
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }
  interface AppServiceLevelAgreement {}
  interface AppServices {}
  interface AppSlider {
    'label'?: string;
    'name'?: string;
    'onValueChange'?: (event: CustomEvent<any>) => void;
  }
  interface AppTeamLanding {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }
  interface AppTextarea {
    'inputId'?: string;
    'label'?: string;
    'maxlength'?: string;
    'name'?: string;
    'onValueChange'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
    'required'?: boolean;
    'rows'?: number;
  }
  interface AppToolbox {}
  interface AppTos {}
  interface AppTranslate {
    'params'?: {};
    'tKey'?: string;
  }
  interface ContentGraphic {
    'imgUrl'?: string;
    'preLoadImg'?: boolean;
    'reverse'?: boolean;
  }
  interface LazyImg {
    'alt'?: string;
    'onLazyImgloaded'?: (event: CustomEvent<HTMLImageElement>) => void;
    'src'?: string;
    'width'?: number;
  }
  interface OpenForgeApp {}

  interface IntrinsicElements {
    'app-about': AppAbout;
    'app-blog': AppBlog;
    'app-blog-card': AppBlogCard;
    'app-blog-content': AppBlogContent;
    'app-blog-featured': AppBlogFeatured;
    'app-blog-index': AppBlogIndex;
    'app-blog-post': AppBlogPost;
    'app-carousel-indicators': AppCarouselIndicators;
    'app-case-study': AppCaseStudy;
    'app-contact': AppContact;
    'app-cta': AppCta;
    'app-detailed-service': AppDetailedService;
    'app-footer': AppFooter;
    'app-home': AppHome;
    'app-img': AppImg;
    'app-input': AppInput;
    'app-members': AppMembers;
    'app-nav-header': AppNavHeader;
    'app-opportunities': AppOpportunities;
    'app-radio': AppRadio;
    'app-resources': AppResources;
    'app-service-level-agreement': AppServiceLevelAgreement;
    'app-services': AppServices;
    'app-slider': AppSlider;
    'app-team-landing': AppTeamLanding;
    'app-textarea': AppTextarea;
    'app-toolbox': AppToolbox;
    'app-tos': AppTos;
    'app-translate': AppTranslate;
    'content-graphic': ContentGraphic;
    'lazy-img': LazyImg;
    'open-forge-app': OpenForgeApp;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-about': LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
      'app-blog': LocalJSX.AppBlog & JSXBase.HTMLAttributes<HTMLAppBlogElement>;
      'app-blog-card': LocalJSX.AppBlogCard & JSXBase.HTMLAttributes<HTMLAppBlogCardElement>;
      'app-blog-content': LocalJSX.AppBlogContent & JSXBase.HTMLAttributes<HTMLAppBlogContentElement>;
      'app-blog-featured': LocalJSX.AppBlogFeatured & JSXBase.HTMLAttributes<HTMLAppBlogFeaturedElement>;
      'app-blog-index': LocalJSX.AppBlogIndex & JSXBase.HTMLAttributes<HTMLAppBlogIndexElement>;
      'app-blog-post': LocalJSX.AppBlogPost & JSXBase.HTMLAttributes<HTMLAppBlogPostElement>;
      'app-carousel-indicators': LocalJSX.AppCarouselIndicators & JSXBase.HTMLAttributes<HTMLAppCarouselIndicatorsElement>;
      'app-case-study': LocalJSX.AppCaseStudy & JSXBase.HTMLAttributes<HTMLAppCaseStudyElement>;
      'app-contact': LocalJSX.AppContact & JSXBase.HTMLAttributes<HTMLAppContactElement>;
      'app-cta': LocalJSX.AppCta & JSXBase.HTMLAttributes<HTMLAppCtaElement>;
      'app-detailed-service': LocalJSX.AppDetailedService & JSXBase.HTMLAttributes<HTMLAppDetailedServiceElement>;
      'app-footer': LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-img': LocalJSX.AppImg & JSXBase.HTMLAttributes<HTMLAppImgElement>;
      'app-input': LocalJSX.AppInput & JSXBase.HTMLAttributes<HTMLAppInputElement>;
      'app-members': LocalJSX.AppMembers & JSXBase.HTMLAttributes<HTMLAppMembersElement>;
      'app-nav-header': LocalJSX.AppNavHeader & JSXBase.HTMLAttributes<HTMLAppNavHeaderElement>;
      'app-opportunities': LocalJSX.AppOpportunities & JSXBase.HTMLAttributes<HTMLAppOpportunitiesElement>;
      'app-radio': LocalJSX.AppRadio & JSXBase.HTMLAttributes<HTMLAppRadioElement>;
      'app-resources': LocalJSX.AppResources & JSXBase.HTMLAttributes<HTMLAppResourcesElement>;
      'app-service-level-agreement': LocalJSX.AppServiceLevelAgreement & JSXBase.HTMLAttributes<HTMLAppServiceLevelAgreementElement>;
      'app-services': LocalJSX.AppServices & JSXBase.HTMLAttributes<HTMLAppServicesElement>;
      'app-slider': LocalJSX.AppSlider & JSXBase.HTMLAttributes<HTMLAppSliderElement>;
      'app-team-landing': LocalJSX.AppTeamLanding & JSXBase.HTMLAttributes<HTMLAppTeamLandingElement>;
      'app-textarea': LocalJSX.AppTextarea & JSXBase.HTMLAttributes<HTMLAppTextareaElement>;
      'app-toolbox': LocalJSX.AppToolbox & JSXBase.HTMLAttributes<HTMLAppToolboxElement>;
      'app-tos': LocalJSX.AppTos & JSXBase.HTMLAttributes<HTMLAppTosElement>;
      'app-translate': LocalJSX.AppTranslate & JSXBase.HTMLAttributes<HTMLAppTranslateElement>;
      'content-graphic': LocalJSX.ContentGraphic & JSXBase.HTMLAttributes<HTMLContentGraphicElement>;
      'lazy-img': LocalJSX.LazyImg & JSXBase.HTMLAttributes<HTMLLazyImgElement>;
      'open-forge-app': LocalJSX.OpenForgeApp & JSXBase.HTMLAttributes<HTMLOpenForgeAppElement>;
    }
  }
}


