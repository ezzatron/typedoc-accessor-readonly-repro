export type AliasA = Readonly<Record<string, string>>;

export interface InterfaceA {
  /**
   * TypeDoc should document this as `AliasA`, but instead it's `Readonly` (with
   * no type parameters).
   */
  propertyA: AliasA;

  /**
   * TypeDoc documents this as `Readonly<Record<string, string>>` - showing that
   * it's capable of rendering the type parameters of `Readonly`.
   */
  propertyB: Readonly<Record<string, string>>;
}
