<template>
  <div class="p5">
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

  async mounted() {
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
