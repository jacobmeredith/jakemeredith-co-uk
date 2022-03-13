import { parseISO } from "date-fns";

export function sortByLatests(
  a: { createdDate: string },
  b: { createdDate: string }
) {
  return parseISO(b.createdDate).getTime() - parseISO(a.createdDate).getTime();
}
