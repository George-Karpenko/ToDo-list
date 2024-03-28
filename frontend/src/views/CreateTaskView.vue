<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { ref, unref } from "vue";
import { useTasks } from "@/store/tasks";
import router from "@/router";
import BaseButton from "@/components/BaseButton.vue";
import BaseForm from "@/components/BaseForm.vue";
import BaseFormGroup from "@/components/BaseFormGroup.vue";
import BaseFormInput from "@/components/BaseFormInput.vue";
import BaseFormInvalidFeedback from "@/components/BaseFormInvalidFeedback.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import { Status } from "@/@types";

const task = ref({ title: "" });
const submitStatus = ref(Status.NULL);
const validations = {
  title: { required, min: minLength(4) },
};
const v$ = useVuelidate(validations, task);
const tasksStore = useTasks();
const { saveTask } = tasksStore;
async function submit() {
  const isFormCorrect = await unref(v$).$validate();
  if (isFormCorrect) {
    submitStatus.value = Status.PENDING;
    await saveTask(task.value);
    router.push({ name: "home" });
    submitStatus.value = Status.OK;
  } else {
    submitStatus.value = Status.ERROR;
  }
}
</script>

<template>
  <BaseContainer tagName="main">
    <!-- <TheAuthErrors :errors="errors" /> -->
    <h1>Создание задачи</h1>
    <BaseForm @submit.stop.prevent="submit()">
      <BaseFormGroup
        :class="{ 'form__group--error': v$.title.$errors.length }"
        for="title"
        text="Название задачи"
      >
        <BaseFormInput
          v-model="task.title"
          id="title"
          type="text"
          placeholder="Сделать тестовое"
        />
        <BaseFormInvalidFeedback :errors="v$.title.$errors" />
      </BaseFormGroup>
      <BaseButton
        :disabled="submitStatus === Status.PENDING"
        class="form__button"
        >Создать задачу</BaseButton
      >
    </BaseForm>
  </BaseContainer>
</template>

<style scoped>
.form__button {
  align-self: center;
}
</style>
@/store/task/tasks
