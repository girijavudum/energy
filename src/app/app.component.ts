import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  public userArray: User[] = [];

  constructor(private http: HttpClient){
    this.http.get('assets/energy-indicators.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.userArray.push(new User(row[0], row[1], row[2], row[3], row[4],row[5],row[6]));
            }
            console.log(this.userArray);
        },
        error => {
            console.log(error);
        }
    );
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}


export class User{
  id: String;
  country: String;
  indicatorType: String;
  indicator: String;
  unit: String;
  year: String;
  value: String;

  constructor(id: String, country: String,
    indicatorType: String,
    indicator: String,
    unit: String,
    year: String,
    value: String){
    this.id = id;
    this.country=country;
    this.indicatorType=indicatorType;
    this.indicator=indicator;
    this.unit=unit;
    this.year=year;
    this.value=value;
  }
}