<template>
  <div class="home">
    <div class="title">
      <p>Hello Josué</p>
      <p class="text-bold">Starting looking for your house</p>
    </div>
    <div class="input">
      <input type="text" placeholder="What are you looking for?" />
      <i class="bx bx-slider-alt bx-rotate-90"></i>
    </div>
    <div class="tags">
      <div class="avatar-tag selected">
        <i class="bx bx-home-alt bx-sm"></i>
      </div>
      <div class="avatar-tag">
        <i class="bx bx-building-house bx-sm"></i>
      </div>
      <div class="avatar-tag">
        <i class="bx bx-joystick bx-sm"></i>
      </div>
      <div class="avatar-tag">
        <i class="bx bx-grid-alt bx-sm"></i>
      </div>
    </div>
    <CardApp
      style="margin-top: 10px"
      imgUser="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      imgCard="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      username="Mr.Josue"
      start="20"
      price="400"
      title="Special House Mix"
      :key="index"
      v-for="(item, index) in 10"
    />
  </div>
</template>

<style lang="less">
.home {
  padding: 10px;
  .tags {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .avatar-tag {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      color: rgba(140, 138, 136);
      &.selected {
        color: white;
        background-color: rgba(70, 208, 218);
      }
    }
  }
  .input {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 15px;
    i {
      position: absolute;
      right: 0;
      margin-right: 10px;
      font-size: 1.1rem;
    }
    input {
      padding: 10px;
      border: none;
      outline: none;
      width: 100%;
      border-radius: 10px;
      background-color: white;
    }
  }
  .title {
    margin-bottom: 30px;
    margin-top: 70px;
    p {
      color: rgba(214, 216, 219);
    }
    .text-bold {
      font-weight: bold;
      color: rgba(20, 73, 123);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import CardApp from "@/components/CardApp.vue";

export default {
  name: "Home",
  components: {
    CardApp,
  },
  created() {
    this.$store.state.isView = false
    console.log(this.$store.state.isView)
  },
  methods: {
    redirigir(){
      this.$router.push('/view')
    }
  },
};
</script>
