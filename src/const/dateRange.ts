import { DateTypes } from "../api/interfaces.d";

interface IDateRage {
  dateType: DateTypes;
  title: string;
}

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
