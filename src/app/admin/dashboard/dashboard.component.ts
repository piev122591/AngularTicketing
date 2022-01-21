import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { BannerUIService } from 'src/app/core/services/banner-ui.service';

@Component({
  selector: 'mst-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private bannerUIService: BannerUIService) {}

  ngOnInit(): void {
    this.initCharts();
    this.bannerUIService.breadcrumbs$.next([{ name: 'Admin' }]);
  }

  initCharts() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: 'Catastrophic',
        litres: 20,
        color: am4core.color('#66666'),
      },
      {
        country: 'Critical',
        litres: 6,
        color: am4core.color('#cd5c5c'),
      },
      {
        country: 'Online',
        litres: 2,
        color: am4core.color('#a4cd5c'),
      },
      {
        country: 'Compatible Upgrade',
        litres: 13,
        color: am4core.color('#5bc0de'),
      },
      {
        country: 'Incompatible Upgrade',
        litres: 30,
        color: am4core.color('#222222'),
      },
      {
        country: 'Shutdown',
        litres: 3,
        color: am4core.color('#7B83EB'),
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.alignLabels = false;
    pieSeries.dataFields.category = 'country';
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 0.5;
    pieSeries.labels.template.fontSize = 12;
    pieSeries.labels.template.text = '{category}: {value.value}';
    pieSeries.slices.template.strokeOpacity = 0.2;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }
}
