function cartAdd(product, cost)
{
   //cart number
    if (!localStorage.getItem("cartNumber")) {
        localStorage.setItem("cartNumber",0); 
    }
    var cartNumber = parseInt(localStorage.getItem("cartNumber"));
    cartNumber +=1;
    localStorage.setItem("cartNumber",cartNumber);

    //cart list
    if (!localStorage.getItem("cartList")) {
        localStorage.setItem("cartList","");
    }
    cartList = localStorage.getItem("cartList");
    if (cartList != "") {
        cartList = cartList + "<br>" + product;
    }
    else {
        cartList = cartList + product;
    }
    localStorage.setItem("cartList",cartList);

    //cart cost
    if (!localStorage.getItem("cartCost")) {
        localStorage.setItem("cartCost",0);
    }
    var cartCost = parseInt(localStorage.getItem("cartCost"));
    cartCost= (cartCost + cost).toFixed(2);
    localStorage.setItem("cartCost",cartCost);
    
    //CHANGE TEXT
    if (document.URL.includes("cart.html")) {
        document.getElementById("carttext").innerHTML = localStorage.getItem("cartList");
        document.getElementById("cartcost").innerHTML = "$" + localStorage.getItem("cartCost");
    }
    document.getElementById("cartsmall").innerHTML = "Cart: " + cartNumber

    alert("Product added to cart. View in top right.");
   
}
function clearStorage() {
    localStorage.clear();
    document.getElementById("carttext").innerHTML = cartListDefault;
    document.getElementById("cartcost").innerHTML = cartCostDefault;
    alert("Cart cleared!");
}
function changeText() {
    if (localStorage.getItem("cartNumber")) {
        document.getElementById("cartsmall").innerHTML = "Cart: " + localStorage.getItem("cartNumber");
    }
    
}