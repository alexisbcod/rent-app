<template>
  <div class="view">
    <div class="img-header">
      <div class="icons">
        <div class="icons-container">
          <div @click="changeState" class="icon">
            <router-link to="/"><i class="bx bx-chevron-left"></i></router-link>
          </div>
          <div class="text">Available</div>
          <div class="icon color-pink">
            <i class="bx bx-heart"></i>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt=""
      />
    </div>
    <div class="view-text">
      <div class="view-text-content">
        <div class="header-view">
          <div class="left">
            <div class="location">
              <i class="bx bx-current-location"></i>
              San Salvador
            </div>
            <div class="title-text">Special House Mix</div>
          </div>
          <div class="right">
            <div class="top-bar-img">
              <img
                src="https://images.unsplash.com/photo-1602046746754-5c45e4a04c8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="tags-view">
          <small
            >Hight speed wifi <span>-</span> Deskspace <span>-</span> Safe
            location</small
          >
        </div>
        <div class="icons-view">
          <div class="rooms-items">
            <i class="bx bx-bed"></i>
            2
          </div>
          <div class="rooms-items">
            <i class="bx bx-bath"></i>
            2
          </div>
          <div class="rooms-items">
            <i class="bx bx-cloud-light-rain"></i>
            2
          </div>
        </div>
        <div class="options-view">
          <button class="selected">
            <i class="bx bx-info-circle bx-sm"></i>
            Information
          </button>
          <button>
            <i class="bx bx-comment bx-sm"></i>
            Comments
          </button>
          <button>
            <i class="bx bx-cookie bx-sm"></i>
            Offers
          </button>
          <button>
            <i class="bx bx-share-alt bx-sm"></i>
            Shared
          </button>
        </div>
        <div class="description-view">
          <p>Description</p>
          <small
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nisi ducimus ipsum, molestias quos minima in velit pariatur ut,
            repudiandae magnam cum. Id ipsa dolores mollitia voluptate inventore
            consequuntur provident.</small
          >
          <small
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nisi ducimus ipsum, molestias quos minima in velit pariatur ut,
            repudiandae magnam cum. Id ipsa dolores mollitia voluptate inventore
            consequuntur provident.</small
          >
          HOLAAAA
        </div>
      </div>
    </div>
    <div class="bottom-price">
      <div class="content">
        <p>$1500 usd</p>
        <ButtonApp color="primary">Reserved Now!</ButtonApp>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonApp from "@/components/ButtonApp.vue";
export default {
  components: {
    ButtonApp,
  },
  created() {
    this.$store.state.isView = true;
    console.log(this.$store.state.isView);
  },
  methods: {
    changeState() {
      this.$store.state.isView = false;
      console.log(this.$store.state.isView);
    },
  },
};
</script>

<style lang="less">
.view {
  .bottom-price {
    background-color: #fff;
    z-index: 2000;
    position: fixed;
    bottom: 0;
    width: 100%;
    .content {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: bold;
      }
    }
  }
  .view-text {
    width: 90%;
    height: 60%;
    .view-text-content {
      height: 30%;
      .description-view {
        overflow: auto;
        height: 100%;
        margin-top: 20px;
        p {
          font-weight: bold;
          color: rgba(31, 63, 95);
        }
        small {
          color: rgba(164, 179, 192);
          font-weight: bold;
        }
      }
      .options-view {
        display: flex;
        justify-content: space-between;
        margin-top: 13px;
        button {
          border: none;
          outline: none;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
          color: rgba(164, 179, 192);
          &:hover {
            color: rgba(70, 208, 218);
            i {
              color: rgba(70, 208, 218);
            }
          }
        }
      }
      .icons-view {
        margin-top: 10px;
        width: 60%;
        display: flex;
        justify-content: space-between;
        color: rgba(164, 179, 192);
        font-weight: bold;
        i {
          color: rgba(164, 179, 192);
          font-weight: bold;
        }
      }
      .tags-view {
        color: rgba(208, 216, 225);
        font-weight: bold;
        span {
          color: rgba(70, 208, 218);
        }
      }
      .header-view {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          .title-text {
            font-weight: bold;
            font-size: 1.2rem;
          }
        }
        .right {
          .top-bar-img {
            width: 44px;
            height: 44px;
            border-radius: 25px;
            overflow: hidden;
            margin-right: 40px;
            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    z-index: 1000;
    position: fixed;
    border-radius: 25px;
    background-color: #fff;
    margin-top: 45vh;
    padding: 20px;
  }
  .img-header {
    width: 100%;
    height: 50vh;
    position: fixed;
    top: 0;
    .icons {
      position: fixed;
      width: 100%;
      .icons-container {
        display: flex;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        .icon {
          background-color: #fff;
          padding: 8px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          &.color-pink {
            color: rgba(233, 73, 111);
          }
        }
        .text {
          background-color: rgba(108, 200, 117);
          padding: 8px 20px;
          border-radius: 20px;
          color: white;
          font-size: 0.8rem;
        }
      }
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>