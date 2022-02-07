import { Component, OnInit } from '@angular/core';
import { LazyLoadingService } from '../Lazy-Loading/service/lazy-loading.service';

@Component({
  selector: 'app-firstpageload',
  templateUrl: './firstpageload.component.html',
  styleUrls: ['./firstpageload.component.scss']
})
export class FirstpageloadComponent implements OnInit {

  constructor(public lazyLoadingService: LazyLoadingService) { }

  ngOnInit(): void {
    this.lazyLoadingService.show_hideContent = true;
  }

}
