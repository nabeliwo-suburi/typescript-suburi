declare type StringOrNumber = string | number;
declare type TextObject = string | {
    text: string;
};
declare type Coord = [number, number];
declare type ObjectStatics = typeof Object;
declare type Pair<T> = [T, T];
declare type Coordinatess = Pair<number>;
declare type HolidayLookup = Map<string, Date>;
interface AltHolidayLookup extends Map<string, Date> {
}
declare type Callback<T> = (date: T) => void;
interface AltCallback<T> {
    (date: T): void;
}
export { StringOrNumber, TextObject, Coord, ObjectStatics, Pair, Coordinatess, HolidayLookup, AltHolidayLookup, Callback, AltCallback };
