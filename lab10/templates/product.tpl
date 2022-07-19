{extends file="layout.tpl"}
{block name=title}Интернет-магазин{/block}

{block name=body}
	{$item = \App\Models\Product::whereId(array_pop(explode('/', $smarty.server.REQUEST_URI)))->first()}
	
	<div class="flex">
		<div>
			<img src="../assets/images/{$item->image}" alt="{$item->name}">
		</div>
		<div>
			<div>
				<h1 class="text-3xl">{$item->name}</h1>
			</div>
			<div>
				<p>{$item->description}</p>
			</div>
			<div>
				<p>{$item->cost} ₽</p>
			</div>
		</div>
	</div>
{/block}