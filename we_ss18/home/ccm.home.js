{
  var component = {

    name: 'home',

    ccm: 'https://ccmjs.github.io/ccm/ccm.js',

    config: {
      html: {
        main: {
          id: 'main',
          onclick: '%onclick%',
          inner: [
            {
              tag: 'h1',
              inner: '%topic%',
              title: '%topic%'
            },
            { id: 'hello' },
            {
              tag: 'p',
              inner: '%text%'
            }
          ]
        }
      },
      css: [ 'ccm.load', 'resources/default.css' ],
      owners: [ 'John', 'Jane' ],
      hello: [ 'ccm.component', '../hello/versions/ccm.hello-1.0.0.js' ]
    },

    Instance: function () {

      const self = this;

      let $;

      this.ready = callback => {

        $ = self.ccm.helper;

        callback();
      };

      this.start = callback => {

        $.setContent( self.element, $.html( self.html.main, {
          topic: 'Home',
          text: 'Welcome home.',
          onclick: () => {
            self.owners.push( $.generateKey() );
            self.start();
          }
        } ) );

        let counter = 1;
        self.owners.map( owner => {
          counter++;
          self.hello.start( { name: owner }, instance => {
            $.append( self.element.querySelector( '#hello' ), instance.root );
            check();
          } );
        } );
        check();

        function check() { !--counter && callback && callback(); }

      }

    }

  };

  function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}