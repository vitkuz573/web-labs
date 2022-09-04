{extends file="layout.tpl"}
{block name=title}Админ-панель{/block}

{block name=body}
    <div class="relative rounded-xl overflow-auto">
    <div class="shadow-sm overflow-hidden my-8 p-4">
        <div>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"><a href="../products/create">Новый</a></button>
        </div>
        <table class="border-collapse table-auto w-full text-sm">
            <thead>
            <tr>
                <th class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">ID</th>
                <th class="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Наименование</th>
                <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Описание</th>
                <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Стоимость</th>
                <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Действия</th>
            </tr>
            </thead>
            <tbody class="bg-white">
            {foreach $products as $product}
            <tr id="product_{$product.id}">
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                    <a href="../products/{$product.id}" class="text-blue-700">#{$product.id}</a>
                </td>
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">{$product.name}</td>
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">{mb_strimwidth($product.description, 0, 200, '...')}</td>
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">{$product.price}</td>
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                    <a href="../products/edit/{$product.id}" class="text-blue-600">Редактировать</a>
                    <a href="#" class="text-red-600" onclick="window.product.remove({$product.id}); return false;">Удалить</a>
                </td>
            </tr>
            {/foreach}
            </tbody>
        </table>
    </div>
    </div>
{/block}