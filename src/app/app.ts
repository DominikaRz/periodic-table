import { Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { PeriodicElementStore } from './store/element.store';

//Angular Materials
import { ElementsTable } from "./components/elements-table/elements-table";
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [JsonPipe, ElementsTable, MatProgressSpinner, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected title = 'periodic-table';

  //inject the store
  store = inject(PeriodicElementStore);

  //loading all the elements
  async loadElements() {
    await this.store.loadAll();
  }

  ngOnInit() {
    this.loadElements().then(() => console.log("Elements loaded!"));
  }

}

