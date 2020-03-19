import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-accordion/theme/material/vaadin-accordion.js';
import '@vaadin/vaadin-app-layout/theme/material/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/theme/material/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-details/theme/material/vaadin-details.js';
import '@vaadin/vaadin-radio-button/theme/material/vaadin-radio-group.js';
import '@vaadin/vaadin-tabs/theme/material/vaadin-tabs.js';

class VaadinApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
      }
    `;
  }

  render() {
    return html`
      <vaadin-app-layout>
        <vaadin-drawer-toggle slot="navbar touch-optimized"></vaadin-drawer-toggle>
        <h3 slot="navbar touch-optimized">Vaadin app</h3>
        <vaadin-tabs orientation="vertical" slot="drawer">
          <vaadin-tab>Tab 1</vaadin-tab>
          <vaadin-tab>Tab 2</vaadin-tab>
          <vaadin-tab>Tab 3</vaadin-tab>
        </vaadin-tabs>
        <vaadin-details opened>
          <div slot="summary">Details</div>
          Details content
        </vaadin-details>

        <vaadin-accordion>
          <vaadin-accordion-panel theme="filled">
            <div slot="summary">Accordion Panel 1</div>
            <div>Panel content</div>
          </vaadin-accordion-panel>
          <vaadin-accordion-panel theme="filled">
            <div slot="summary">Accordion Panel 2</div>
            <div>Panel content</div>
          </vaadin-accordion-panel>
        </vaadin-accordion>

        <vaadin-radio-group label="Radio group">
          <vaadin-radio-button value="1">Option 1</vaadin-radio-button>
          <vaadin-radio-button value="1">Option 2</vaadin-radio-button>
          <vaadin-radio-button value="1">Option 3</vaadin-radio-button>
        </vaadin-radio-group>
      </vaadin-app-layout>
    `;
  }
}

customElements.define('vaadin-app', VaadinApp);
