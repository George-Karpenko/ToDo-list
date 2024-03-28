import { computed, ref } from "vue";

export default function useDifferenceTime(newDate: Date, oldDate: Date) {
  const differenceInMilliseconds = oldDate.getTime() - newDate.getTime();
  const differenceInSeconds = ref(Math.ceil(differenceInMilliseconds / 1000));

  const sec = computed(() => {
    return String(Math.ceil(differenceInSeconds.value % 60)).padStart(2, "0");
  });
  const min = computed(() => {
    return Math.floor(differenceInSeconds.value / 60);
  });
  const time = computed(() => {
    return `${min.value}:${sec.value}`;
  });

  return { differenceInSeconds, time };
}
