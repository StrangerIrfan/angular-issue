import { Component, OnInit } from '@angular/core';
import { TypicodeDataService } from './../../services/typicode-data.service';

@Component({
  selector: 'app-section-nine',
  templateUrl: './section-nine.component.html',
  styleUrls: ['./section-nine.component.scss']
})
export class SectionNineComponent implements OnInit {
apiUsers : any;

 constructor(private service: TypicodeDataService) {

 }

 ngOnInit(){
  this.service.getUsers()
  .subscribe( response => {
    this.apiUsers = response;
  });

}

 createPostTitle(titleInput: HTMLInputElement){   
    let mypost = {title: titleInput.value };
    this.service.createUsers(titleInput)
        .subscribe( response=> {                
          this.apiUsers.splice(0, 0, mypost);
          //mypost['id'] = response.id;
          titleInput.value = '';
          console.log(response);
    });
 }

//  updatePostTitle(mypost){
//    this.service.updateUser(mypost)
//    .subscribe ( response => {
//      this.apiUsers = response;
//      console.log(response);
//    });
//  }

}
