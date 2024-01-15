import ffr from "./frost-free-refrigerators.json"
import dcr from "./direct-cool-refrigerators.json"

export interface YearData {
  year: string;
  toYear: string;
  conversion: string;
}

export interface Data {
  title: string;
  years: YearData[]
}

export const Library: Data[] = [
  ffr,
  dcr
]