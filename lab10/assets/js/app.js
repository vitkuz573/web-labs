function addToCart(item_id) {
    let cart = JSON.parse(sessionStorage.getItem('cart'))

    if(!cart) {
        cart = []
    }

    cart.push(item_id);

    sessionStorage.setItem('cart', JSON.stringify(cart))

    document.cookie = "cart=" + cart
}