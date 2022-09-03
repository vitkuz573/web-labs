{extends file="layout.tpl"}
{block name=title}Админ-панель{/block}

{block name=body}
    <div>
        <h1 class="text-xl text-center pt-5 pb-10">Админ-панель</h1>

        <div class="flex-auto text-center">
            <p class="pb-5">Выберите необходимый раздел: </p>

            <div>
                <a href="admin/products" class="text-blue-700">Продукты</a>
            </div>

            <div>
                <a href="admin/orders" class="text-blue-700">Заказы</a>
            </div>
        </div>
    </div>
{/block}