import { TestBed } from '@angular/core/testing';

import { PrinterActionsService } from './printer-actions.service';

describe('PrinterActionsService', () => {
  let service: PrinterActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
