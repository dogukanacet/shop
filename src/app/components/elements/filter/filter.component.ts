import { Component, OnInit, Input } from '@angular/core';
import FilterModel from 'src/app/models/filterModel';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() model: FilterModel

  constructor() { }

  ngOnInit() {
  }

}
