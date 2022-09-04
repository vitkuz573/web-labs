{extends file="layout.tpl"}
{block name=title}Админ-панель{/block}

{block name=body}
    <div class="p-4 relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8 w-full rounded overflow-hidden shadow-lg bg-white p-4">
            <table class="border-collapse table-auto w-full text-sm">
                <thead>
                <tr>
                    <th class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">ID</th>
                    <th class="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Пользователь</th>
                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Оплачено</th>
                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Создано</th>
                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Действия</th>
                </tr>
                </thead>
                <tbody class="bg-white">
                {foreach $orders as $order}
                    <tr id="order_{$order.id}">
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                            <a href="../orders/{$order.id}" class="text-blue-700">Заказ #{$order.id}</a>
                        </td>
                        {$user = $order->user()->get()}
                        <td class="border-b border-slate-100 p-4 text-slate-500">{$user[0]['full_name']}</td>
                        <td class="border-b border-slate-100 p-4 text-slate-500">
                            {if $order.payment_at == null}
                                Нет
                            {else}
                                {$order.payment_at}
                            {/if}
                        </td>
                        <td class="border-b border-slate-100 p-4 text-slate-500">{$order.created_at}</td>
                        <td class="border-b border-slate-100 p-4 text-slate-500">
                            <a href="#" onclick="window.orders.remove({$order.id}); return false;" class="text-red-700">Удалить</a>
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
{/block}