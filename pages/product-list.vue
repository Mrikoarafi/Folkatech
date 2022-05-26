<template>
  <div class="flex flex-col flex-1">
    <div class="bg-[#F5F5F5] h-[64px] flex items-center px-[70px]">
      <button
        class="bg-[#EB3F36] h-full px-10 text-white tracking-wide flex items-center"
      >
        BELANJA
        <svg
          width="24"
          height="24"
          class="fill-white"
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
    </div>
    <div class="px-[70px] py-7 flex flex-col flex-1">
      <SmallBreadcrumb :list="['Home', 'product', 'total']" />

      <!-- PRODUCT -->
      <div
        v-if="getAll.isLoading"
        class="flex-1 flex items-center justify-center"
      >
        <SmallLoading />
      </div>
      <div v-else class="grid grid-cols-5 gap-4">
        <div
          v-for="item in getAll.product.data.list"
          :key="item.id"
          class="flex flex-col text-center h-max cursor-pointer hover:rounded-lg duration-200 hover:bg-slate-100 ease-in-out hover:p-3"
          @click="$router.push(`/product-detail/${item.name.split('-').pop()}`)"
        >
          <img :src="item.images[0].image_url" alt="picture" />
          <p
            class="mt-4 font-thin text-[15px]"
            v-html="changeTextMixins(item.name)"
          ></p>
          <div
            class="mt-4 font-thin text-[13px]"
            v-html="changeTextMixins(item.short_description)"
          ></div>
          <p class="text-[#EB3F36] text-sm mt-auto py-2">
            {{ priceFormatMixins(item.price) }}
          </p>
        </div>
      </div>
      <!-- PAGINATION -->
      <div v-if="getAll.product" class="mt-auto self-center">
        <div class="flex space-x-4 mt-20">
          <button
            class="bg-blue-400 rounded-lg p-2 text-white disabled:opacity-80"
            :disabled="payload.page === 1"
            type="button"
            @click="prev()"
          >
            Prev
          </button>
          <button
            type="button"
            class="bg-blue-400 rounded-lg p-2 text-white disabled:opacity-80"
            :disabled="payload.page >= maxNext"
            @click="next()"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  middleware: 'isLogin',
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
    }
  },
  head: {
    title: 'Product List - ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Folkatech home page',
      },
    ],
  },
  fetch() {
    this.getProduct(this.payload)
  },
  computed: {
    ...mapGetters({
      getAll: 'product/getAll',
    }),
    maxNext() {
      const coba = Math.ceil(
        this.getAll.product.data.total / this.getAll.product.data.list.length
      )
      return coba
    },
  },
  methods: {
    ...mapActions({ getProduct: 'product/getProduct' }),
    prev() {
      this.payload.page = this.payload.page -= 1
      this.getProduct(this.payload).then((ress) => {
        this.$router.push({
          query: {
            ...this.$route.query,
            page: this.payload.page,
          },
        })
      })
      window.scrollTo(0, 0)
    },
    next() {
      this.payload.page = this.payload.page += 1
      this.getProduct(this.payload).then((ress) => {
        this.$router.push({
          query: {
            ...this.$route.query,
            page: this.payload.page,
          },
        })
      })
      window.scrollTo(0, 0)
    },
  },
}
</script>
