<template>
<div class="booooks">
            <div class="container">
                        <h2 id="title">Contact Us</h2>
                        <form id="form" action="https://formspree.io/f/xyyargoq" accept-charset="UTF-8" method="post">
                            <label for="name">Name & Surname:</label>
                            <input id="name" name="name" type="text"  placeholder="Name And Surname">
                            <br>
                            <label for="address">Address</label>
                            <input id="address" name="address" type="text"  placeholder="Address">
                            <br>
                            <label for="Custom order/comment">Specific Book/comment:</label>
                            <input id="text" name="comment" type="text" placeholder="order here/comment">
                            <br>
                            <label for="date">Date you want delivery</label>
                            <input id="date" name="date" type="date" placeholder="yy/mm/dd">
                            <br>
                            <button class="buttn"   type="submit">
                            <span>SUBMIT <i class="fa fa-bolt"></i></span>
                            </button>
                        </form>
                        </div>
                    <form action="https://formspree.io/f/xyyargoq" method="POST"></form>
            </div>
</template>
<script>

</script>
<style scoped>
input {
    width: 100%;
    padding: 10px 0 10px 10px;
    margin: 0;
    border: 3px solid transparent;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #f8bcbc, -2px -2px -2px ;
}
.container{
    padding:200px 200px 200px 200px;
    color:white;
    font-family:'buda',cursive;
    margin: 10px 10px 10px 10px;
}
.booooks{
    background: url(https://i.postimg.cc/bJvz8Zb1/bookshelves.jpg) no-repeat center center/cover;
}
</style>