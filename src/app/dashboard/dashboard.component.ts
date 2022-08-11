import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
 countries=['algeria','bahrain','egypt','iraq','jorda','kuwait','lebanon','libya','morocco','oman','qatar','saudi arabia','syria','tanisia','uae','west bank and gaza','yemen'];
 indicatorTypes=['Economic indicators','Energy indicators','Oil indicators','Gas indicators','Electricity indicators','Energy Efficiency indicator'];
 years=['2010','2011','2012','2013','2014','2015','2016','2017'];
 selectval:string='';
 salesData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
    { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
    { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
   
  ],
};
chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Monthly Sales Data',
    },
  },
};
  ngOnInit(): void {
  }

}