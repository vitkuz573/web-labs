{extends file="layout.tpl"}
{block name=title}Регистрация{/block}

{block name=body}
    <br><br><br><br><br><br>
    <div class="max-w-xs w-full m-auto bg-indigo-100 rounded p-5">
        <header>
            <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" alt="logo" />
        </header>

        <form action="../users" method="post">
            <div>
                <label class="block mb-2 text-indigo-500" for="first_name">Имя</label>
                <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" id="first_name" name="first_name">
            </div>

            <div>
                <label class="block mb-2 text-indigo-500" for="last_name">Фамилия</label>
                <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" id="last_name" name="last_name">
            </div>

            <div>
                <label class="block mb-2 text-indigo-500" for="login">Логин</label>
                <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" id="login" name="login">
            </div>
            <div>
                <label class="block mb-2 text-indigo-500" for="password">Пароль</label>
                <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" id="password" name="password">
            </div>
            <div>
                <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Зарегистрироваться</button>
            </div>
        </form>

        <footer>
            <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"><a href="../login">Войти</a></button>
        </footer>
    </div>
{/block}