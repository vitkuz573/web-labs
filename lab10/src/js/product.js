export function remove(id) {
    fetch('products/' + id, {
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