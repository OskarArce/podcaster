import type { QueryParams } from '../model';

export const createUrl = (
  path: string,
  options?: {
    queryParams?: QueryParams;
  }
): string => {
  const url = new URL(path, window.location.origin);
  if (options?.queryParams)
    Object.entries(options?.queryParams).forEach(([key, value]) => {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((v) => {
            url.searchParams.append(key, v);
          });
        } else {
          url.searchParams.set(key, value ?? '');
        }
      }
    });

  return `${path}?${url.searchParams.toString()}`;
};
