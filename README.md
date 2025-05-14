# Typedoc broken type alias issue reproduction

A minimal reproduction to demonstrate an issue with TypeDoc type alias
documentation.

## Reproduction

1. Run `npm install`.
2. Run `npm run docs`.
3. Open `docs/index.html` in a browser.
4. Navigate to the `InterfaceA` interface.
5. Observe that `propertyA` is documented as returning `Readonly` instead of
   linking to the `AliasA` type alias.
