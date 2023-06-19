import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TicketInfoByIdComponent } from './ticket-info-by-id.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { ApiService } from '../api.service';
import { of, throwError } from 'rxjs';

describe('TicketInfoByIdComponent', () => {
  let component: TicketInfoByIdComponent;
  let fixture: ComponentFixture<TicketInfoByIdComponent>;
  let apiService: ApiService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TicketInfoByIdComponent, NavbarComponent, OrderDetailsComponent, TicketCardComponent],
      providers: [ApiService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketInfoByIdComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);

    spyOn(localStorage, 'getItem').and.returnValue('123');
    spyOn(apiService, 'fetchTicketInformation').and.returnValue(of({}));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch ticket information on component initialization', () => {
    expect(localStorage.getItem).toHaveBeenCalledWith('ticket_id');
    expect(apiService.fetchTicketInformation).toHaveBeenCalledWith('123');
  });

  it('should handle error when fetchTicketInformation fails', () => {
    const errorMessage = 'Failed to fetch ticket information.';
    spyOn(apiService, 'fetchTicketInformation').and.returnValue(throwError(errorMessage));

    fixture.detectChanges();

    expect(apiService.fetchTicketInformation).toHaveBeenCalled();
    expect(component.data).toBeUndefined();
  });

  it('should handle the response and assign data', () => {
    const mockResponse = { /* mock response data */ };
    spyOn(apiService, 'fetchTicketInformation').and.returnValue(of(mockResponse));

    fixture.detectChanges(); // Trigger component initialization

    expect(component.data).toEqual(mockResponse);
  });
});
