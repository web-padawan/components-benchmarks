import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-accordion/vaadin-accordion.js';
import '@vaadin/vaadin-details/vaadin-details.js';
import '@vaadin/vaadin-tabs/vaadin-tabs.js';

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
