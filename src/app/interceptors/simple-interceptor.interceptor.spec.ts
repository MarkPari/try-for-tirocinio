import { TestBed } from '@angular/core/testing';

import { SimpleInterceptorInterceptor } from './simple-interceptor.interceptor';

describe('SimpleInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SimpleInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SimpleInterceptorInterceptor = TestBed.inject(SimpleInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
