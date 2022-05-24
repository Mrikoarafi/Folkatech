<template>
  <input
    v-model="parentsData"
    :type="type"
    class="rounded-lg w-full p-3 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:text-blue-400 text-[16px]"
    :placeholder="placeholder"
    :oninvalid="`this.setCustomValidity('${oninvalid}')`"
    :onInput="`
      setCustomValidity('')
      this.value = this.value.slice(0, ${maxlength})
    `"
    :required="required"
  />
</template>

<script>
export default {
  props: ['value', 'type', 'placeholder', 'oninvalid', 'required', 'maxlength'],
  name: 'InputComponents',
  computed: {
    parentsData: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>

<style scoped>
input {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}
input:-webkit-autofill,
input:-webkit-autofill:focus {
  box-shadow: 0 0 0 30px #ffff inset !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
