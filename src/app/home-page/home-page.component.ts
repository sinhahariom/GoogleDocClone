import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public router : Router, private dataPassService:DatapassService) { 
    dataPassService.subscribe(this.onDocSaved.bind(this));

   }
  docData : any = [
    {
      id:1,
      title:"My Doc 1",
      content :"Sample Content",
    },
    {
      id:2,
      title:"My Doc 2",
      content :"Sample Content",
    },
     {
      id:3,
      title:"My Doc 3",
      content :"Sample Content",

    },
     {
      id:4,
      title:"My Doc 4",
      content :"Sample Content",

    },
    {
      id:5,
      title:"My Doc 5",
      content :"Sample Content",

    },
    {
      id:6,
      title:"My Doc 6",
      content :"Sample Content",

    },
     {
      id:7,
      title:"My Doc 7",
      content :"Sample Content",

    },
     {
      id:8,
      title:"My Doc 8",
      content :"Sample Content",

    }

  ];

  untitledDoc : any = {
    id:0,
    title:"Untitled",
    content:""
  }
  ngOnInit(): void {
  }

  createNewDoc(docPassed){
    if(docPassed === null)
      this.dataPassService.send("doc",this.untitledDoc);
    else{
      this.dataPassService.send("doc",docPassed);
    }
    this.router.navigateByUrl('/editor');
  }

  onDocSaved(event){
    if(event && event.name==="docSaved"){
      console.log(event.data);
    }
  }

}
