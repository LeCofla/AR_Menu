import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.params);
  }
}
