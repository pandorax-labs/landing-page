export type RedirectError = {
    name: 'RedirectError';
    message: 'You are being redirected to the login page. Please sign in to continue.';
    statusCode: 302;
    redirectUrl: string;
    timestamp: Date;
  }
  
  export type NotFoundError = {
    name: 'NotFoundError';
    message: 'The requested resource could not be found. Please check the URL and try again.';
    statusCode: 404;
    requestedPath: string;
    timestamp: Date;
  }