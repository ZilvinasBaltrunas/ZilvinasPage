import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
	works: string [];

	ngOnInit () {
    	this.httpService.get('./assets/db/works.json').subscribe(
    	data => {
    		this.works = data as string [];
    	},
    	(err: HttpErrorResponse) => {
    		console.log (err.message);
    	});
	}
}