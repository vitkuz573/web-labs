{extends file="layout.tpl"}
{block name=title}Админ-панель{/block}

{block name=body}
    <div class="relative rounded-xl overflow-auto">
    <div class="shadow-sm overflow-hidden my-8 p-4">
        <table class="border-collapse table-auto w-full text-sm">
            <thead>
            <tr>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">ID</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Наименование</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Описание</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Стоимость</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Действия</th>
            </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
            {foreach $products as $product}
            <tr id="product_{$product.id}">
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    <a href="../products/{$product.id}" class="text-blue-700">Товар #{$product.id}</a>
                </td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{$product.name}</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{$product.description}</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{$product.price}</td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
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