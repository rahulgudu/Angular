import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ChartModule],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  salesChartData: any;
  salesChartOptions: any;

  emailChartData: any;
  emailChartOptions: any;

  heatmap: string[] = [];

  ngOnInit() {

    this.salesChartData = {
      labels: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14'],
      datasets: [
        {
          data: [12,30,15,28,5,32,26,20,8,35,18,22,19,30],
          backgroundColor: '#3b82f6',
          borderRadius: 10,
          barThickness: 12
        }
      ]
    };

    this.salesChartOptions = {
      plugins:{ legend:{ display:false }},
      scales:{
        x:{ grid:{ display:false }},
        y:{ display:false }
      }
    };

    this.emailChartData = {
      labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      datasets:[
        {
          label:'Open Rate',
          data:[100,300,350,480,430,350,380],
          borderColor:'#3b82f6',
          tension:0.4
        },
        {
          label:'CTR',
          data:[50,490,470,420,410,280,290],
          borderColor:'#f97316',
          tension:0.4
        }
      ]
    };

    this.emailChartOptions = {
      responsive:true,
      plugins:{ legend:{ display:false }}
    };

    const colors = [
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500'
    ];

    for(let i=0;i<72;i++){
      this.heatmap.push(colors[Math.floor(Math.random()*colors.length)]);
    }

  }
}