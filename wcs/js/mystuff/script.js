
renderList().then();

/**
 * renders a list of all items inside <body>
 * @returns {Promise<void>}
 */
async function renderList() {

  /**
   * all item datasets
   * @type {Object[]}
   */
  const items = await fetch( 'http://localhost:8080/api/v1/items', { method: 'GET' } ).then( result => result.json() );

  // set content of <body>
  document.body.innerHTML = `
<div class="container-fluid">
  <h1>MyStuff Frontend <span class="badge badge-warning">JavaScript</span></h1>
  <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Location</th>
        <th scope="col">Amount</th>
        <th scope="col">Description</th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <button type="button" class="btn btn-success btn-sm">Create</button>
</div>
  `;

  // append table row for each loaded item dataset
  items.forEach( function ( item ) {
    const entry = `
<tr>
  <th scope="row">${item.id}</th>
  <td>${item.name}</td>
  <td>${item.location}</td>
  <td>${item.amount}</td>
  <td>${item.description || '-'}</td>
  <td><button type="button" class="btn btn-primary btn-sm" data-id="${item.id}">Read</button></td>
  <td><button type="button" class="btn btn-warning btn-sm" data-id="${item.id}">Update</button></td>
  <td><button type="button" class="btn btn-danger btn-sm" data-id="${item.id}">Delete</button></td>
</tr>
    `;
    document.querySelector( 'tbody' ).innerHTML += entry;
  } );

  // set click event for 'Create' button => render form for create new item
  document.querySelector( '.btn-success' ).addEventListener( 'click', renderForm );

  // set click event for all 'Read' buttons => show item as readonly form
  document.querySelectorAll( '.btn-primary' ).forEach( button => {
    button.addEventListener( 'click', async () => {
      const id = button.dataset.id;
      const item = items.find( item => item.id == id );
      await renderForm( item, true );
    } );
  } );

  // set click event for all 'Update' buttons => render form for update of item
  document.querySelectorAll( '.btn-warning' ).forEach( button => {
    button.addEventListener( 'click', async () => {
      const id = button.dataset.id;
      const item = items.find( item => item.id == id );
      await renderForm( item );
    } );
  } );

  // set click event for all 'Delete' buttons => delete item
  document.querySelectorAll( '.btn-danger' ).forEach( button => {
    button.addEventListener( 'click', async () => {
      await fetch( 'http://localhost:8080/api/v1/item/' + button.dataset.id, { method: 'DELETE' } );
      await renderList();
    } );
  } );
}

/**
 * renders a form for editing an item
 * @param {Object} [item] - item dataset
 * @param {Object} [readonly] - all input fields are not editable
 * @returns {Promise<void>}
 */
async function renderForm( item = {}, readonly ) {
  const {id, name, location, amount, description} = item;
  const form = `
<div class="container-fluid">
  <br>
  <form id="myform">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" value="${name || ''}" required ${readonly ? 'readonly' : ''}>
    </div>
    <div class="form-group">
      <label for="location">Location</label>
      <input type="text" class="form-control" id="location" value="${location || ''}" ${readonly ? 'readonly' : ''}>
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input type="number" class="form-control" id="amount" value="${amount || ''}" min="0" ${readonly ? 'readonly' : ''}>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" id="description" rows="3" ${readonly ? 'readonly' : ''}>${description || ''}</textarea>
    </div>
    <div class="form-group">
    </div>
  </form>
  <button type="submit" form="myform" class="btn btn-primary">Submit</button>
  <button class="btn btn-secondary">Back to List</button>
</div>
  `;
  document.body.innerHTML = form;

  // no need for submit button if all input fields are not editable => remove submit button
  readonly && document.querySelector( 'button' ).parentElement.removeChild( document.querySelector( 'button' ) );

  // set submit event of the form => create or update item
  document.body.querySelector( 'form' ).addEventListener( 'submit', async event => {
    event.preventDefault();  // prevent page reload after form submit
    const item = {
      id: id,
      name:        document.querySelector( '#name'        ).value,
      location:    document.querySelector( '#location'    ).value,
      amount:      document.querySelector( '#amount'      ).value,
      description: document.querySelector( '#description' ).value
    };
    await fetch( id ? 'http://localhost:8080/api/v1/item/' + id : 'http://localhost:8080/api/v1/items', {
      body: JSON.stringify( item ),
      headers: { 'Content-Type': 'application/json' },
      method: id ? 'PUT' : 'POST'
    } );
    await renderList();
  } );

  // set click event of 'Back to List' button => render list of all items
  document.body.querySelector( '.btn-secondary' ).addEventListener( 'click', renderList );

}
