import { HttpInterceptorFn } from '@angular/common/http';

export const homeInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken =
    'BQC9edBoX-Q5Y8GHVQYonosQALoUiskbq9iZeEocuwf_XDSkqr4HzGwBQnuqwRs2uhjhchumMtVo93JfQvUnA1NlrgpHRB_JhRBNIEtBd61gIa_9UMw';

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return next(authReq);
};
