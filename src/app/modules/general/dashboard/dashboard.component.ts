import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { URLLoader } from 'src/app/configs/URLLoader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends URLLoader implements OnInit {

  constructor() { super() }
  ngOnInit(): void {
   
    let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let data2 = [40000, 12000, 54000, 23000, 65000, 55000, 67000];
    let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var ctx1 = document.getElementsByClassName("revenue-chart");
    var ctx2 = document.getElementsByClassName("expense-chart");
    this.renderChart(data, labels,ctx1,'rgb(255, 99, 132)');
    this.renderChart(data2, labels, ctx2, 'rgb(128, 99, 132)');
    super.show('Computer Project', 'Cette application est en cours de développment.', 'info')
  }


   renderChart(data, labels,ctx,color) {
   
   
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: data,
                backgroundColor: color ,
                borderColor: color,
            }]
        },
    });
}

}
