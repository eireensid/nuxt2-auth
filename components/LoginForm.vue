<template>
  <div class="d-flex flex-column w-100 p-5">
    <h1 class="mb-1 text-center">Авторизация</h1>
    <BForm @submit.prevent="onSubmit" class="d-flex flex-column align-items-center">
      <BFormGroup label="Логин:" label-for="test-name" class="w-50 mb-2">
        <BFormInput id="test-name" v-model="form.name" placeholder="Введите имя" required/>
      </BFormGroup>
      <BFormGroup label="Пароль:" label-for="text-password" class="w-50">
        <BFormInput type="password" id="text-password" aria-describedby="password-help-block"
          v-model="form.password" placeholder="Введите пароль" required/>
      </BFormGroup>
      <div class="w-50 mt-4">
        <BButton type="submit" variant="success">Войти</BButton>
      </div>
    </BForm>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  
  data() {
    return {
      form: {}
    }
  },

  methods: {
    onSubmit() {

    }
  }
}
</script>