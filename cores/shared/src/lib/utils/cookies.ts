export const SESSION_OPTIONS = {
  path: '/',
  maxAgeInSeconds: 60 * 60 * 24,
} as const;

export const get = <T>(name: string): T | null => {
  const value = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
  return (
    value && typeof value !== 'string' ? JSON.parse(value) : value
  ) as T | null;
};

export const set = <T>(
  name: string,
  value: T,
  options?: {
    expires?: Date;
    crossOrigin?: boolean;
    path?: string;
    domain?: string;
    maxAgeInSeconds?: number;
  }
): void => {
  const cookie = [
    `${name}=${typeof value === 'string' ? value : JSON.stringify(value)}`,
    'Secure',
  ];

  if (options?.expires) cookie.push(`expires=${options.expires.toUTCString()}`);
  if (options?.crossOrigin) cookie.push('SameSite=None');
  if (options?.path) cookie.push(`path=${options.path}`);
  if (options?.domain) cookie.push(`domain=${options.domain}`);
  if (options?.maxAgeInSeconds)
    cookie.push(`max-age=${options.maxAgeInSeconds}`);

  document.cookie = `${cookie.join('; ')}; Secure`;
};

export const reset = (
  name: string,
  options?: {
    crossOrigin?: boolean;
    path?: string;
    domain?: string;
  }
): void => {
  const cookie = [`${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`];

  if (options?.crossOrigin) cookie.push('SameSite=None');
  if (options?.path) cookie.push(`path=${options.path}`);
  if (options?.domain) cookie.push(`domain=${options.domain}`);

  document.cookie = `${cookie.join('; ')}; Secure`;
};

export const check = (name: string): boolean => {
  return document.cookie
    .split(';')
    .some((item) => item.trim().startsWith(`${name}=`));
};

/* eslint-disable @typescript-eslint/no-empty-function -- NO */
export const getCookie = typeof document === 'undefined' ? () => {} : get;
export const setCookie = typeof document === 'undefined' ? () => {} : set;
export const resetCookie = typeof document === 'undefined' ? () => {} : reset;
export const checkCookie = typeof document === 'undefined' ? () => {} : check;
