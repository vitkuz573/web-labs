{extends file="layout.tpl"}
{block name=title}Интернет-магазин{/block}

{block name=body}
	<div class="flex p-8">
		<div>
			<img class="h-56 rounded-md" src="../dist/images/{$product.image}" alt="{$product.name}">
		</div>
		<div class="px-6">
			<div>
				<h1 class="text-3xl">{$product.name}</h1>
			</div>
			<div>
				<p>{$product.description}</p>
			</div>
			<div>
				<p>{$product.price} ₽</p>
			</div>
		</div>
	</div>
{/block}