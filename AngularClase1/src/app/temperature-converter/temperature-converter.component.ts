import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent implements OnInit {
  celsius: number = 25;
  //fahrenheit: number = this.convertirCelsiusAFahrenheit(this.celsius);
  fahrenheit: number = 0; 

  constructor() { }

  ngOnInit(): void {
    this.fahrenheit = this.convertirCelsiusAFahrenheit(this.celsius);
  }

  convertirCelsiusAFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
  }
}
