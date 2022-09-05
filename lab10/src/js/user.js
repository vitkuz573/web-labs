export function update() {
    let formData = {
        phone: document.getElementById('newPhone').value,
        address: document.getElementById('newAddress').value,
        password: document.getElementById('newPassword').value,
        passwordConfirmation: document.getElementById('newPasswordConfirmation').value,
        currentPassword: document.getElementById('currentPassword').value,
        firstName: document.getElementById('newFirstName').value,
        lastName: document.getElementById('newLastName').value
    }

    fetch('user', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(formData)
    }).then(response => {
        return response.json()
    }).then(data => {
        alert(data['message'])
    }).catch(err => console.log(err))
}