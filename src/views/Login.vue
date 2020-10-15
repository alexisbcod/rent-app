<template>
  <div class="login">
    <div>
      <ButtonApp @click="login"
        ><i class="bx bxl-google bx-sm"></i>Login with google</ButtonApp
      >
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "@/firebase";
import ButtonApp from "@/components/ButtonApp.vue";
export default {
  components: {
    ButtonApp,
  },
  methods: {
    async login() {
      try {
        let provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>}
<style lang="less">
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>