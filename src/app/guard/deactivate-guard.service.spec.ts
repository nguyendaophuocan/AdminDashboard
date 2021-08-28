import { TestBed } from '@angular/core/testing';
import { DeactivateGuard } from './deactivate-guard.service';
import * as testUtil from '../../_shared/utils/testing.util';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('Deactivate Guard', () => {
  let service: DeactivateGuard;

  beforeEach(() => {
    testUtil.configTestBed(
      [
        DeactivateGuard,
      ]
    );
    service = TestBed.inject(DeactivateGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return deactivate', () => {
    const component = {
      canDeactivate: jasmine.createSpy('canDeactivate')
    };
    service.canDeactivate(component, new ActivatedRouteSnapshot(), null as any);
    expect(component.canDeactivate).toHaveBeenCalled();
  });

  it('should execute deactivate and return true', () => {
    const component = {
      canDeactivate: null
    };
    const result = service.canDeactivate(component as any, new ActivatedRouteSnapshot(), null as any);
    expect(result).toBeTruthy();
  });
});
