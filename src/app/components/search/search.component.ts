import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { NgForm } from '@angular/forms';
// import { MatDialog,MatDialogRef } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  
  constructor(private dialog: MatDialog, private router: Router)  { }

  ngOnInit() {
  }

  navigateToSearch(form : NgForm){
    console.log("navigation to search");
    let querry = new Object();
    for (var property in form.value) {
      if(form.value[property]!=''){
        querry[property] = form.value[property];
      }
    }
    let currentURL;
    //strip away everything after ?
    if(this.router.url.indexOf('?') == -1){
      currentURL = this.router.url;
    }else{
      currentURL = this.router.url.substring(0, this.router.url.indexOf('?'));
    }
    
    this.router.navigate([currentURL],{
      queryParams: querry
    });
    this.dialog.closeAll();
  }
}