import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  // Inputs:
  // xAxisData (string array): Input of categories that will be labeled on the X Axis.
  // yAxisData (number array of number arrays): Input of data values that will be displayed on the Y axis.
  //                                            Each array will correspond to a new set of data.
  // colors (string array): This will color the data point, line, and area for each set of data. Any valid input for the css property "color" will work.

  @Input() xAxisData: string[] = [];
  @Input() yAxisData: number[][] = [];
  @Input() colors: string[] = [];
  series: any = [];
  echartsInstance: any;
  chartOption: EChartsOption = {};

  constructor() {}

  ngOnInit(): void {
    this.generateSeries();
    this.chartOption = {
      color: this.colors,
      grid: {
        show: true,
        top: 8,
        left: 25,
        right: 30,
      },
      xAxis: {
        data: this.xAxisData,
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        min: 'dataMin',
        max: function (value) {
          return value.max + 5;
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      series: this.series,
    };
  }

  // iterates through y axis data input and color input and creates series object for chart option
  generateSeries(): void {
    this.yAxisData.forEach((input, index) => {
      let baseSeriesOptions = {
        lineStyle: {
          color: '',
        },
        areaStyle: {
          color: '',
          opacity: 0.1,
        },
        symbol: 'circle',
        symbolSize: 8,
        type: 'line',
        smooth: true,
      };

      baseSeriesOptions.lineStyle.color = this.colors[index];
      baseSeriesOptions.areaStyle.color = this.colors[index];
      this.series.push({ ...baseSeriesOptions, data: input });
    });
  }
}
