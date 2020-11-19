{
  var component = {

    name: 'chat',

    ccm: 'https://ccmjs.github.io/ccm/ccm.js',

    config: {
      html: {
        main: {
          id: "main",
          inner: [
            {
              id: 'messages'
            },
            {
              id: 'input',
              inner: [
                {
                  tag: 'input',
                  type: 'text'
                },
                {
                  tag: 'button',
                  inner: 'send',
                  onclick: '%click%'
                }
              ]
            }
          ]
        },
        message: {
          class: 'message',
          inner: [
            { id: 'user', inner: '%user%' },
            { id: 'text', inner: '%text%' }
          ]
        }
      },
      css: [ 'ccm.load', 'resources/default.css' ],
      data: {
        store: [ 'ccm.store', { local: 'resources/datasets.js' } ],
        key: 'demo'
      }
    },

    Instance: function () {

      const self = this;
      let $;

      this.ready = callback => {
        $ = self.ccm.helper;
        self.data.store.onchage = self.start;
        callback();
      };

      this.start = callback => {

        $.dataset( self.data, dataset => {

          const main = $.html( self.html.main, {
            click: () => {
              const input = main.querySelector( 'input' ).value;
              dataset.messages.push( {
                user: 'john',
                text: input
              } );
              self.data.store.set( dataset, () => self.start() );
            }
          } );
          $.setContent( self.element, main );

          dataset.messages.map( message => {
            const message_div = $.html( self.html.message, {
              user: message.user,
              text: message.text
            } );
            $.append( main.querySelector( '#messages' ), message_div );
          } );

          callback && callback();
        } );

      }

    }

  };

  function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}