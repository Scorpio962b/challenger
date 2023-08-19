<template>
<section>
<div class="row align-items-md-stretch space">
  <img class="book" src="https://i.postimg.cc/hGcNR2bm/Blurped.png" alt="bookie" loading="lazy">
  <h1 class="words">{{ message }}</h1>
</div>
</section>
<section class="some">
  <h2 class="p-2"><em>SALE!!</em></h2>
</section>
<section class="row gap-5 justify-content-around mb-5">
<div class="card" style="width: 15rem;">
  <img src="https://i.postimg.cc/jqQYkc30/alchemy.jpg" class="card-img-top hmn" alt="alchemy">
  <div class="card-body">
    <h5 class="card-title">The Alchemist</h5>
    <p class="card-text">R100</p>
    <a href="#" class="bot">Add to 🛒</a>
  </div>
</div>
<div class="card" style="width: 15rem;">
  <img src="https://i.postimg.cc/x8rHJnD7/harry.jpg" class="card-img-top hmn" alt="Harry">
  <div class="card-body">
    <h5 class="card-title">HP Series</h5>
    <p class="card-text">R800</p>
    <a href="#" class="bot">Add to 🛒</a>
  </div>
</div>
<div class="card" style="width: 15rem;">
  <img src="https://i.postimg.cc/3rtQTBps/kinglol.jpg" class="card-img-top hmn" alt="king">
  <div class="card-body">
    <h5 class="card-title">The Shining</h5>
    <p class="card-text">R120</p>
    <a href="#" class="bot">Add to 🛒</a>
  </div>
</div>
<div class="card" style="width: 15rem;">
  <img src="https://i.postimg.cc/Kzsf9RkH/meh.jpg" class="card-img-top hmn" alt="ew">
  <div class="card-body">
    <h5 class="card-title">Love Deception</h5>
    <p class="card-text">R80</p>
    <a href="#" class="bot">Add to 🛒</a>
  </div>
</div>
</section>
<div class="second">
  <div class="container " style="position:relative;">
                <section class="row gap-5">
                        <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <a><font-awesome-icon :icon="['fas', 'mobile']" size="8x" style="color: #f980c1;" /></a>
                            <h5 class="text-black">Easy to Access</h5>
                            <p class="text-black text-center px-3">
                                Order online by using your cellphone
                                </p>
                                <a class="custom-btn" href="./sources/pages/shop.html">View All</a>
                        </div>
                        <div id="product2" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <a><font-awesome-icon :icon="['fas', 'clock']" size="8x" style="color: #f980c1;" /></a>
                            <h5 class="text-black">By When</h5>
                            <p class="text-black text-center px-3">
                                Let us know by when you need it.
                                </p>
                                <a class="custom-btn" href="./sources/pages/shop.html">View All</a>
                        </div>
                        <div id="product3" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <a><font-awesome-icon :icon="['fas', 'home']" size="8x" style="color: #f980c1;" /></a>
                            <h5 class="text-black">Convenient</h5>

                            <p class="text-black text-center px-3">
                                Collect in-store or have it Delivered to your Home.
                                </p>
                                <a class="custom-btn" href="./sources/pages/shop.html">View All</a>

                        </div>
                </section>
            </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      index: 0,
      speed: 100,
      text: 'A Galaxy filled with new Worlds.'
    };
  },
  mounted() {
    this.words();
  },
  methods: {
    words() {
      if (this.index < this.text.length) {
        this.message += this.text.charAt(this.index);
        this.index++;
        setTimeout(this.words, this.speed);
      }
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/all-pony');
.book{
  width: 100vh;
  float:left;
}
.space{
  width:100%!important;
}
.second{
  width:100%!important;
}
.words{
  font-family: 'All Pony', sans-serif;
  font-size: 60px;
  color:black;
  width:50%;
  float:right;
  margin-top:380px;

}
h5{
font-family: 'All Pony', sans-serif!important;
font-weight:bold!important;
font-size:40px;
}
.custom-btn:hover {
    background-color:rgb(255, 255, 255);
    background-color:white;
    color:#ff71e0;
    opacity:1;
}
.hmn{
  width:100%;
  height:100%;
}
.custom-btn {
    text-decoration:none;
    text-transform:uppercase;
    font-weight:600;
    font-size:20px;
    width:150px;
    background-color:rgba(63, 63, 63, 0.2);
    height:50px;
    padding:10px 10px 10px 10px;
    color:black;
    transition:  linear 0.5s;
    text-align:center;
    border-radius:15px;
}
.bot{
  text-decoration:none;
    text-transform:uppercase;
    font-weight:600;
    font-size:20px;
    width:150px;
    background-color:#ff71e0;
    height:50px;
    padding:10px 10px 10px 10px;
    color:black;
    transition:  linear 0.5s;
    text-align:center;
    border-radius:15px;
}
.some{
  background-color: #ff71e0;
  text-align: center;
  color:black;
  margin-bottom:50px;
  margin-top:20px;
}
</style>