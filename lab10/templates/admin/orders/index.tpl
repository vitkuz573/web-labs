{extends file="layout.tpl"}
{block name=title}Админ-панель{/block}

{block name=body}
    <div class="relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8 p-4">
            <table class="border-collapse table-auto w-full text-sm">
                <thead>
                <tr>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">ID</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Пользователь</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Оплачено</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Создано</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Действия</th>
                </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                {foreach $orders as $order}
                    <tr id="order_{$order.id}">
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            <a href="../orders/{$order.id}" class="text-blue-700">Заказ #{$order.id}</a>
                        </td>
                        {$user = $order->user()->get()}
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{$user[0]['full_name']}</td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                            {if $order.payment_at == null}
                                Нет
                            {else}
                                {$order.payment_at}
                            {/if}
                        </td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{$order.created_at}</td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                            <a href="#" onclick="window.orders.remove({$order.id}); return false;" class="text-red-700">Удалить</a>
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
{/block}