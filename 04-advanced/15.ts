// これらはinterfaceで表現不可 type aliasで正解
type StringOrNumber = string | number;
type TextObject = string | { text: string };
type Coord = [number, number];
type ObjectStatics = typeof Object;
type Pair<T> = [T, T];
type Coordinatess = Pair<number>;
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

// これらはinterfaceで表現可能
type HolidayLookup = Map<string, Date>;
interface AltHolidayLookup extends Map<string, Date> {
}

type Callback<T> = (date: T) => void;
interface AltCallback<T> {
  (date: T): void;
}

type RecFunc = () => RecFunc;
interface AltRecFunc {
  (): AltRecFunc;
}

export {
  StringOrNumber, TextObject, Coord, ObjectStatics, Pair,
  Coordinatess, HolidayLookup, AltHolidayLookup, Callback, AltCallback
}