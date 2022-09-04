{extends file="layout.tpl"}
{block name=title}Интернет-магазин{/block}

{block name=body}
	<div class="flex p-8">
		<div class="px-6">
			<div>
				<img class="h-56 rounded-md" src="../dist/images/{$product.image}" alt="{$product.name}">
			</div>
			<div class="pt-5">
				<h1 class="text-3xl">{$product.name}</h1>
			</div>
			<div>
				<p>{$product.description}</p>
			</div>
			<div class="pt-5">
				{if $product.in_stock == 0}
					<p>Нет в наличии</p>
				{else}
					<p>В наличии: {$product.in_stock}</p>
				{/if}
			</div>
			<div>
				<p>Стоимость: {$product.price} ₽</p>
			</div>
		</div>
	</div>
{/block}