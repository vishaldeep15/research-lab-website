import { TestBed } from '@angular/core/testing';

import { ZoteroLoadService } from './zotero-load.service';

describe('ZoteroLoadService', () => {
  let service: ZoteroLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoteroLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
