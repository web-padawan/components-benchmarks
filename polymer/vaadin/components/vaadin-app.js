import { PolymerElement, html } from '@polymer/polymer';
import '@vaadin/vaadin-accordion/vaadin-accordion.js';
import '@vaadin/vaadin-app-layout/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-details/vaadin-details.js';
import '@vaadin/vaadin-tabs/vaadin-tabs.js';

class VaadinApp extends PolymerElement {

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>

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
      </vaadin-app-layout>
    `;
  }
}

customElements.define('vaadin-app', VaadinApp);
