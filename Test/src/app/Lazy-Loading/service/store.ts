export interface State {
  loading: boolean;
  error: Error | AppError;
  projectDetails:any;
}

export interface AppError {

  // Depricated
  error?: string;

  // Depricated
  message?: string;

  msg?: string;
  code?: any;
}
