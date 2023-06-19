import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderDetailsComponent } from './order-details.component';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;
  let apiService: ApiService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailsComponent],
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    spyOn(console, 'log'); // Spy on console.log to track its usage
  });

  it('should create OrderDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch power tool set on powerToolClick', () => {
    const mockResponse = ['power tool 1', 'power tool 2'];

    spyOn(apiService, 'fetchPowerToolSet').and.returnValue(of(mockResponse));

    component.powerToolClick();

    expect(apiService.fetchPowerToolSet).toHaveBeenCalled();
    expect(component.powerTool).toEqual(mockResponse);
    expect(console.log).toHaveBeenCalledWith(mockResponse);
  });

  it('should fetch instrument set on instrumentClick', () => {
    const mockResponse = ['instrument 1', 'instrument 2'];

    spyOn(apiService, 'fetchInstrumentSet').and.returnValue(of(mockResponse));

    component.instrumentClick();

    expect(apiService.fetchInstrumentSet).toHaveBeenCalled();
    expect(component.instrumentSet).toEqual(mockResponse);
    expect(console.log).toHaveBeenCalledWith(mockResponse);
  });

  it('should fetch consumables on consumablesClick', () => {
    const mockResponse = ['consumable 1', 'consumable 2'];

    spyOn(apiService, 'fetchConsumables').and.returnValue(of(mockResponse));

    component.consumablesClick();

    expect(apiService.fetchConsumables).toHaveBeenCalled();
    expect(component.consumables).toEqual(mockResponse);
    expect(console.log).toHaveBeenCalledWith(mockResponse);
  });

  it('should fetch speciality attachments on specialityClick', () => {
    const mockResponse = ['attachment 1', 'attachment 2'];

    spyOn(apiService, 'fetchSpecialityAttachments').and.returnValue(of(mockResponse));

    component.specialityClick();

    expect(apiService.fetchSpecialityAttachments).toHaveBeenCalled();
    expect(component.speciality).toEqual(mockResponse);
    expect(console.log).toHaveBeenCalledWith(mockResponse);
  });
});

