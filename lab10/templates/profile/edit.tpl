{extends file="layout.tpl"}
{block name=title}Регистрационные данные{/block}

{block name=body}
    <h1>Ваши регистрационные данные</h1>
    <table border="0">
        <tr>
            <td>Логин</td>
            <td>{$user['login']}</td>
        </tr>
        <tr>
            <td>Имя</td>
            <td><input type="text" id="newFirstName" value="{$user['first_name']}" /></td>
        </tr>
        <tr>
            <td>Фамилия</td>
            <td><input type="text" id="newLastName" value="{$user['last_name']}" /></td>
        </tr>
        <tr>
            <td>Телефон</td>
            <td><input type="tel" id="newPhone" value="{$user['phone']}" /></td>
        </tr>
        <tr>
            <td>Адрес</td>
            <td><textarea id="newAddress">{$user['address']}</textarea></td>
        </tr>
        <tr>
            <td>Новый пароль</td>
            <td><input type="password" id="newPassword" value="" /></td>
        </tr>
        <tr>
            <td>Повтор пароля</td>
            <td><input type="password" id="newPasswordConfirmation" value="" /></td>
        </tr>
        <tr>
            <td>Текущий пароль</td>
            <td><input type="password" id="currentPassword" value="" /></td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td><input type="button" value="Сохранить изменения" onclick="window.user.update();" /></td>
        </tr>
    </table>
{/block}