<template>
  <div class="about">
        <div><h1 class="hero">A "Pre-loved" and "new to love" bookshop</h1></div>
  </div>
  <div class="pic">
<h2>What we do?</h2>
<p>At our bookstore, we bridge the gap between nostalgia and discovery by offering a diverse collection of pre-loved books that have stories of their own to tell. Every worn spine and dog-eared page carries the whispers of previous readers, inviting you to delve into the worlds they once explored. These pre-loved books are not just possessions; they're vessels of shared experiences and cherished memories.

But our journey doesn't stop there. We also embrace the allure of the present and future with an array of new releases and modern literary marvels. From the latest bestsellers that everyone is talking about to hidden gems waiting to be uncovered, our curated selection ensures that you're always in touch with the pulse of contemporary literature.</p>
  </div>
  <div class="meet">
    <h2>Meet The Team</h2>
  </div>
  <div class="container " style="position:relative;">
                <section class="row gap-5">
                        <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <img src="https://i.postimg.cc/dQrNj18s/C12-Abdoelmaaliek-Samaai-2.jpg" class="lol" alt="ab" loading="lazy">
                            <h2>Abdoel Maaliek</h2>
                            <p>Co-Founder</p>
                        </div>
                        <div id="product2" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <img src="https://i.postimg.cc/hGcNR2bm/Blurped.png" class="lol" alt="logo" loading="lazy">
                        </div>
                        <div id="product3" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <img src="https://i.postimg.cc/bJQMrNgw/Screenshot-20230505-103824.jpg" class="lol" alt="scre" loading="lazy">
                            <h2>Amber Kaye</h2>
                            <p>Co-Founder</p>
                        </div>
                </section>
            </div>
            <div class="neww">
              Bring us the books that has been loved for many years and We will give you ones that need love
            </div>
</template>
<style>
.about{
 background: rgb(255,113,224);
background: linear-gradient(13deg, rgba(255,113,224,1) 43%, rgba(255,173,237,1) 52%, rgba(255,255,240,1) 70%, rgba(255,255,255,1) 86%, rgba(255,255,255,1) 100%);
width:100%;
height:100vh;
}
.pic>h2{
   font-family:'All Pony', sans-serif!important;
   color:black;
   padding-top:30px;
   margin-top:40px;
}
h2{
   font-family:'All Pony', sans-serif!important;
   color:black;
   padding-top:30px;
   margin-top:40px;
   text-decoration-line:underline;
}
.pic>p{
  margin-top:30px;
  margin-left:20px;
  margin-right:20px;
}
.lol{
  width:200px;
  height:250px;
  border-radius:150px;
}
.hero{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family:'All Pony', sans-serif!important;
    color:black;
}
.hero{
  animation:slideInLeft 1s ease-in;
}
@keyframes slideInLeft{
  from{
    transform: translateX(-300px);
  }
  to{
   top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
