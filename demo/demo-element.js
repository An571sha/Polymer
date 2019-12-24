import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@mpachnis/mp-calendar/mp-calendar.js';
import '@polymer/iron-icons/iron-icons.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';


class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
      <vaadin-grid id="my-grid" theme="row-dividers" column-reordering-allowed multi-sort>
             <vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
             <vaadin-grid-sort-column width="9em" path="content"></vaadin-grid-sort-column>
             <vaadin-grid-sort-column width="9em" path="date"></vaadin-grid-sort-column>
      </vaadin-grid>
      <mp-calendar events-file="data.json" ></mp-caledanr>


    `;
  }
    ready() {
     super.ready();
     var grid = this.shadowRoot.getElementById('my-grid');
     
     grid.addEventListener('click', this.handleClick);
     
     var json = fetch('data.json')
      .then(response => response.json())
      .then(json => grid.items = json)
      .then(json => console.log(json));
        
     grid.addEventListener('active-item-changed', function(event) {
     const item = event.detail.value;
     grid.selectedItems = item ? [item] : [];});
     console.log(grid.selectedItems);
    }
        
    handleClick() {
        console.log("Something selected");

    }
    
    
    constructor() {
      super();

    }
}
customElements.define('demo-element', DemoElement);
