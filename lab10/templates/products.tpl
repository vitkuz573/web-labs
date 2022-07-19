{extends file="layout.tpl"}
{block name=title}Интернет-магазин{/block}

{block name=css}
	<link rel="stylesheet" src="assets/css/jquery-ui.min.css" />
{/block}

{block name=js}
	<script src="assets/js/jquery.cookie.js"></script>
	<script src="assets/js/jquery-ui.min.js"></script>
{/block}

{block name=body}	
	<div class="flex flex-wrap justify-center -m-2">
		{foreach $items as $item}
			<div class="p-4">
				<div class="rounded-lg shadow-lg bg-white max-w-sm">
					<a href="product/{$item->id}">
						<img class="rounded-t-lg" src="assets/images/{$item->image}" alt="{$item->name}"/>
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
{/block}