{extends file="layout.tpl"}
{block name=title}Интернет-магазин{/block}
{block name=css}
{/block}
{block name=js}
    <script src="../assets/js/tailwind.js"></script>
    <script src="../assets/js/jquery-3.6.0.min.js"></script>
    <script src="../assets/js/app.js"></script>
{/block}

{block name=body}
	<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<div>
						<a href="#" class="flex items-center py-4 px-2">
							<img src="../assets/images/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
							<span class="font-semibold text-gray-500 text-lg">Store</span>
						</a>
					</div>
					<div class="hidden md:flex items-center space-x-1">
						<a href="../product" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Главная</a>
						<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">О нас</a>
						<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Контакты</a>
						<a href="../cart" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Корзина</a>
					</div>
				</div>
			</div>
		</div>
	</nav>

	{$item = $capsule::table('items')->where('id', '=', array_pop(explode('/', $smarty.server.REQUEST_URI)))->get()->first()}
	
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
		</div>
	</div>
{/block}