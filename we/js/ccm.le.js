/**
 * @overview ccm component for rendering learning unit
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

( function () {

  var ccm_version = '8.0.0';
  var ccm_url     = '../js/ccm.js';

  var component_name = 'le';
  var component_obj  = {

    name: component_name,

    config: {
      css_file: '../css/le.css',
      poster_file: '../image/poster.jpg',
      content: [ 'ccm.component', '../js/ccm.content.js' ],
      link_prefix: 'Link: '
    },

    Instance: function () {

      var self = this;
      var my;           // contains privatized instance members

      this.init = function ( callback ) {

        // no container for inner HTML of own ccm Custom Element? => use empty container
        if ( !self.node ) self.node = document.createElement( 'div' );

        // inner HTML of own ccm Custom Element is given via 'innerHTML' config property? => use it with higher priority
        if ( self.innerHTML ) self.node.innerHTML = self.innerHTML;

        delete self.innerHTML;  // remove no more needed config property

        recursive( self.node );

        var div = document.createElement( 'div' );
        div.id = 'licence';
        div.innerHTML = '<hr><p xmlns:dct="https://purl.org/dc/terms/"><a rel="license" href="https://creativecommons.org/publicdomain/zero/1.0/"><img src="https://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0"></a><br>Soweit unter den gesetzlichen Voraussetzungen möglich hat <span resource="[_:publisher]" rel="dct:publisher"><span property="dct:title">André Kless</span></span> sämtliche Urheber- und Verwertungsrechte für dieses Werk abgetreten.</p>';
        self.node.appendChild( div );

        callback();

        function recursive( node ) {

          self.ccm.helper.makeIterable( node.children ).map( function ( child ) {

            var figure;

            switch ( child.tagName ) {

              case 'CCM-LE-AUDIO':
                figure = document.createElement( 'figure' );
                figure.innerHTML = '<audio controls><source src="' + child.getAttribute( 'src' ) + '">';
                node.replaceChild( figure, child );
                break;

              case 'CCM-LE-VIDEO':
                figure = document.createElement( 'figure' );
                figure.innerHTML = '<video controls poster="' + self.poster_file + '"><source src="' + child.getAttribute( 'src' ) + '" type="video/mp4">';
                node.replaceChild( figure, child );
                break;

              case 'CCM-LE-IMG':
                figure = document.createElement( 'figure' );
                figure.innerHTML = '<img src="' + child.getAttribute( 'src' ) + '">';
                node.replaceChild( figure, child );
                break;

              case 'A':
                child.setAttribute( 'target', '_blank' );
                break;

              case 'CCM-LE-LINK':
                var p = document.createElement( 'p' );
                var href = child.getAttribute( 'href' );
                p.innerHTML = self.link_prefix + '<a target="_blank" href="' + href + '">' + ( child.innerHTML ? child.innerHTML : href ) + '</a>';
                node.replaceChild( p, child );
                break;

              default:
                recursive( child );

            }

          } );

        }

      };

      this.ready = function ( callback ) {

        // privatize all possible instance members
        my = self.ccm.helper.privatize( self );

        my.content.instance( {
          css_layout: [ 'ccm.load', my.css_file ],
          element: self.element,
          node: my.node
        }, function ( instance ) {
          my.content = instance;
          callback();
        } );

      };

      this.start = function ( callback ) {

        my.content.start( callback );

      };

    }

  };

  var namespace = window.ccm && ccm.components[ component_name ]; if ( namespace ) { if ( namespace.ccm_version ) ccm_version = namespace.ccm_version; if ( namespace.ccm_url ) ccm_url = namespace.ccm_url; }
  if ( !window.ccm || !ccm[ ccm_version ] ) { var tag = document.createElement( 'script' ); document.head.appendChild( tag ); tag.onload = register; tag.src = ccm_url; } else register();
  function register() { ccm[ ccm_version ].component( component_obj ); }
}() );