import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent {
  @Input() product: any;
  @Output() closeButton = new EventEmitter<boolean>();
}
