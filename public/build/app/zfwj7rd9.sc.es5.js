/*! Built with http://stenciljs.com */
App.loadBundle("zfwj7rd9",["exports"],function(e){var t=window.App.h,r=function(){function e(){this.io=null,this.fit=!1}return e.prototype.srcChanged=function(){this.addIntersectionObserver()},e.prototype.componentDidLoad=function(){this.addIntersectionObserver()},e.prototype.addIntersectionObserver=function(){var e=this;this.src&&("IntersectionObserver"in window?(this.removeIntersectionObserver(),this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.loadSrc=e.src,e.removeIntersectionObserver())}),this.io.observe(this.el)):setTimeout(function(){return e.loadSrc=e.src},300))},e.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},e.prototype.render=function(){return t("img",{class:{fit:this.fit},src:this.loadSrc,alt:this.alt,decoding:"async"})},Object.defineProperty(e,"is",{get:function(){return"app-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},fit:{type:Boolean,attr:"fit"},loadSrc:{state:!0},src:{type:String,attr:"src",watchCallbacks:["srcChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-app-img-host]{display:block}img[data-app-img]{max-width:100%}img.fit[data-app-img]{max-width:none;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),e}();e.AppImg=r,Object.defineProperty(e,"__esModule",{value:!0})});