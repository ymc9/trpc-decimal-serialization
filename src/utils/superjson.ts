import Decimal from "decimal.js";
import superjson from "superjson";

export function registerCustomSerializers() {
  superjson.registerCustom<Decimal, string>(
    {
      isApplicable: (v): v is Decimal => Decimal.isDecimal(v),
      serialize: (v) => v.toJSON(),
      deserialize: (v) => new Decimal(v),
    },
    "decimal.js",
  );
}
