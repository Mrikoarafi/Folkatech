<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="bg-white globalShadow py-5 px-6 rounded-lg w-[568px]">
      <form @submit.prevent="userLogin">
        <p class="text-[26px] text-[#730C07] font-bold">Masuk</p>
        <div class="my-8 space-y-5">
          <SmallInput
            v-model="form.email"
            maxlength=""
            type="email"
            placeholder="Email"
            oninvalid="Masukkan Email terlebih dahulu."
            :required="true"
          />

          <div class="block text-right space-y-3">
            <SmallInput-password
              v-model="form.password"
              placeholder="Password"
              oninvalid="Masukkan Password terlebih dahulu."
              :required="true"
            />
            <p
              class="inline-block text-[#730C07] w-max text-[14px] font-thin mt-2 cursor-pointer"
            >
              Lupa Password?
            </p>
          </div>
        </div>
        <SmallButton-submit
          :button-disabled="button_disabled"
          name-button="MASUK"
        />
      </form>
      <div class="w-[420px] border-t border-[#C2C2C2] my-6 block mx-auto"></div>
      <p class="text-[14px] text-[#7C7C7C] font-thin block text-center">
        Belum punya akun?
        <NuxtLink to="/register" class="text-[#730C07] font-medium w-max"
          >Daftar Sekarang</NuxtLink
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  middleware: 'isAuth',
  data() {
    return {
      button_disabled: false,
      form: {
        email: '',
        password: '',
      },
    }
  },
  head: {
    title: 'Login - ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Folkatech register',
      },
    ],
  },
  methods: {
    userLogin() {
      this.button_disabled = !this.button_disabled
      this.$auth
        .loginWith('local', {
          data: this.form,
        })
        .then((res) => {
          this.$auth.$storage.setUniversal('datauser', res.data.data)
          this.$router.push('/product-list')
        })
        .catch((err) => {
          this.button_disabled = !this.button_disabled
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message,
          })
        })
    },
  },
}
</script>
