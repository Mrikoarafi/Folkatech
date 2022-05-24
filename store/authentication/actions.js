export default {
  signUp(context, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('register', payload)
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
