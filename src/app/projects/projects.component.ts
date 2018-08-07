import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  projects: string [];

	ngOnInit () {
    	this.httpService.get('./assets/db/projects.json').subscribe(
    	data => {
    		this.projects = data as string [];
    	},
    	(err: HttpErrorResponse) => {
    		console.log (err.message);
    	});
	}
}