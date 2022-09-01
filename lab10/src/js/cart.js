export function add(id) {
    fetch('cart/' + id, {
        method: 'POST',
    }).then(response => {
        if (response.status !== 200) {
            return Promise.reject()
        }
        return response.text()
    })
        .then(i => console.log(i))
        .catch(() => console.log('Ошибка!'))
}

export function remove(id) {
    fetch('cart/' + id, {
        method: 'DELETE',
    }).then(response => {
        if (response.status !== 200) {
            return Promise.reject()
        }
        document.getElementById('product_' + id).style.display = 'none'
        return response.text()
    })
        .then(i => console.log(i))
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
}