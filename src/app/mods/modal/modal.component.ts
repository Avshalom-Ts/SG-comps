import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
    //Help to Append the Modal window to the body
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    //Remove the Append Modal window from the body
    this.el.nativeElement.remove();
  }
}
