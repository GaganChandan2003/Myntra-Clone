let navbar=()=>
{
    return `
    <div id="navbar">
    <div id="logo"><a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrnmr3CB1oDs0WqiWPzNxENXCnRE-1yKVKw&usqp=CAU" alt=""></a></div>
    <div id="catagery">
        <div><h3><a href="mens.html" class="a">MENS</a></h3></div>
        <div><h3><a href="womens.html" class="a">WOMENS</a></h3></div>
        <div><h3><a href="" class="a">KIDS</a></h3></div>
        <div><h3><a href="" class="a">HOME & LIVING</a></h3></div>
        <div><h3><a href="" class="a">BEAUTY</a></h3></div>
        <div><h3><a href="" class="a">STUDIO</a></h3></div>
    </div>
   <div id="query">
       <label for="search" id="icon"><i class="fa-solid fa-magnifying-glass"></i></label>
       <input type="text" name="search" id="search" placeholder="Search for products , brand and more ">
   </div>
    <div id="profile">
        <div>
            <i class="fa-solid fa-user"></i>
            <p> <a href="" class="a">Profile</a> </p>
        </div>
        <div>
            <i class="fa-solid fa-heart"></i>
            <p> <a href=""class="a">Wishlist</a> </p>
        </div>
        <div>
            <i class="fa-solid fa-bag-shopping"></i>
            <p> <a href="./Cart Part/cart.html" class="a">Bag</a> </p>
        </div>
    </div>
    </div>`
}



export {navbar};