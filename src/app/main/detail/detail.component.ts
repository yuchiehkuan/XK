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
    let tem = '<p>我們再一起的第一個月，第一次約會就被撲倒了！</p><p>第一次有人專程為我安排一天的生日行程，去了我最喜歡逛的夜市、去了我好久沒去的海邊，遇見你大概是我最大的幸運了...</p>';
    this.contents.push(tem);
    tem = '<p>再一起的第二個月，終於被我榨乾了！</p><p>不意外的我們又去逛了夜市，可惜天公不作美，居然給我下雨！總覺得每次都被餵飽飽的，怎麼這麼性福...</p>';
    this.contents.push(tem);
    tem = '<p>我們再一起三個月了！</p><p>辛苦寶貝從台南騎到雲林，再帶我一路吃回去。還有探訪古城暨安平美食一日遊...</p>';
    this.contents.push(tem);
    tem = '<p>來到相伴的第四個月...</p><p>錫鼓的腿麻我永遠無法忘懷，再次見證了我的拍照功力有多厲害！好久沒看煙火了，專程跑到高雄賞煙火，還吃了朝思暮想的楊寶寶...</p>';
    this.contents.push(tem);
    tem = '<p>11月是寶貝的月份，也是我們手牽手走過的第五個月...</p><p>起了大早吃了超好吃的牛肉湯，逛了一整天的周年慶，還吃了從沒吃過的海底撈，慶祝寶貝生日月...</p>';
    this.contents.push(tem);
    tem = '<p>即將邁入半年了...</p><p>我的專屬熊貓來了！又驚又喜，居然趁難得的休假偷偷跑來送暖，真的是又一次讓我心動了，心苦北鼻這樣奔波，還帶我吃吃喝喝....</p>';
    this.contents.push(tem);
  }
}

