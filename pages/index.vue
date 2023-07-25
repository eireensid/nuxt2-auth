<template>
  <div class="p-5">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import fetcher from '~/mixins/fetcher'

export default {
  name: 'IndexPage',

  data() {
    return {
      message: '',
    }
  },

  mixins: ['fetcher'],

  async created() {
    try {
      const response = await fetcher(`${process.env.baseUrl}/profile`, {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })

      const content = await response.json()
      this.message = `Добро пожаловать, ${content.name}!`
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
