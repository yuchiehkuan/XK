import { AfterViewInit, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @Output() total: any;
  @Output() years: any;
  @Output() months: any;
  @Output() days: any;
  seven: any[] = [];
  eight: any[] = [];
  nine: any[] = [];
  ten: any[] = [];
  eleven: any[] = [];
  twelve: any[] = [];
  isLoading: boolean;
  items: any[] = [];
  month = [this.seven, this.eight, this.nine, this.ten, this.eleven, this.twelve];
  constructor() { }

  ngOnInit() {
    for (let i = 1 ; i <= 7 ; i++) {
      const images = 'assets/images/7/' + i + '.jpg';
      this.seven.push(images);
    }
    for (let i = 1 ; i <= 4 ; i++) {
      const images = 'assets/images/8/' + i + '.jpg';
      this.eight.push(images);
    }
    for (let i = 1 ; i <= 7 ; i++) {
      const images = 'assets/images/9/' + i + '.jpg';
      this.nine.push(images);
    }
    for (let i = 1 ; i <= 5 ; i++) {
      const images = 'assets/images/10/' + i + '.jpg';
      this.ten.push(images);
    }
    for (let i = 1 ; i <= 7 ; i++) {
      const images = 'assets/images/11/' + i + '.jpg';
      this.eleven.push(images);
    }
    for (let i = 1 ; i <= 10 ; i++) {
      const images = 'assets/images/12/' + i + '.jpg';
      this.twelve.push(images);
    }
    let j = 7;
    for (let i = 0 ; i < 6 ; i++) {
      this.items.push({
        title: i,
        date: new Date('2021-0' + j + '-01'),
        img: this.month[i]
      });
      j++;
    }
    console.log(this.items);
    if (this.items.length === 6) {
      this.isLoading = true;
    }
    this.countDays();
  }

  ngAfterViewInit(): void {
  }

  countDays() {
    this.total = new Date().getTime() - new Date('2021-07-13').getTime();
    this.total = Math.round(this.total / (1000 * 60 * 60 * 24)) + 1;
  }
}
