/**
 * Constructs a type with all properties of Type that accept undefined values set to optional
 *
 * Similar to the built-in Partial<Type> utility type, but only applies the optional modifier to properties that also
 * accept "undefined"
 */
export type AllowOmitUndefined<Type extends {}> =
  { [Key in RequiredKeys<Type>]: Type[Key] } &
  { [Key in OptionalKeys<Type>]+?: Type[Key] }

/**
 * Returns Type if it extends Subtype, otherwise returns Subtype
 *
 * Inspired by https://dev.to/svehla/typescript-object-fromentries-389c
 */
export type Cast<Type, Subtype> = Type extends Subtype ? Type : Subtype

/**
 * Finds the keys of an object literal type which do *not* accept undefined values, and returns a union of the key types
 */
type RequiredKeys<Type extends {}> = { [Key in keyof Type]: undefined extends Type[Key] ? never : Key }[keyof Type]

/**
 * Finds the keys of an object literal type which accept undefined values, and returns a union of the key types
 */
type OptionalKeys<Type extends {}> = { [Key in keyof Type]: undefined extends Type[Key] ? Key : never }[keyof Type]
