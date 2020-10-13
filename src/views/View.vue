<template>
  <div class="view">
    <div class="img-header">
      <div class="icons">
        <div class="icons-container">
          <div class="icon">
            <i class="bx bx-chevron-left"></i>
          </div>
          <div class="text">Available</div>
          <div class="icon color-pink">
            <i class="bx bx-heart"></i>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1575379047099-155c957f7bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt=""
      />
    </div>
    <div class="view-text">
      <div class="view-text-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, suscipit
        eligendi cupiditate officia laudantium praesentium voluptas soluta
        reiciendis. Dolorem non recusandae ab, sapiente molestias iusto
        accusamus fugiat repudiandae accusantium reprehenderit!
      </div>
    </div>
  </div>
</template>

<style lang="less">
.view {
  .view-text {
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