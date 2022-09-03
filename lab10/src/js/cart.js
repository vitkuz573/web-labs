export function add(id) {
    fetch('cart/' + id, {
        method: 'POST',
    }).then(response => {
        if (response.status !== 200) {
            return Promise.reject()
        }

        return response.json()
    })
        .then(data => {
            if (document.getElementById('product_' + id + '_add_to_cart')) {
                document.getElementById('product_' + id + '_add_to_cart').style.display = 'none'
            }

            if (document.getElementById('product_' + id + '_remove_from_cart')) {
                document.getElementById('product_' + id + '_remove_from_cart').style.display = 'block'
            }

            document.getElementById('cart_link').innerText = 'Корзина (' + data.cntItems + ')'
        })
        .catch(() => console.log('Ошибка!'))
}

export function remove(id) {
    fetch('cart/' + id, {
        method: 'DELETE',
    }).then(response => {
        if (response.status !== 200) {
            return Promise.reject()
        }

        return response.json()
    })
        .then(data => {
            if (document.getElementById('product_' + id + '_add_to_cart')) {
                document.getElementById('product_' + id + '_add_to_cart').style.display = 'block'
            }

            if (document.getElementById('product_' + id + '_remove_from_cart')) {
                document.getElementById('product_' + id + '_remove_from_cart').style.display = 'none'
            }

            if (document.getElementById('product_' + id)) {
                document.getElementById('product_' + id).style.display = 'none'
            }

            document.getElementById('cart_link').innerText = 'Корзина (' + data.cntItems + ')'
        })
        .catch(() => console.log('Ошибка!'))
}

export function conversion(id) {
    let newCnt = document.getElementById('quantity_' + id).value

    if (newCnt <= 0) {
        remove(id)
        return
    }

    let itemPrice = document.getElementById('item_' + id + '_price').textContent
    let itemRealPrice = newCnt * parseInt(itemPrice.match(/\d+/))

    document.getElementById('total_item_' + id + '_price').textContent = 'Итого: ' + itemRealPrice + ' ₽'

    updateTotalPrice();
}

function updateTotalPrice() {
    let price_elements = document.querySelectorAll('p.price')
    let prices = []
    let quantity_elements = document.querySelectorAll('input.quantity');
    let quantities = []

    for (let quantity_element of quantity_elements) {
        quantities.push(quantity_element.value)
    }

    for (let price_element of price_elements) {
        prices.push(parseInt(price_element.textContent.match(/\d+/)))
    }

    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
        sum += prices[i] * quantities[i]
    }

    document.getElementById('total_price').innerText = 'Итого: ' + sum + ' ₽'
}