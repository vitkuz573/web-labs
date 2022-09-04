{extends file="layout.tpl"}
{block name=title}Админ-панель{/block}

{block name=body}
    <div class="p-4 relative rounded-xl overflow-auto p-4">
        <div class="shadow-sm overflow-hidden my-8 w-full rounded overflow-hidden shadow-lg bg-white p-4">
            <table class="border-collapse table-auto w-full text-sm">
                <thead>
                <tr>
                    <th class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">ID</th>
                    <th class="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Наименование</th>
                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Количество</th>
                </tr>
                </thead>
                <tbody class="bg-white">
                {foreach $purchases as $purchase}
                    {$product = $purchase->product}
                    <tr>
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                            <a href="../products/{$product.id}" class="text-blue-700">Товар #{$product.id}</a>
                        </td>
                        <td class="border-b border-slate-100 p-4 text-slate-500">{$product.name}</td>
                        <td class="border-b border-slate-100 p-4 pr-8 text-slate-500">{$purchase.amount}</td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
{/block}