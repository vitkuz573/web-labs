export function add() {
    fetch('../orders', {
        method: 'POST',
    }).then(response => {
        return response.json()
    }).then(data => {
        alert(data['message'])
    })
}

export function remove(id) {
    fetch('../orders/' + id, {
        method: 'DELETE',
    }).then(response => {
        document.getElementById('order_' + id).style.display = 'none'

        return response.text()
    })
}