{extends file="layout.tpl"}
{block name=title}Админ-панель{/block}

{block name=body}
    <div class="relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8">
            <table class="border-collapse table-auto w-full text-sm">
                <thead>
                <tr>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">ID</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Наименование</th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Количество</th>
                </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                {foreach $items as $product_id => $quantity}
                    {$product = App\Models\Product::find($product_id)}
                    <tr>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            <a href="../products/{$product_id}" class="text-blue-700">Товар #{$product.id}</a>
                        </td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{$product.name}</td>
                        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{$quantity}</td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
{/block}