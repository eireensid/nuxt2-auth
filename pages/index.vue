<template>
  <div class="p-5">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      message: ''
    }
  },

  async created() {
    let token = null
    if (process.client) {
      token = JSON.parse(localStorage.getItem('token'))
    }

    const bearer = 'Bearer ' + token;

    try {
      const response = await fetch(`${process.env.baseUrl}/profile`, {
        headers: {
          'Authorization': bearer, 
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      })

      const content = await response.json();
      this.message = `Добро пожаловать, ${content.name}!`;

    } catch (e) {
      console.log(e)
    }
  }
}
</script>
