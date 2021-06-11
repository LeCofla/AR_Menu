import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  tab;
  currentTab;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.tab = this.route.snapshot.paramMap.get('tab');
    this.currentTab = this.router.url;

    this.router.events.subscribe((val) => {
      this.currentTab = this.router.url;
      if (this.currentTab === '/home') {
        document.getElementById('menu').classList.add('ion-hide');
      } else {
        document.getElementById('menu').classList.remove('ion-hide');
      }
    });

  }


}
