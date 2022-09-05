{extends file="layout.tpl"}
{block name=title}Заказы{/block}

{block name=body}
    <div class="p-4 relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8 w-full rounded overflow-hidden shadow-lg bg-white p-4">
            <table class="border-collapse table-auto w-full text-sm">
                <thead>
                <tr>
                    <th class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">ID</th>
                    <th class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Сумма</th>
                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Оплачено</th>
                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Создано</th>
                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Действия</th>
                </tr>
                </thead>
                <tbody class="bg-white">
                {foreach $orders as $order}
                    <tr>
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">#{$order.id}</td>
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">{$order.total_price} ₽</td>
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                            {if $order.payment_at === null}
                                <a href="#" class="text-blue-500">Перейти к оплате</a>
                            {else}
                                {$order.payment_at}
                            {/if}
                        </td>
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">{$order.created_at}</td>
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                            <a href="orders/{$order.id}" class="text-blue-500">Подробнее</a>
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
{/block}