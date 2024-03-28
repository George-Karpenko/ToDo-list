export function addMinutes(date: Date, minutes: number): Date {
  date.setMinutes(date.getMinutes() + minutes);

  return date;
}
