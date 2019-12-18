( () => {
  const component = {
    name: 'counter',
    ccm: 'https://ccmjs.github.io/ccm/ccm.js',
    config: {
      html: [ 'ccm.load', 'resources/templates.html' ]
    },
    Instance: function () {
      let count = 0;
      let clicks = 0;
      this.start = async () => {
        const $ = this.ccm.helper;
        $.setContent( this.element, $.html( this.html, {
          minus: () => {
            this.element.querySelector( '#count' ).innerText = --count;
            this.element.querySelector( '#clicks' ).innerText = ++clicks;
          },
          plus: () => {
            this.element.querySelector( '#count' ).innerText = ++count;
            this.element.querySelector( '#clicks' ).innerText = ++clicks;
          },
        } ) );
      };
    }
  };
  let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();