<template>
  <div id="app">
    <div v-if="$route.name!=='View'" class="top-bar-container">
      <div class="top-bar-content">
        <div class="top-bar-img">
          <img
            src="https://images.unsplash.com/photo-1602046746754-5c45e4a04c8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
        </div>
        <div class="top-bar-center">
          <i class="bx bx-current-location"></i>
          Los Angeles CA <i class="bx bxs-chevron-down"></i>
        </div>
        <div class="top-bar-icons">
          <div class="notifi">
            <div class="circle"></div>
            <i class="bx bx-bell bx-sm"></i>
          </div>
          <div class="config">
            <i class="bx bx-cog bx-sm"></i>
          </div>
        </div>
      </div>
    </div>

    <router-view />

    <div v-if="$route.name!=='View'" class="navbar-container">
      <div class="navbar-content">
        <router-link to="/"><i class="bx-sm bx bx-home-alt"></i></router-link>
        <router-link to="/test1"><i class="bx-sm bx bx-heart"></i></router-link>
        <router-link to="/test2"
          ><i class="bx-sm bx bx-location-plus"></i
        ></router-link>
        <router-link to="/test3"
          ><i class="bx-sm bx bx-message-square-detail"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap");
:root {
  --primary: 51, 191, 200;
  --text-primary: 20, 54, 86;
  --text-gray: 138, 155, 171;
  --title-bold: 500;
}
.top-bar-container {
  display: flex;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 3001;
  .top-bar-content {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-bar-center {
      margin-right: -15px;
    }
    .top-bar-icons {
      display: flex;
      .config {
        i {
          margin-left: 15px;
        }
      }
      .notifi {
        position: relative;
        .circle {
          position: absolute;
          width: 11px;
          height: 11px;
          border-radius: 25px;
          right: 0;
          top: 0;
          background: #ed6c6c;
        }
      }
    }
    .top-bar-img {
      width: 44px;
      height: 44px;
      border-radius: 25px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.navbar-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 4000;
  background-color: #fff;
  .navbar-content {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    a {
      color: rgba(95, 100, 111);
      &.router-link-exact-active {
        color: rgba(70, 209, 216) !important;
      }
    }
  }
}
* {
  margin: 0px;
  padding: 0px;
  font-family: "Rubik";
  font-style: normal;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  background-color: rgba(248, 251, 255);
}
</style>
