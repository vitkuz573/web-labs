{extends file="layout.tpl"}
{block name=title}Интернет-магазин{/block}

{block name=body}
	<div class="flex">
		<div>
			<img src="../dist/images/{$product.image}" alt="{$product.name}">
		</div>
		<div>
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