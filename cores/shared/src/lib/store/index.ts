export type QueryError = Record<string, unknown> | null;

export interface Query<T> {
  loading: boolean;
  error: QueryError;
  data: T | null;
}

export * from './create-store';
export * from './create-store-async';
export * from './create-store-persistent';
export * from './create-store-filter';
