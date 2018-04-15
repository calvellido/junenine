
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
  panelStateOpen = true;

  formData = {
    date: '2018-06-09',
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // this._input.nativeElement.focus();
  }

  dateChangeHandler(e: Event) { }

}
