// node test/manual/auth-token.js
// access keys must match the documented example in src/core/env.js (ACCESS_KEYS)
import assert from "node:assert/strict";
import { gen } from "../../src/plugins/users/auth-token.js";

const [hex, hexcat] = await gen("1123213213", "localhost");
assert.ok(hex.startsWith("1e84b3c687"), hex);
assert.ok(hexcat.startsWith("localhost|1e84b3c687"), hexcat);
console.log("ok", hexcat);
