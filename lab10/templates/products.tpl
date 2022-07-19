{extends file="layout.tpl"}
{block name=title}Интернет-магазин{/block}
{block name=css}
	<link rel="stylesheet" src="assets/css/jquery-ui.min.css" />
{/block}
{block name=js}
	<script src="assets/js/tailwind.js"></script>
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <script src="assets/js/app.js"></script>
	<script src="assets/js/jquery.cookie.js"></script>
	<script src="assets/js/jquery-ui.min.js"></script>
{/block}
{block name=body}
	<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<div>
						<a href="#" class="flex items-center py-4 px-2">
							<img src="assets/images/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
							<span class="font-semibold text-gray-500 text-lg">Store</span>
						</a>
					</div>
					<div class="hidden md:flex items-center space-x-1">
						<a href="product" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Главная</a>
						<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">О нас</a>
						<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Контакты</a>
						<a href="cart" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Корзина</a>
						<div>
							<form>
								<input id="search" name="search" placeholder="Поиск" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
	
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