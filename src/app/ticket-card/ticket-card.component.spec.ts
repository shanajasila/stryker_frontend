import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TicketCardComponent } from './ticket-card.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { TicketInfoByIdComponent } from '../ticket-info-by-id/ticket-info-by-id.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('TicketCardComponent', () => {
  let component: TicketCardComponent;
  let fixture: ComponentFixture<TicketCardComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TicketCardComponent,
        NavbarComponent,
        OrderDetailsComponent,
        TicketInfoByIdComponent
      ],
      providers: [ApiService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch surgery details on component initialization', () => {
    const mockResponse = {
      surgery1: { id: 1, name: 'Surgery 1' },
      surgery2: { id: 2, name: 'Surgery 2' },
      surgery3: { id: 3, name: 'Surgery 3' }
    };
    spyOn(apiService, 'fetchSurgeries').and.returnValue(of(mockResponse));

    fixture.detectChanges();

    expect(apiService.fetchSurgeries).toHaveBeenCalled();
    expect(component.surgerydetails).toEqual(mockResponse);
  });

  it('should navigate to viewById page when TicketIdClick is called with a valid ticket ID', () => {
    const ticketId = '123';

    spyOn(localStorage, 'setItem').and.stub();
    spyOn(router, 'navigate');

    component.TicketIdClick(ticketId);

    expect(localStorage.setItem).toHaveBeenCalledWith('ticket_id', ticketId);
    expect(router.navigate).toHaveBeenCalledWith(['/viewById']);
  });

  it('should not navigate to viewById page if ticketId is empty', () => {
    const ticketId = '';

    spyOn(localStorage, 'setItem').and.stub();
    spyOn(router, 'navigate');

    component.TicketIdClick(ticketId);

    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should not navigate to viewById page if ticketId is undefined', () => {
    const ticketId = undefined;

    spyOn(localStorage, 'setItem').and.stub();
    spyOn(router, 'navigate');

    component.TicketIdClick(ticketId);

    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should not navigate to viewById page if ticketId is null', () => {
    const ticketId = null;

    spyOn(localStorage, 'setItem').and.stub();
    spyOn(router, 'navigate');

    component.TicketIdClick(ticketId);

    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should set priorityColor correctly', () => {
    expect(component.priorityColor['Very High']).toEqual('rgb(196, 17, 71)');
    expect(component.priorityColor['High']).toEqual('red');
    expect(component.priorityColor['Normal']).toEqual('green');
  });

  it('should handle error when fetchSurgeries fails', () => {
    const errorMessage = 'Failed to fetch surgeries.';
    spyOn(apiService, 'fetchSurgeries').and.returnValue(throwError(errorMessage));

    fixture.detectChanges();

    expect(apiService.fetchSurgeries).toHaveBeenCalled();
    expect(component.surgerydetails).toBeUndefined();
  });

  afterEach(() => {
    fixture.destroy();
  });
});

