import { CoList, CoMap, co } from "jazz-tools";

export class Test extends CoMap { }

/**
 * Diagnostics:
 * 1. The inferred type of 'Tests' cannot be named without a reference to '.pnpm/cojson@0.7.18/node_modules/cojson'. This is likely not portable. A type annotation is necessary. [2742]
 * 2. The inferred type of 'Tests' cannot be named without a reference to '.pnpm/cojson@0.7.18/node_modules/cojson/src/jsonValue'. This is likely not portable. A type annotation is necessary. [2742]
 * 3. The inferred type of 'Tests' cannot be named without a reference to '.pnpm/effect@3.5.6/node_modules/effect/Effect'. This is likely not portable. A type annotation is necessary. [2742]
 * 4. The inferred type of 'Tests' cannot be named without a reference to '.pnpm/effect@3.5.6/node_modules/effect/Stream'. This is likely not portable. A type annotation is necessary. [2742]
 * 5. 'extends' clause of exported class 'Tests' has or is using private name 'ItemsSym'. [4020]
 */
export class Tests extends CoList.Of(Test) { }

export class TestsCallback extends CoList.Of(() => Test) { }

export class TestsRef extends CoList.Of(co.ref(Test)) { }

export class TestsRefCallback extends CoList.Of(co.ref(() => Test)) { }
