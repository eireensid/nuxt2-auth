<template>
  <div class="d-flex flex-column w-100 p-5">
    <h1 class="mb-1 text-center">Авторизация</h1>
    <BForm @submit.prevent="onSubmit" class="d-flex flex-column align-items-center">
      <BFormGroup label="Логин:" label-for="test-name" class="w-50 mb-2">
        <BFormInput id="test-name" v-model="name" placeholder="Введите имя" required/>
      </BFormGroup>
      <BFormGroup label="Пароль:" label-for="text-password" class="w-50">
        <BFormInput type="password" id="text-password" aria-describedby="password-help-block"
          v-model="password" placeholder="Введите пароль" required/>
      </BFormGroup>
      <p class="w-50 mt-3 danger" v-show="authError.show">{{ authError.text }}</p>
      <div class="w-50" :class="authError.show ? 'mt-2' : 'mt-4'">
        <BButton type="submit" variant="success" :disabled="btnDisabled">Войти</BButton>
      </div>
    </BForm>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LoginForm',
  
  data() {
    return {
      name: '',
      password: '',
      authError: {
        show: false,
        text: ''
      },
      btnDisabled: false
    }
  },

  methods: {
    ...mapMutations([
      'setIsAuth'
    ]),

    async onSubmit() {
      this.btnDisabled = true
      this.authError.show = false

      const user = {
        name: this.name,
        password: this.password
      }

      try {
        const response = await fetch(`${process.env.baseUrl}/auth/login`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({
            ...user
          })
        });

        this.btnDisabled = false

        if (response.status === 200) {
          const content = await response.json();
          if (content.access_token) {
            if (process.client) {
              localStorage.setItem('token', JSON.stringify(content.access_token));
              this.$nuxt.$emit('setToken', content.access_token)
            }
          }

        } else {
          this.authError.show = true
          this.authError.text = 'Неверный email или пароль'
        }

      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>