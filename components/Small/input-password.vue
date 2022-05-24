<template>
  <div>
    <label class="relative">
      <input
        v-model="parentsData"
        autocomplete="off"
        :type="showPassword == false ? 'password' : 'text'"
        class="rounded-lg w-full pl-3 pr-7 py-3 outline-none focus:ring-1 focus:ring-blue-400 focus:text-blue-400 text-[16px]"
        :placeholder="placeholder"
        :required="required"
        :oninvalid="`this.setCustomValidity('${oninvalid}')`"
        oninput="setCustomValidity('')"
      />
      <button
        type="button"
        class="absolute top-1/2 right-3 -translate-y-1/2 text-[16px] text-[#730C07] outline-none"
        @click="showPassword = !showPassword"
      >
        Show
      </button>
    </label>
  </div>
</template>

<script>
export default {
  name: 'InputPasswordComponents',
  props: ['value', 'maxlength', 'placeholder', 'oninvalid', 'required'],
  data() {
    return {
      showPassword: false,
    }
  },
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
input:-webkit-autofill {
  box-shadow: 0 0 0 30px #ffffff inset !important;
}
input {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}
</style>
