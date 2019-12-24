import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';


class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
          display: inline-block;
        }
        iron-icon {
          fill: rgba(0,0,0,0);
          stroke: currentcolor;
        }
        :host([pressed]) iron-icon {
          fill: currentcolor;
        }
      </style>
  
      <!-- shadow DOM goes here -->
      <iron-icon icon="[[toggleIcon]]"> </iron-icon>
      <vaadin-grid theme="row-dividers" column-reordering-allowed multi-sort>
        <vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
        <vaadin-grid-sort-column width="9em" path="firstName"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column width="9em" path="lastName"></vaadin-grid-sort-column>
      </vaadin-grid>
      <script>
        // Customize the "Address" column's renderer

        // Populate the grid with data
        const grid = document.querySelector('vaadin-grid');
        fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
          .then(res => res.json())
          .then(json => grid.items = json.result);
      </script>

    `;
  }
    
    static get properties() {
      return {
        toggleIcon: {
          type: String
        }
      };
    }
  constructor() {
    super();
  }
}

customElements.define('icon-toggle', IconToggle);
