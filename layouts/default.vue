<template>
  <div>
    <nav class="navbar navbar-dark bg-dark" v-if="$store.state.isAuth">
      <div class="container-fluid">
        <ul class="navbar-nav mb-2 mb-md-0 w-100">
          <li class="nav-item">
            <a href="#" class="nav-link right" @click="logout">Выйти</a>
          </li>
        </ul>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import localStorage from '~/mixins/localStorage'

export default {
  data() {
    return {
      token: false,
    }
  },

  mixins: [localStorage],

  created() {
    this.$nuxt.$on('setToken', (token) => {
      this.token = token
    })

    this.getTokenFromLocal()
  },

  computed: {
    ...mapState(['isAuth']),
  },

  watch: {
    token() {
      if (this.token) {
        this.setIsAuth(true)
        this.$router.push('/')
      } else {
        this.setIsAuth(false)
        this.$router.push('/login')
      }
    },
  },

  methods: {
    ...mapMutations(['setIsAuth']),

    logout() {
      this.removeTokenFromLocal()
      this.$router.push('/login')
    },
  },
}
</script>

<style>
:root {
  --red: #dc3545;
}
.danger {
  color: var(--red);
}
</style>

<style scoped>
.right {
  text-align: right;
}
</style>
