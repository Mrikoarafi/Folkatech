<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="bg-white globalShadow py-5 px-6 rounded-lg w-[568px]">
      <form v-if="bagian" @submit.prevent="nextForm">
        <p class="text-[26px] text-[#730C07] font-bold">Daftar Sekarang</p>
        <div class="space-y-5 my-8">
          <SmallInput
            v-model="nama_depan"
            maxlength=""
            type="text"
            placeholder="Nama Depan"
            oninvalid="Masukkan Nama Depan terlebih dahulu."
            :required="true"
          />
          <SmallInput
            v-model="nama_belakang"
            maxlength=""
            type="text"
            placeholder="Nama Belakang"
            oninvalid="Masukkan Nama Belakang terlebih dahulu."
            :required="true"
          />
          <SmallInput
            v-model="form.email"
            maxlength=""
            type="email"
            placeholder="Email"
            oninvalid="Masukkan Email terlebih dahulu."
            :required="true"
          />
        </div>
        <SmallButton-submit
          :button-disabled="button_disabled"
          name-button="SELANJUTNYA"
        />
      </form>
      <form v-else @submit.prevent="formAcc">
        <button
          type="button"
          class="text-[18px] text-[#730C07] font-bold flex items-center w-max"
          @click="bagian = true"
        >
          <svg
            class="w-4 h-4 mr-2"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.70711 1.70711C9.09763 1.31658 9.09763 0.683417 8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071C9.09763 15.3166 9.09763 14.6834 8.70711 14.2929L3.41421 9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H3.41421L8.70711 1.70711Z"
              fill="#730C07"
            />
          </svg>
          Kembali
        </button>
        <div class="space-y-5 my-8">
          <div>
            <SmallInput
              v-model="form.phone"
              maxlength="13"
              type="number"
              placeholder="Nomor Telepon"
              oninvalid="Masukkan Nomor Telepon terlebih dahulu."
              :required="true"
            />
            <small v-if="form.phone.length < 10" class="font-light text-red-500"
              >* Minimal nomor telepon 10 nomor</small
            >
          </div>
          <div>
            <SmallInput-password
              v-model="form.password"
              placeholder="Password"
              oninvalid="Masukkan Password terlebih dahulu."
              :required="true"
            />
            <small
              v-if="form.password.length < 8"
              class="font-light text-red-500"
              >* Minimal password 8 chracter</small
            >
          </div>
          <div>
            <SmallInput-password
              v-model="same_password"
              placeholder="Konfirmasi Password"
              oninvalid="Masukkan Konfirmasi Password terlebih dahulu."
              :required="true"
            />
            <small
              v-if="form.password !== same_password"
              class="font-light text-red-500"
              >* Password harus sama</small
            >
          </div>
        </div>
        <SmallButton-submit
          :button-disabled="button_disabled"
          name-button="SELANJUTNYA"
        />
      </form>
      <div class="w-[420px] border-t border-[#C2C2C2] my-6 block mx-auto"></div>
      <p class="text-[14px] text-[#7C7C7C] font-thin block text-center">
        Sudah punya akun?
        <NuxtLink to="/login" class="text-[#730C07] font-medium w-max"
          >Masuk</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'RegisterPage',
  layout: 'auth',
  middleware: 'isAuth',
  data() {
    return {
      bagian: true,
      button_disabled: false,
      nama_depan: '',
      nama_belakang: '',
      same_password: '',
      form: {
        email: '',
        password: '',
        phone: '',
      },
    }
  },
  head: {
    title: 'Register - ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Folkatech register',
      },
    ],
  },
  methods: {
    ...mapActions({ signUp: 'authentication/signUp' }),
    nextForm() {
      this.form.name = `${this.nama_depan + ' ' + this.nama_belakang}`
      this.bagian = false
    },
    formAcc() {
      if (
        this.form.password === this.same_password &&
        this.form.password.length > 8 &&
        this.form.phone.length > 10
      ) {
        this.button_disabled = !this.button_disabled
        this.signUp(this.form)
          .then((ress) => {
            this.$swal({
              icon: 'success',
              title: 'Success',
              text: 'Akun anda telah aktif, silahkan login.',
              showConfirmButton: false,
            })
            this.$router.push('/login')
          })
          .catch((err) => {
            alert(err)
          })
          .finally(() => {
            this.button_disabled = !this.button_disabled
          })
      }
    },
  },
}
</script>
