import { parseISO } from "date-fns";

export function sortByLatest(
  a: { createdDate: string },
  b: { createdDate: string }
) {
  return parseISO(b.createdDate).getTime() - parseISO(a.createdDate).getTime();
}
