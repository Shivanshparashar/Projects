import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  @Input() companyName: string = 'Stationery World';
  year: number = new Date().getFullYear();
}
