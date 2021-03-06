import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  seven: any[] = [];
  eight: any[] = [];
  nine: any[] = [];
  ten: any[] = [];
  eleven: any[] = [];
  twelve: any[] = [];
  isLoading: boolean;
  items: any[] = [];
  id: number;
  contents: any[] = [];
  month = [this.seven, this.eight, this.nine, this.ten, this.eleven, this.twelve];
  public config: SwiperConfigInterface = {
    observer: true,
    observeParents: true,
    parallax: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    direction: 'horizontal',
    slidesPerView: 1,
    // spaceBetween: 300,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next .swiper-button-black',
      prevEl: '.swiper-button-prev .swiper-button-black',
    },
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false
    },
  };
  constructor(
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.setConstens();
    this.id = Number(this.route.snapshot.params.id);

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
        title: '2021-7',
        date: new Date('2021-0' + j + '-01'),
        img: this.month[i],
        content: this.contents[i]
      });
      j++;
    }
    console.log(this.items);
    if (this.items.length === 6) {
      this.isLoading = true;
    }
    console.log(this.items[this.id].content);

  }

  goBack(): void {
    this.location.back();
  }

  setConstens() {
    let tem = '<p>??????????????????????????????????????????????????????????????????</p><p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????...</p>';
    this.contents.push(tem);
    tem = '<p>???????????????????????????????????????????????????</p><p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????...</p>';
    this.contents.push(tem);
    tem = '<p>??????????????????????????????</p><p>?????????????????????????????????????????????????????????????????????????????????????????????????????????...</p>';
    this.contents.push(tem);
    tem = '<p>???????????????????????????...</p><p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????...</p>';
    this.contents.push(tem);
    tem = '<p>11??????????????????????????????????????????????????????????????????...</p><p>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????...</p>';
    this.contents.push(tem);
    tem = '<p>?????????????????????...</p><p>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????....</p>';
    this.contents.push(tem);
  }
}

