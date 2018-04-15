import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material';

import { NguCarousel, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit, AfterViewInit {
  @ViewChild('elementToFocus') input: ElementRef;
  completed = false;
  success = false;
  modified = false;
  imgags: string[];
  carouselBanner: NguCarousel;
  carouselBannerItems: Array<any> = [];

  formData = {
    name: '',
    telephone: '',
    date: '2018-06-09',
    attendance: '',
    bus: '',
    comments: ''
  };

  constructor() {}

  ngOnInit() {
    this.imgags = [
      'assets/paris-1.jpg',
      'assets/roma-1.jpg',
      'assets/mykonos-1.jpg',
      'assets/istanbul-1.jpg',
      'assets/paris-2.jpg',
      'assets/roma-2.jpg',
      'assets/mykonos-2.jpg'
    ];

    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 600,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.25);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background: rgba(255, 255, 255, 0.55);
              width: 10px;
          }`
      },
      load: 2,
      custom: 'banner',
      touch: true,
      loop: true,
      easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };

    this.carouselBannerLoad();
  }

  ngAfterViewInit() {
    // this._input.nativeElement.focus();
  }

  carouselBannerLoad() {
    const len = this.carouselBannerItems.length;
    if (len <= 4) {
      for (let i = len; i < len + 5; i++) {
        this.carouselBannerItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }

  attendanceChangeHandler(value) {
    if (value === 'false') {
      this.formData.bus = 'false';
    }
  }

  dateChangeHandler(e: Event) {
    this.formData.date = '2018-06-09';
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: NguCarouselStore) {
    // console.log(data);
  }

  isInvalid() {
    return (
      this.formData.name === '' ||
      this.formData.telephone === '' ||
      this.formData.attendance === '' ||
      this.formData.bus === ''
    );
  }

  async handleClick() {
    const data = (({ name, telephone, attendance, bus, comments }) => ({
      name,
      telephone,
      attendance,
      bus,
      comments
    }))(this.formData);

    const dbData = await fetch('http://212.237.26.68:1337/guest', {})
      .then(async function(response) {
        const jsonData = await response.json();
        return jsonData;
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });

    const itemFound = dbData.find(elem => elem.telephone === data.telephone);

    if (!itemFound) {
      this.success = await fetch('http://212.237.26.68:1337/guest', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(function(response) {
          return true;
        })
        .catch(function(error) {
          console.log('Request failed', error);
          return false;
        });
    } else {
      this.success = await fetch(
        `http://212.237.26.68:1337/guest/${itemFound.id}`,
        {
          method: 'put',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
        .then(response => {
          this.modified = true;
          return true;
        })
        .catch(function(error) {
          console.log('Request failed', error);
          return false;
        });
    }
    this.completed = true;
  }
}
