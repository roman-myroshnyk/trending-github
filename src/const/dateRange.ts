import { DateTypes } from "../api/interfaces.d";

export interface IDateRage {
  dateType: DateTypes;
  title: string;
}

export const defaultDateRange: IDateRage = {
  dateType: DateTypes.Daily,
  title: "Today",
};

export const dateRanges: IDateRage[] = [
  {
    dateType: DateTypes.Daily,
    title: "Today",
  },
  {
    dateType: DateTypes.Weekly,
    title: "This week",
  },
  {
    dateType: DateTypes.Monthly,
    title: "This month",
  },
];
