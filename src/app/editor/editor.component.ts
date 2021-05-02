import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  public qwert :any = "The first Text";
  public title :any = "My Doc";
  
  home(){
    this.router.navigateByUrl('/');
  }
}
