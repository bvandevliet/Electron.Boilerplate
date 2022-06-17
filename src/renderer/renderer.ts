/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context, visit:
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications.
 * You can read more about security risks here:
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file,
 * open up `main.js` and enable the `nodeIntegration` flag.
 */

import './assets/style/index.scss';
import $ from 'jquery';
import MyCounter from './elements/elem-my-counter';

// Prevent default 'dragover' and 'drop' behaviour.
document.addEventListener('dragover drop', e =>
  (e.preventDefault(), e.stopPropagation(), false));

// Always copy plain text without styling.
document.addEventListener('copy', e =>
  (e.preventDefault(), e.clipboardData.setData('text/plain', document.getSelection().toString())));

// Custom web component example.
const counter = new MyCounter();
document.body.appendChild(counter);
counter.increment();

// jQuery example.
$(document.body).append('<p>This paragraph was printed using jQuery.</p>');

// eslint-disable-next-line no-console
console.log(`👋 This message is being logged by "renderer.js", included via webpack.
Using the exposed \`path\` module to show this app runs in "${window.api.path.resolve('.')}".`);