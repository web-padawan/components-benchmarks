import './components/vaadin-app.js';
import * as bench from '/bench.js';

const app = document.createElement('vaadin-app');
document.body.appendChild(app);

requestAnimationFrame(() => bench.stop());
