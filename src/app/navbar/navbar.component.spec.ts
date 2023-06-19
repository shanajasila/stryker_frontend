import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { TicketInfoByIdComponent } from '../ticket-info-by-id/ticket-info-by-id.component';
import { ApiService } from '../api.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent,OrderDetailsComponent,TicketCardComponent,TicketInfoByIdComponent ],
      providers:[ApiService],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
