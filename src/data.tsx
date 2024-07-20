import { CoList, CoMap } from "jazz-tools";

export class Test extends CoMap { }

export class Tests extends CoList.Of(Test) { }
