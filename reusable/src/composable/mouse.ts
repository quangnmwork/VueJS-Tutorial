import { ref, onMounted, onUnmounted } from "vue";

export function onMouseMove() {
  const x = ref(0);
  const y = ref(0);
  function updateMouseCoordinate(event: MouseEvent) {
    x.value = event.x;
    y.value = event.y;
  }
  onMounted(() => window.addEventListener("mousemove", updateMouseCoordinate));
  onUnmounted(() =>
    window.addEventListener("mousemove", updateMouseCoordinate)
  );
  return { x, y };
}
