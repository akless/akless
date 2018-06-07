{
  var component = {

    name: 'home',
    version: [ 1, 0, 0 ],
    ccm: 'https://ccmjs.github.io/ccm/versions/ccm-16.6.1.js',

    config: {
      owner: 'John',
      hello: [ 'ccm.instance', '../hello/versions/ccm.hello-1.0.0.js' ]
    },

    Instance: function () {

      this.init = callback => {

        this.hello.name = this.owner;

        callback();
      };

      this.start = callback => {

        this.element.innerHTML = '<h1>Home</h1><div id="hello"></div><p>Welcome home.</p>';

        this.hello.start( () => {

          this.element.querySelector( '#hello' ).appendChild( this.hello.root );

          callback && callback();

        } );

      }

    }

  };

  function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}