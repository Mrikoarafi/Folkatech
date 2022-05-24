export default {
  getProduct(context, payload) {
    context.commit('SET_LOADING', true)
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(
          `product?keyword=${payload.search}&price=${payload.price}&page=${payload.page}&limit=${payload.limit}&order=${payload.order},${payload.ascdesc}`
        )
        .then((response) => {
          context.commit('SET_PRODUCT', response)
          resolve(response)
          context.commit('SET_LOADING', false)
        })
        .catch((err) => {
          resolve(err)
          context.commit('SET_PRODUCT', err)
        })
    })
  },
  detailProduct(context, payload) {
    context.commit('SET_LOADING', true)
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(
          `product?keyword=${payload}&price=&page=1&limit=1&order=product_name,ASC`
        )
        .then((response) => {
          context.commit('SET_PRODUCT', response)
          resolve(response)
          context.commit('SET_LOADING', false)
        })
        .catch((err) => {
          resolve(err)
          context.commit('SET_PRODUCT', err)
        })
    })
  },
}
