<template>
  <div class="h-screen w-100 d-flex justify-center mpLoginPage">
    <div class="">
      <div class="logo">
        <v-img
          aspect-ratio="1/1"
          class="mr-auto ml-auto mt-5"
          cover
          src="~@/assets/images/mp_logo.png"
        ></v-img>
      </div>
      <v-sheet color="transparent" class="d-flex justify-content align-center">
        <div class="">
          <h1 class="title">
            請使用台北市政府 <span></span> 單一身分驗證入口登入
          </h1>
          <v-btn class="loginBtn" variant="flat" size="x-large">
            <span class="text"> 我要登入</span>
            <v-img
              aspect-ratio="1/1"
              cover
              width="60"
              src="~@/assets/images/mp_btn_icon.png"
            ></v-img>
          </v-btn>
        </div>
        <div class="">
          <v-img
            aspect-ratio="1/1"
            class="mpImg"
            cover
            src="~@/assets/images/mp_main_logo.png"
          ></v-img>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {},
};
</script>
