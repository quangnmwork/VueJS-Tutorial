import { Timezone } from "~/types";

export const zones = ref<Timezone[]>([]);
export function addToTimeZone(timezone: Timezone) {
  zones.value.push(timezone);
}
