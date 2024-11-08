export interface ApiResponse<T> {
  data: T | null;
  error: unknown | null;
}

export const createApiResponse = async <T, U>(
  response: Promise<U>,
  parser: (data: U) => T
): Promise<ApiResponse<T>> => {
  const apiResponse: ApiResponse<T> = {
    data: null,
    error: null,
  };

  try {
    apiResponse.data = parser(await response);
  } catch (error) {
    apiResponse.error = error;
  }

  return apiResponse;
};
