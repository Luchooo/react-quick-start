type BaseRequest<T> = (params?: T) => Promise<Response>;

type SuccessResponse<V> = {
  code: "success";
  data: V;
};

type ErrorResponse<E = Error> = {
  code: "error";
  error: E;
};

export type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>;

export const requestHandler =
  <T, V, E = Error>(request: BaseRequest<T>) =>
  async (params?: T): BaseResponse<V, E> => {
    try {
      const response = await request(params);
      const jsonData = await response.json();
      if (response.ok) {
        return { code: "success", data: jsonData };
      } else {
        throw new Error(jsonData.message || "Request failed");
      }
    } catch (e) {
      return { code: "error", error: e as E };
    }
  };
