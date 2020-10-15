<template>
  <div class="view">
    <div class="img-header">
      <div class="icons">
        <div class="icons-container">
          <div class="icon">
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
            <span>Information</span>
          </button>
          <button>
            <i class="bx bx-comment bx-sm"></i>
            <span>Comments</span>
          </button>
          <button>
            <i class="bx bx-cookie bx-sm"></i>
            <span>Offers</span>
          </button>
          <button>
            <i class="bx bx-share-alt bx-sm"></i>
            <span>Shared</span>
          </button>
        </div>
        <div class="description-view">
          <p>Description</p>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illum at illo non magni explicabo quam accusamus amet! Temporibus atque odit reiciendis cupiditate natus dolores voluptas consequatur tenetur fuga repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in consequatur earum qui aperiam quo ducimus beatae accusamus fugiat voluptates? Laudantium exercitationem amet eligendi repellat, odit quia sint voluptate quibusdam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias modi placeat maiores nobis beatae voluptatum aspernatur facere dolore, repudiandae aperiam numquam assumenda odio porro earum dolores eum eius harum expedita. Josué</small>
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
    width: 100%;
    height: 50%;
    .view-text-content {
      padding: 20px;
      overflow: auto;
      height: 100%;
      .description-view {
        //overflow: auto;
        //height: 110%;
        margin-top: 10px;
        margin-bottom: 20%;
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
        padding: 10px 0px;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        margin-top: 5px;
        button {
          border: none;
          outline: none;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
          color: rgba(164, 179, 192);
          span {
            margin-top: 3px;
          }
          &.selected {
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
  }
  .img-header {
    width: 100%;
    height: 50vh;
    position: fixed;
    top: 0;
    z-index: 0;
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
