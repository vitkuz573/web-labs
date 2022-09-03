export function add() {
    let quantity_elements = document.querySelectorAll('input.quantity');
    let quantities = []

    for (let quantity_element of quantity_elements) {
        quantities.push(quantity_element.value)
    }

    let formData = new FormData()
    formData.set('quantities', JSON.stringify(quantities))

    fetch('orders', {
        method: 'POST',
        body: formData
    }).then(function (response) {
        alert('Заказ создан!')
            return response.text();
        })
        .then(function (body) {
            console.log(body);
        })
}

export function remove(id) {
    fetch('../orders/' + id, {
        method: 'DELETE',
    }).then(response => {
        document.getElementById('order_' + id).style.display = 'none'

        return response.text();
    })
}