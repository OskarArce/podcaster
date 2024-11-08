import { ofetch } from 'ofetch';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL!;
const BASE_URL = 'https://itunes.apple.com';
const RESET_SESSION_ERRORS: number[] = [401, 403] as const;

export const getDefaultOptions = ({
  baseURL,
}: {
  baseURL?: string;
} = {}) => ({
  baseURL: baseURL ?? BASE_URL,
  async onResponseError({ response }: { response: { status: number } }) {
    const resetSession = RESET_SESSION_ERRORS.includes(response.status);

    if (resetSession) {
      console.log('Unauthorized error');
    } else {
      console.log('Unexpected error');
    }
  },
});

const createFetch = () => ofetch.create(getDefaultOptions());

export const apiFetch = createFetch();
