import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthServiceApi } from '../apis/auth.service.api';
import * as testUtil from '../../_shared/utils/testing.util';
import { mockAuthUser, mockLoginResponse } from '../apis/mocks/login.response.mock';
import { AuthUser } from '../apis/models/login.response.model';

const mockLocalStorage = () => {
  spyOn(localStorage, 'getItem').and.callThrough();
  spyOn(localStorage, 'setItem').and.callThrough();
  spyOn(localStorage, 'clear').and.callThrough();
};

describe('AuthService', () => {
  let service: AuthService;
  let authServiceApiSpy: jasmine.SpyObj<AuthServiceApi>;

  beforeEach(() => {
    testUtil.configTestBed(
      [
        AuthService,
        { provide: AuthServiceApi,
          useValue: jasmine.createSpyObj(AuthServiceApi.name, ['login', 'impersonate'])
        }
      ]
    );
    service = TestBed.inject(AuthService);
    authServiceApiSpy = TestBed.inject(AuthServiceApi) as jasmine.SpyObj<AuthServiceApi>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should login and clear storage when logout', () => {
    mockLocalStorage();
    authServiceApiSpy.login.and.returnValue(of(mockLoginResponse));
    service.login('123', '123').subscribe(response => {
      expect(response).toEqual(mockLoginResponse);
      service.logout();
      expect(service.isAuthenticated()).toBe(false);
    });
  });

  it('should load user data from storage when user logged in ', () => {
    const json = JSON.stringify(mockAuthUser);
    spyOn(localStorage, 'getItem').and.returnValue(json);
    service = new AuthService(authServiceApiSpy);
    console.log('User::', service.user);
    expect(service.user).toEqual(mockAuthUser);
    expect(service.userData()).toEqual(mockAuthUser);
    expect(service.authorizationHeader()).toContain('Bear');
    expect(service.isAuthenticated()).toEqual(true);
  });

  it('should impersonate successfully when user is org_admin', () => {
    const json = JSON.stringify(mockAuthUser);
    spyOn(localStorage, 'getItem').and.returnValue(json);
    authServiceApiSpy.impersonate.and.returnValue(of(mockLoginResponse));
    service = new AuthService(authServiceApiSpy);
    service.impersonate('123');
    expect(service.user).toEqual(mockAuthUser);
    expect(service.userData()).toEqual(mockAuthUser);
    expect(service.authorizationHeader()).toContain('Bear');
    expect(service.isAuthenticated()).toEqual(true);
  });

  it('should impersonate successfully when user is admin', () => {
    const mockUser: AuthUser = { ...mockAuthUser, org_admin: false };
    const json = JSON.stringify(mockUser);
    spyOn(localStorage, 'getItem').and.returnValue(json);
    authServiceApiSpy.impersonate.and.returnValue(of(mockLoginResponse));
    service = new AuthService(authServiceApiSpy);
    service.impersonate('123');
    expect(service.user).toEqual(mockUser);
  });

  it('should throw error when impersonate user is NOT admin', () => {
    const mockUser: AuthUser = { ...mockAuthUser, org_admin: false };
    const json = JSON.stringify(mockUser);
    spyOn(localStorage, 'getItem').and.returnValue(null);
    authServiceApiSpy.impersonate.and.returnValue(of(mockLoginResponse));
    service = new AuthService(authServiceApiSpy);
    service.impersonate('123');
    expect(service.isAuthenticated()).toEqual(false);
  });
});
