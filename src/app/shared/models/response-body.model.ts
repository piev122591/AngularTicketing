export interface ResponseBody<T> {
  data: T;
  errorMessage?: string;
  isSuccess: boolean;
  maxItems?: number;
  maxPages?: number;
  currentPage?: number;
}
