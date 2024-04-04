import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fillArrayWithValues<T>(arrayLength: number, values: T[]) {
  const filledArray = Array(arrayLength).fill(undefined);

  filledArray.splice(0, values.length, ...values);

  return filledArray;
}
