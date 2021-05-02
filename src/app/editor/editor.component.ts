import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(public router : Router, private dataPassService:DatapassService) { 
    dataPassService.subscribe(this.onDocClick.bind(this));
   }
  public doc : any = {};

  ngOnInit(): void {
  }
  public content :any = "Untitled";
  public title :any = "";
  
  home(){
    this.router.navigateByUrl('/');
  }

  onDocClick(event){
    if(event && event.name==="doc"){
      this.doc = event.data;
    }
  }

  saveDoc(doc){
    this.doc = doc;
    this.dataPassService.send("docSaved",this.doc);
    this.router.navigateByUrl('/');
  }
}
