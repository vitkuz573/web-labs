{extends file="layout.tpl"}
{block name=title}Интернет-магазин{/block}

{block name=body}
	<div class="flex">
		<div class="p-4">
			<form class="space-y-4">
				<div class="flex">
					<input type="number" id="minimal_cost" name="minimal_cost" class="w-24">
					<b>&nbsp;-&nbsp;</b>
					<input type="number" id="maximal_cost" name="maximal_cost" class="w-24">
				</div>
				<button type="button" onclick="window.getProductsByFilters()" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Показать</button>
			</form>
		</div>

		<div class="flex flex-wrap justify-center">
			{foreach $items as $item}
				<div class="p-4">
					<div class="rounded-lg shadow-lg bg-white max-w-sm">
						<a href="product/{$item->id}">
							<img class="rounded-t-lg" src="dist/images/{$item->image}" alt="{$item->name}"/>
						</a>
						<div class="p-6">
							<h5 class="text-gray-900 text-xl font-medium mb-2">{$item->name}</h5>
							<p class="text-gray-700 text-base mb-4">{$item->description}</p>
							<p class="text-gray-700 text-base mb-4">{$item->cost} ₽</p>
							<button type="button" onclick="addToCart({$item->id});" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Добавить в корзину</button>
						</div>
					</div>
				</div>
        	{/foreach}
		</div>
	</div>
{/block}