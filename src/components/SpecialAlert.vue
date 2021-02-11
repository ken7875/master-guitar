<template>
  <div class="wrap">
    <button
      class="alertBtn d-flex justify-content-center align-items-center rounded-circle z-index100 bg-danger text-white bold border-0 animate__animated"
    >
      優惠特報
    </button>
    <div
      class="specialAlert bg-white z-index-alert d-none animate__animated py-8 shadow rounded-lg"
    >
      <button class="closeAlert btn btn-white position-absolute top-0 right-0 px-3">
        <i class="fas fa-times text-xl"></i>
      </button>
      <div class="test bg-danger pt-4">
        <h2>特別活動</h2>
        <ul class="list-unstyled row px-8">
          <li class="col-lg-4 mb-10 mb-lg-0">
            <div class="card border-0 shadow">
              <img
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                class="card-img-top"
                alt="course1"
              />
              <div class="card-body position-relative">
                <div class="position-absolute left-50 top-0 transform-center">
                  <img
                    src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="rounded-circle card_headshot"
                  />
                </div>
                <h3 class="mt-8">授課老師: 王小明</h3>
                <p class="mt-8 mb-5">
                  適合完全新手，從基本指法帶學生到能夠自己彈出喜歡的歌曲
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <a href="#" class="btn btn-outline-gray px-4 py-2 btn-sm"
                  >查看課程</a
                >
                <a href="#" class="btn btn-outline-primary px-4 py-2 btn-sm"
                  >加入購物車</a
                >
              </div>
            </div>
          </li>
          <li class="col-lg-4 mb-10">
            <div class="card border-0 shadow">
              <img
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                class="card-img-top"
                alt="course1"
              />
              <div class="card-body position-relative">
                <div class="position-absolute left-50 top-0 transform-center">
                  <img
                    src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="rounded-circle card_headshot"
                  />
                </div>
                <h3 class="mt-8">授課老師: 王小明</h3>
                <p class="mt-8 mb-5">
                  適合完全新手，從基本指法帶學生到能夠自己彈出喜歡的歌曲
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <a href="#" class="btn btn-outline-gray px-4 py-2 btn-sm"
                  >查看課程</a
                >
                <a href="#" class="btn btn-outline-primary px-4 py-2 btn-sm"
                  >加入購物車</a
                >
              </div>
            </div>
          </li>
          <li class="col-lg-4 mb-10">
            <div class="card border-0 shadow">
              <img
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                class="card-img-top"
                alt="course1"
              />
              <div class="card-body position-relative">
                <div class="position-absolute left-50 top-0 transform-center">
                  <img
                    src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    class="rounded-circle card_headshot"
                  />
                </div>
                <h3 class="mt-8">授課老師: 王小明</h3>
                <p class="mt-8 mb-5">
                  適合完全新手，從基本指法帶學生到能夠自己彈出喜歡的歌曲
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <a href="#" class="btn btn-outline-gray px-4 py-2 btn-sm"
                  >查看課程</a
                >
                <a href="#" class="btn btn-outline-primary px-4 py-2 btn-sm"
                  >加入購物車</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.alertBtn {
  position: fixed;
  height: 80px;
  width: 80px;
  top: 60%;
  right: 0;
  background-color: #fff;
}
.specialAlert {
  overflow-y: hidden;
  overflow-x: hidden;
  height: 90%;
  width: 80%;
  position: fixed;
  top: 5%;
  left: 9%;
  @media (max-width: 767px){
      overflow: scroll;
      overflow-x: hidden;
  }
  .card {
    .card-img-top {
      height: 150px;
    }
  }
}
.present {
  width: 200px;
  height: 200px;
}
</style>
<script>
import $ from 'jquery'

export default {
  mounted () {
    $('.alertBtn').on('click', showAlert)
    function showAlert () {
      $('.specialAlert').addClass('animate__backInRight').removeClass('d-none')
      $('.specialAlert').removeClass('animate__backOutLeft')
      $(this).addClass('animate__backOutRight').removeClass('animate__backInRight')
    }
    $('.closeAlert').on('click', closeAlert)
    function closeAlert () {
      $('.specialAlert').addClass('animate__backOutLeft').removeClass('animate__backInRight')
      $('.alertBtn').addClass('animate__backInRight').removeClass('animate__backOutRight')
    }
  }
}
</script>
