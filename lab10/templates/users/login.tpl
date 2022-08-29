{extends file="layout.tpl"}
{block name=title}Вход{/block}

{block name=body}
    <br><br><br><br><br><br>
    <div class="max-w-xs w-full m-auto bg-indigo-100 rounded p-5">
        <header>
            <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" alt="logo" />
        </header>

        <form action="login" method="post">
            <div>
                <label class="block mb-2 text-indigo-500" for="login">Логин</label>
                <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" id="login" name="login">
            </div>
            <div>
                <label class="block mb-2 text-indigo-500" for="password">Пароль</label>
                <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" id="password" name="password">
            </div>
            <div>
                <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Войти</button>
            </div>
        </form>

        <footer>
            <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"><a href="register">Создать аккаунт</a></button>
        </footer>
    </div>
{/block}