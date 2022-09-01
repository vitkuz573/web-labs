{extends file="layout.tpl"}
{block name=title}Админ-панель{/block}

{block name=body}
    <div class="p-4">
        <div class="relative py-5">
            <button type="button" class="absolute inset-y-0 right-0 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"><a href="products/create">Новый товар</a></button>
        </div>
        {foreach $products as $product}
            <div class="relative flex w-full h-36 rounded overflow-hidden shadow-lg my-2 bg-white">
                <div>
                    <img class="h-48" src="dist/images/{$product.image}" alt="{$product.name}">
                </div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{$product.name}</div>
                    <p class="text-grey-darker text-base">{$product.description}</p>
                    <p class="text-grey-darker text-base">{$product.price} ₽</p>
                </div>
                <div class="absolute inset-y-0 right-0">
                    <button type="button" onclick="window.cart.remove({$product.id});" class="h-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><a href="products/edit/{$product.id}">Редактировать</a></button>
                    <button type="button" onclick="window.cart.remove({$product.id});" class="h-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Удалить</button>
                </div>
            </div>
        {/foreach}
    </div>
{/block}