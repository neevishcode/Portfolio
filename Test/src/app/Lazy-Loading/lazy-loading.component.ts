import { Component, OnInit } from '@angular/core';
import { Table } from './service/table.model';
import { LazyLoadingService } from './service/lazy-loading.service';
import { Subscription, Subscriber } from 'rxjs';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements OnInit {

  dataTable: Table | undefined;
  data:any;
  cols:any;
  projectOwner:any;
  subscribe: Subscription | undefined;
  constructor(private lazyLoadingService: LazyLoadingService) { }

  ngOnInit(){
    this.lazyLoadingService.show_hideContent = false;
    this.Onloaded();
    this.cols =[
        { field: 'check', header: 'CheckOption', action: true, width: '20', align: 'center' },
        { field: 'projectName', header: 'PPROJECT NAME', sortable: true, action: true, width: '150', align: 'left', color: 'blue'},
        { field: 'domainName', header: 'DOMAIN', sortable: true, action: true, width: '100', align: 'left'  },
        { field: 'projectOwner', header: 'RESOURCE ASSIGNED', sortable: true, action: true, width: '150', align: 'left'  },
        { field: 'projectStatus', header: 'STATUS', sortable: true, action: true, width: '100', align: 'left'  },
        { field: 'projectRisk', header: 'PROJECT RISK', sortable: true, action: true, width: '100', align: 'right'  },
        { field: 'projectStatus', header: 'PROJECT SCHEDULE', sortable: true, action: true, width: '120', align: 'left'  }
    ]
  }
  Onloaded(){
    this.subscribe =this.lazyLoadingService.load().subscribe(res =>{
      this.data = res.projectDetails;
      // this.projectOwner = this.data.projectOwner['empName'];
      console.log("Response =======", this.data);
    })
  }
  customSortOnColumns(event:any, value:any){

  }
  ngOnDestroy(){
    this.subscribe?.unsubscribe();
  }
}
