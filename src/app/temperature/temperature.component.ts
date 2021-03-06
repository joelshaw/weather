import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  constructor(private dataService: DataService) { }

  temps = {
    current: '54',
    high: '70',
    low: '32'
  };

  ngOnInit() {
    
  }



}
