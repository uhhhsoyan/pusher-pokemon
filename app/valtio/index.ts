import { useSnapshot } from "valtio"
export const useLooseSnapshot = <T extends object>(state: T) => useSnapshot(state) as T
export * from "./BattleState"
export * from "./TeamState"
