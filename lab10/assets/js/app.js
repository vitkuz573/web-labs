let cart = JSON.parse(sessionStorage.getItem('cart'))

function addToCart(item_id) {
    if(!cart) {
        cart = []
    }

    cart.push(item_id);

    sessionStorage.setItem('cart', JSON.stringify(cart))

    document.cookie = "cart=" + cart
}

function removeFromCart(item_id) {
    cart.
    location.reload()

    document.cookie = "cart=" + cart
}