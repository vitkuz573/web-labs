{extends file="layout.tpl"}
{block name=title}Продукты{/block}

{block name=body}
	<div class="flex">
		<div class="p-4">
			<form class="space-y-4">
				<div class="flex">
					<input type="number" id="min_price" name="min_price" class="w-24">
					<b>&nbsp;-&nbsp;</b>
					<input type="number" id="max_price" name="max_price" class="w-24">
				</div>
				<button type="button" onclick="getProductsByFilters()" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Показать</button>
			</form>
		</div>

		<div class="flex flex-wrap justify-center">
			{foreach $products as $product}
				<div class="p-4">
					<div class="rounded-lg shadow-lg bg-white max-w-sm">
						<a href="products/{$product.id}">
							<img class="rounded-t-lg" src="dist/images/{$product.image}" alt="{$product.name}"/>
						</a>
						<div class="p-6">
							<h5 class="text-gray-900 text-xl font-medium mb-2">{$product.name}</h5>
							<p class="text-gray-700 text-base mb-4">{$product.description}</p>
							<p class="text-gray-700 text-base mb-4">{$product.price} ₽</p>
							<button type="button" onclick="window.cart.add({$product.id});" data-id="{$product.id}" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Добавить в корзину</button>
						</div>
					</div>
				</div>
        	{/foreach}
		</div>
	</div>
{/block}