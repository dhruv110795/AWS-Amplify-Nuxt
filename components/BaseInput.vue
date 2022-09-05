<template>
  <validation-provider v-slot="validationContext" :name="label" :rules="rules">
    <b-form-group
      :id="`id-input-${id}`"
      :label-for="label"
      class="font-weight-bold text-small m-0 form-group"
    >
      <b-form-input
        :id="`id-input-${id}`"
        v-model="value"
        :name="label"
        :state="getValidationState(validationContext)"
        :aria-describedby="`input-${id}-live-feedback`"
        @blur="handleBlur"
        @input="updateValue"
        class="form-control"
      />
      <span>{{ placeholder }}</span>

      <b-form-invalid-feedback :id="`input-${id}-live-feedback`">
        {{ validationContext.errors[0] }}
      </b-form-invalid-feedback>
    </b-form-group>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "BaseInput",
  components: {
    "validation-provider": ValidationProvider,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    rules: {
      type: Object,
      default: "required",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    updateValue() {
      this.$emit("input", this.value);
    },
    handleBlur() {
      this.$emit("blur", this.value);
    },
  },
};
</script>

<style></style>
