export class Weather {
  constructor(
    public clouds: { all: number},
    public main: { temp: number, pressure: number, humidity: number},
    public name: string
  ) {}
}
