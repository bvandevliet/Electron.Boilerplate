/**
 * All of the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 *
 * See the Electron documentation for details on how to use preload scripts:
 * https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
 */

import { contextBridge } from 'electron';
import path from 'path';

/**
 * The APIs exposed to the global Window object.
 */
export const API =
{
  path,
};

// Expose the API using ContextBridge, read the docs for more details:
// https://www.electronjs.org/docs/latest/tutorial/context-isolation
contextBridge.exposeInMainWorld('api', API);