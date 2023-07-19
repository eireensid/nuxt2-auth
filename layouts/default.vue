<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4" v-if="auth">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false
    }
  },

  mounted() {
    this.$nuxt.$on('auth', auth => {
      this.auth = auth;
    })
  }
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