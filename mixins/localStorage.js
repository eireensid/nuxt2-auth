export default {
  methods: {
    saveTokenToLocal(token) {
      if (process.client) {
        localStorage.setItem('token', JSON.stringify(token))
      }
    },
    getTokenFromLocal() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('token'))
      }
    },
    removeTokenFromLocal() {
      if (process.client) {
        localStorage.removeItem('token')
      }
    },
  },
}
