// This is a solution from Prof. Kaul

customElements.define( 'w3c-menu', class extends HTMLElement {

  constructor () {
    super();
    this.shadow = this.attachShadow( { mode: 'open' } );
    this.shadow.innerHTML = `
      <style>
        ::slotted([slot="item"]) {
          cursor: pointer;
        }
      </style>
      <slot name="item"></slot>
      <slot name="content"></slot>
    `;
  }

  connectedCallback() {

    // get all nodes assigned to slots
    this.items = this.shadowRoot.querySelector('[name="item"]').assignedNodes({flatten: true});
    this.contents = this.shadowRoot.querySelector('[name="content"]').assignedNodes({flatten: true});

    // bind event listener to this Custom Element
    this.items.forEach( item => item.addEventListener( 'click', this.hideContent.bind(this) ) );

    this.hideContent();
  }

  hideContent(e) {
    this.contents.forEach( content => content.style.display = 'none' );
    if(e){
      // get index of clicked menu item
      const index = this.items.indexOf(e.currentTarget);
      // display content with selected index
      this.contents[ index ].style.display = 'block';
    }
  }

} );