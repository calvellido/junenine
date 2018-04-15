
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit, AfterViewInit {
  @ViewChild('elementToFocus') input: ElementRef;
  date = new FormControl(new Date());
  panelStateOpen = true;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // this._input.nativeElement.focus();
  }

  openCalendar(picker: MatDatepicker<Date>) {
    picker.open();
    setTimeout(() => this.input.nativeElement.focus());
  }

  closeCalendar(e) {
    setTimeout(() => this.input.nativeElement.blur());
  }
}
