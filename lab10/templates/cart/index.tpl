﻿{extends file="layout.tpl"}
{block name=title}Корзина{/block}

{block name=body}	
	<div class="p-10">
		{if isset($cart_cookie)}
			<form action="cart/order" method="post">
			{foreach $products as $product}
				{$total_price = $total_price + $product.price}
				<div id="product_{$product.id}" class="relative flex w-full h-40 rounded overflow-hidden shadow-lg my-2 bg-white">
					<div>
						<img class="h-48" src="dist/images/{$product.image}" alt="{$product.name}">
					</div>
					<div class="px-6 py-4">
						<div class="">
							<div>
								<div class="font-bold text-xl mb-2">{$product.name}</div>
								<p class="text-grey-darker text-base">{mb_strimwidth($product.description, 0, 80, '...')}</p>
								<p class="price text-grey-darker text-base" id="item_{$product.id}_price">{$product.price} ₽</p>
							</div>

							<div class="flex pt-2">
								<p>
									<input type="number" class="quantity appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity_{$product.id}" name="itemCnt_{$product.id}" value="1" max="{$product.in_stock}" onchange="window.cart.conversion({$product.id})"/>
								</p>
								<p id="item_{$product.id}" class="id hidden">{$product.id}</p>
								<p id="total_item_{$product.id}_price" class="text-grey-darker text-base pt-2 pl-5">Итого: {$product.price} ₽</p>
							</div>
						</div>
					</div>
					<div class="absolute inset-y-0 right-0 p-4">
						<button type="button" onclick="window.cart.remove({$product.id});" class="h-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Удалить</button>
					</div>
				</div>
			{/foreach}
		{/if}

		<div class="relative flex w-full rounded overflow-hidden shadow-lg my-2 bg-white">
			<div class="px-6 py-4">
				<p id="total_price">Итого: {$total_price} ₽</p>
			</div>

			<div class="absolute inset-y-0 right-0 p-2">
				<button type="submit" class="h-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Перейти к оформлению</button>
			</div>
		</div>
			</form>
	</div>
{/block}