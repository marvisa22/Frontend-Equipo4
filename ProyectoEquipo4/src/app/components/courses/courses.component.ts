import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { response } from 'src/app/models/responsePayPal';
import { link } from 'src/app/models/link';

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {
  li: link = new link("","","");
  data: response = new response("","", [this.li]);
  str: string = "";


  constructor(private apiService: ApiService){
  }
  

  async callApi() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(data.links[1].href) ;
      this.str =data.links[1].href;
    })
    await delay(5000);
    return window.location.href=this.str;
  }

  

}
