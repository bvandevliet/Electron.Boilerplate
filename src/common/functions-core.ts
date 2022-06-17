// Logic in the `common` folder is intended to be directly importable into both the main and renderer environments.
// This is different from the ContextBridge API and therefore this code cannot refer to Node modules.

/**
 * Test if a value is empty-ish.
 *
 * @param input A value to test.
 */
export const isEmpty = (input: any) =>
  input === undefined || input === null || (typeof input === 'string' && input?.trim() === '');

/**
 * Sanitizes a string key.
 *
 * @param input String key.
 */
export const sanitizeKey = (input: string) =>
  // eslint-disable-next-line no-useless-escape
  input?.replace(/[^a-z0-9_\-]/giu, '');

/**
 * Sanitizes a string for use in a filename.
 *
 * @param input The input string.
 */
export const sanitizeFilename = (input: string) =>
  input?.replace(/[\\/:*?"<>]/gu, '');

/**
 * Escapes a string to use in a regular expression.
 *
 * @param input The string.
 */
export const regexEscape = (input: string) =>
  input?.replace(/([\\*+?|{[(,)^$.#])/gu, '\\$1').replace(/\s/gu, '\\s');

/**
 * Encodes a text string as a valid component of a URI.
 *
 * @param uriComponent A value representing an encoded URI component.
 */
export const escapeURIComponent = (uriComponent: string) =>
  encodeURIComponent(
    uriComponent
      .replace(/\\/gu, '/')
      .replace(/%/gu, '%25'),
  );

/**
 * Escapes a string and optional query arguments to use as URL in `src` or `href` attributes.
 *
 * @param url       The base URL including the protocol, e.g. `https://`.
 * @param queryArgs Query arguments. Optional.
 */
export const escapeURI = (url: string, queryArgs: Record<string, string> = {}) =>
{
  const queryArr: string[] = [];

  for (const [key, value] of Object.entries(queryArgs))
  {
    queryArr.push(`${escapeURIComponent(key)}=${escapeURIComponent(value)}`);
  }

  const queryStr = queryArr.length ? `?${queryArr.join('&')}` : '';

  const [, protocol, ...rest] = url.split(/(^[^:]*:\/*)/u);

  return `${protocol}${rest.join().split(/[\\/]/gu).map(escapeURIComponent).join('/')}${queryStr}`;
};

/**
 * Like `Array.map()` but for object types.
 *
 * @param input    The object to map.
 * @param callback Called one time for each element in the object.
 */
export const mapObject = <T> (input: Record<any, T>, callback: (value: T) => any): Record<any, any> =>
{
  for (const [key, value] of Object.entries(input))
  {
    input[key] = callback(value);
  }

  return input;
};

/**
 * Merge user defined default values with an object.
 *
 * @param input    The object to merge default values with.
 * @param defaults Object that serves as the defaults.
 */
export const parseArgs = <T> (input: T, defaults: T): T =>
{
  for (const [key, value] of Object.entries(defaults))
  {
    if (isEmpty((input as Record<any, unknown>)[key])) { (input as Record<any, unknown>)[key] = value; }
  }

  return input;
};

/**
 * Returns an array of elements split into two groups,
 * the first of which contains elements predicate returns truthy for,
 * the second of which contains elements predicate returns falsey for.
 *
 * @param array     The array to split.
 * @param predicate Called one time for each element in the array.
 *
 * @link https://stackoverflow.com/a/64093016
 */
export const partitionArr = <T> (array: T[], predicate: (value: T, index: number) => boolean): [T[], T[]] =>
  array.reduce((prev, cur, index) => (prev[Number(!predicate(cur, index))].push(cur), prev), [[], []]);