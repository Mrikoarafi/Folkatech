<template>
  <div
    class="w-full fixed flex items-center justify-end top-0 bg-white px-[70px] py-4 space-x-8 max-h-[80px]"
    :class="{ scroll: scroll }"
  >
    <div class="flex shadow-md rounded-lg overflow-hidden">
      <input
        v-model="payload.search"
        type="text"
        class="w-[521px] p-3 focus:outline-none focus:text-blue-400 text-[16px]"
        placeholder="Cari Produk"
      />
      <button
        :disabled="$route.name !== 'product-list'"
        type="button"
        class="bg-[#EB3F36] hover:bg-red-600 px-5"
        @click="searching()"
      >
        <svg
          class="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9429 15.9429C16.3334 15.5524 16.9666 15.5524 17.3571 15.9429L21.7071 20.2929C22.0977 20.6834 22.0977 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.9429 17.3571C15.5524 16.9666 15.5524 16.3334 15.9429 15.9429Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <svg
      width="25"
      height="23"
      class="fill-[#696969] hover:fill-blue-400 cursor-pointer"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1559 0.703018C16.0104 0.348935 16.9264 0.166687 17.8514 0.166687C18.7764 0.166687 19.6923 0.348935 20.5469 0.703018C21.4013 1.05704 22.1775 1.57589 22.8314 2.22995C23.4855 2.8838 24.0047 3.66045 24.3587 4.51484C24.7128 5.36939 24.895 6.28533 24.895 7.21033C24.895 8.13534 24.7128 9.05128 24.3587 9.90583C24.0046 10.7603 23.4857 11.5366 22.8316 12.1905C22.8315 12.1906 22.8316 12.1905 22.8316 12.1905L13.2549 21.7672C12.8318 22.1903 12.1459 22.1903 11.7228 21.7672L2.14618 12.1905C0.825348 10.8697 0.083313 9.07827 0.083313 7.21033C0.083313 5.34239 0.825348 3.55096 2.14618 2.23013C3.46701 0.909302 5.25844 0.167266 7.12638 0.167266C8.99432 0.167266 10.7857 0.909302 12.1066 2.23013L12.4889 2.61243L12.871 2.23031C12.8711 2.23025 12.8709 2.23037 12.871 2.23031C13.5249 1.57617 14.3014 1.05707 15.1559 0.703018ZM17.8514 2.33335C17.211 2.33335 16.5769 2.45953 15.9853 2.70466C15.3937 2.9498 14.8561 3.30909 14.4034 3.76202L13.2549 4.91053C12.8318 5.3336 12.1459 5.3336 11.7228 4.91053L10.5745 3.7622C9.66001 2.8477 8.41968 2.33393 7.12638 2.33393C5.83308 2.33393 4.59275 2.8477 3.67824 3.7622C2.76374 4.6767 2.24998 5.91703 2.24998 7.21033C2.24998 8.50363 2.76374 9.74397 3.67824 10.6585L12.4889 19.4691L21.2995 10.6585C21.7524 10.2058 22.1119 9.66805 22.357 9.07644C22.6022 8.48483 22.7284 7.85072 22.7284 7.21033C22.7284 6.56995 22.6022 5.93583 22.357 5.34422C22.1119 4.75261 21.7526 4.21509 21.2997 3.76238C20.847 3.30945 20.3091 2.9498 19.7175 2.70466C19.1259 2.45953 18.4918 2.33335 17.8514 2.33335Z"
        fill=""
      />
    </svg>
    <svg
      width="26"
      height="26"
      class="fill-[#696969] hover:fill-blue-400 cursor-pointer"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.63335 1.51668C5.83795 1.24389 6.15903 1.08334 6.50002 1.08334H19.5C19.841 1.08334 20.1621 1.24389 20.3667 1.51668L23.6167 5.85001C23.7573 6.03753 23.8334 6.26561 23.8334 6.50001V21.6667C23.8334 22.5286 23.4909 23.3553 22.8815 23.9648C22.272 24.5743 21.4453 24.9167 20.5834 24.9167H5.41669C4.55473 24.9167 3.72808 24.5743 3.11859 23.9648C2.5091 23.3553 2.16669 22.5286 2.16669 21.6667V6.50001C2.16669 6.26561 2.24271 6.03753 2.38335 5.85001L5.63335 1.51668ZM7.04169 3.25001L4.33335 6.86112V21.6667C4.33335 21.954 4.44749 22.2295 4.65065 22.4327C4.85382 22.6359 5.12937 22.75 5.41669 22.75H20.5834C20.8707 22.75 21.1462 22.6359 21.3494 22.4327C21.5526 22.2295 21.6667 21.954 21.6667 21.6667V6.86112L18.9584 3.25001H7.04169Z"
        fill=""
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.16669 6.50001C2.16669 5.9017 2.65171 5.41668 3.25002 5.41668H22.75C23.3483 5.41668 23.8334 5.9017 23.8334 6.50001C23.8334 7.09832 23.3483 7.58334 22.75 7.58334H3.25002C2.65171 7.58334 2.16669 7.09832 2.16669 6.50001Z"
        fill=""
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.66669 9.75001C9.265 9.75001 9.75002 10.235 9.75002 10.8333C9.75002 11.6953 10.0924 12.5219 10.7019 13.1314C11.3114 13.7409 12.1381 14.0833 13 14.0833C13.862 14.0833 14.6886 13.7409 15.2981 13.1314C15.9076 12.5219 16.25 11.6953 16.25 10.8333C16.25 10.235 16.735 9.75001 17.3334 9.75001C17.9317 9.75001 18.4167 10.235 18.4167 10.8333C18.4167 12.2699 17.846 13.6477 16.8302 14.6635C15.8144 15.6793 14.4366 16.25 13 16.25C11.5634 16.25 10.1857 15.6793 9.16986 14.6635C8.15404 13.6477 7.58335 12.2699 7.58335 10.8333C7.58335 10.235 8.06838 9.75001 8.66669 9.75001Z"
        fill=""
      />
    </svg>

    <div
      v-click-outside="userDropdown"
      class="relative"
      @click="dropdownUser = true"
    >
      <button
        class="group flex items-center justify-center cursor-pointer duration-150 ease-in-out"
      >
        <svg
          width="26"
          class="fill-[#696969] group-hover:fill-blue-400"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.8365 16.7532C5.85233 15.7373 7.23008 15.1667 8.66667 15.1667H17.3333C18.7699 15.1667 20.1477 15.7373 21.1635 16.7532C22.1793 17.769 22.75 19.1467 22.75 20.5833V22.75C22.75 23.3483 22.265 23.8333 21.6667 23.8333C21.0684 23.8333 20.5833 23.3483 20.5833 22.75V20.5833C20.5833 19.7214 20.2409 18.8947 19.6314 18.2852C19.0219 17.6757 18.1953 17.3333 17.3333 17.3333H8.66667C7.80471 17.3333 6.97806 17.6757 6.36857 18.2852C5.75908 18.8947 5.41667 19.7214 5.41667 20.5833V22.75C5.41667 23.3483 4.93164 23.8333 4.33333 23.8333C3.73502 23.8333 3.25 23.3483 3.25 22.75V20.5833C3.25 19.1467 3.82068 17.769 4.8365 16.7532Z"
            fill=""
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 4.33332C11.2051 4.33332 9.74998 5.7884 9.74998 7.58332C9.74998 9.37825 11.2051 10.8333 13 10.8333C14.7949 10.8333 16.25 9.37825 16.25 7.58332C16.25 5.7884 14.7949 4.33332 13 4.33332ZM7.58331 7.58332C7.58331 4.59178 10.0084 2.16666 13 2.16666C15.9915 2.16666 18.4166 4.59178 18.4166 7.58332C18.4166 10.5749 15.9915 13 13 13C10.0084 13 7.58331 10.5749 7.58331 7.58332Z"
            fill=""
          />
        </svg>
        <svg
          width="24"
          height="24"
          class="fill-[#696969] group-hover:fill-blue-400"
          :class="{ 'rotate-180': dropdownUser }"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.277 14.7522L8.45062 10.5007C8.27687 10.3076 8.41388 10 8.67361 10H16.3264C16.5861 10 16.7231 10.3076 16.5494 10.5007L12.723 14.7522C12.6038 14.8846 12.3962 14.8846 12.277 14.7522Z"
            fill=""
          />
        </svg>
      </button>
      <div
        v-if="dropdownUser"
        class="bg-white absolute top-10 right-0 p-4 max-w-[200px] w-[200px] font-thin space-y-4 text-sm break-all rounded-lg"
        style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"
      >
        <p>{{ 'Name : ' + $auth.$storage.getUniversal('datauser').name }}</p>
        <p>
          {{ 'Email : ' + $auth.$storage.getUniversal('datauser').email }}
        </p>
        <p>
          {{ 'No. : ' + $auth.$storage.getUniversal('datauser').phone_number }}
        </p>
        <div class="flex">
          <button
            class="bg-blue-400 text-white p-3 rounded-lg ml-auto"
            @click="$auth.logout()"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'NavbarComponents',
  data() {
    return {
      payload: {
        search: this.$route.query.search || '',
        price: '',
        limit: '5',
        page: parseInt(this.$route.query.page) || 1,
        order: 'product_name',
        ascdesc: 'ASC',
      },
      scroll: false,
      dropdownUser: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions({ getProduct: 'product/getProduct' }),
    handleScroll() {
      this.scroll = window.scrollY > 0
    },
    userDropdown() {
      this.dropdownUser = false
    },
    searching() {
      this.payload.page = 1
      this.getProduct(this.payload)
      this.$router.push({
        query: {
          search: this.payload.search,
          page: this.payload.page,
        },
      })
    },
  },
}
</script>

<style scoped>
/* shadow ketika scroll */
.scroll {
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
}
</style>
