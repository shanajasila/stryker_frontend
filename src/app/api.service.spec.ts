import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch consumables', () => {
    const mockResponse = { /* mock response data for consumables */ };

    apiService.fetchConsumables().subscribe((response: any) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/viewConsumables');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch instrument set', () => {
    const mockResponse = { /* mock response data for instrument set */ };

    apiService.fetchInstrumentSet().subscribe((response: any) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/viewInstrumentSet');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch power tool set', () => {
    const mockResponse = { /* mock response data for power tool set */ };

    apiService.fetchPowerToolSet().subscribe((response: any) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/viewPowerToolSet');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch speciality attachments', () => {
    const mockResponse = { /* mock response data for speciality attachments */ };

    apiService.fetchSpecialityAttachments().subscribe((response: any) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/viewSpeciality');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});


