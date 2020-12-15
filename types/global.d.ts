// eslint-disable-next-line @typescript-eslint/no-explicit-any
type N = Record<string, any>;
/**
 * 严格的Exclude, 方便自动提示
 */
type ExcludeStrict<T, U extends T> = Exclude<T, U>;
/**
 * 严格的Extract, 方便自动提示
 */
type ExtractStrict<T, U extends T> = Extract<T, U>;
/**
 * 严格的Omit, 方便自动提示
 */
type OmitStrict<T, K extends keyof T> = Omit<T, K>;
/**
 * 修改部分类型
 */
type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R;
/**
 * 一部分Required
 */
type RequiredPart<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;

// https://github.com/Microsoft/TypeScript/issues/14094#issuecomment-373782604
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

/**
 * 用于取出字面量联合类型
 * 如: {key:2|3} -> 2|3
 *  */
type LiteralKey<T> = T & (string | number);

/**
 * 取出指定类型的key
 */
type ExtractType<T, Type> = {
  [P in keyof T]: T[P] extends Type ? P : never;
}[keyof T];
/**
 * 取出指定的类型
 */
type PickType<T, Type> = Pick<T, ExtractType<T, Type>>;

// type SelectOptionsItem = Readonly<{
//   value: number;
//   label: string;
// }>;
// type CheckboxOptionsItem<T extends string | number> = {
//   value: T;
//   label: string;
// };
