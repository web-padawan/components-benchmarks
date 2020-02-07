import { PolymerElement, html } from '@polymer/polymer';
import '@vaadin/vaadin-accordion/vaadin-accordion.js';
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

      <vaadin-tabs>
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
    `;
  }
}

customElements.define('vaadin-app', VaadinApp);
