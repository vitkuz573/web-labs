{extends file="layout.tpl"}
{block name=title}Заказ{/block}

{block name=body}
    <div class="p-4 relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8">
            <table class="border-collapse table-auto w-full text-sm">
                <thead>
                <tr>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">ID</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Наименование</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Количество</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Цена за единицу</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Стоимость</th>
                </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                {foreach $order as $product}
                    {$total_price = $total_price + $product.realPrice}
                    <tr>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            <a href="../products/{$product.id}" class="text-blue-700">Товар #{$product.id}</a>
                        </td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{$product.name}</td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{$product.cnt}</td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{$product.price} ₽</td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{$product.realPrice} ₽</td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>

        <div class="relative flex w-full rounded overflow-hidden shadow-lg my-2 bg-white">
            <div class="px-6 py-4">
                <p id="total_price">Итого: {$total_price} ₽</p>
            </div>

            <div class="absolute inset-y-0 right-0 p-2">
                <button type="submit" class="h-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onclick="window.orders.add()">Создать заказ</button>
            </div>
        </div>
    </div>
{/block}