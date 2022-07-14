<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Интернет-магазин</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="assets/js/tailwind.js"></script>
	<script src="assets/js/jquery-3.6.0.min.js"></script>
	<script src="assets/js/app.js"></script>
</head>
	
<body class="bg-slate-400">
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
						<a href="index.php" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Главная</a>
						<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">О нас</a>
						<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Контакты</a>
						<a href="cart.php" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Корзина</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
	
	<div class="p-10">
		{if isset($cart_cookie)}
			{foreach explode(',', $cart_cookie) as $id}
				{foreach $dbh->from('items')->where('id = ?', $id) as $item}
					{$total_cost = $total_cost + $item['cost']}
					<div class="relative flex w-full h-36 rounded overflow-hidden shadow-lg my-2 bg-white">
						<div>
							<img class="h-48" src="assets/images/{$item['image']}" alt="{$item['name']}">
						</div>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2">{$item['name']}</div>
							<p class="text-grey-darker text-base">{$item['description']}</p>
							<p class="text-grey-darker text-base">{$item['cost']} ₽</p>
						</div>
						<div class="absolute inset-y-0 right-0">
							<button type="button" onclick="removeFromCart({$item['id']})" class="h-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Удалить</button>
						</div>
					</div>
				{/foreach}
			{/foreach}
		{/if}
		<div class="relative flex w-full rounded overflow-hidden shadow-lg my-2 bg-white">
			<div class="px-6 py-4">
				<p>Итого: {$total_cost} ₽</p>
			</div>
			<div class="absolute inset-y-0 right-0">
				<button type="button" class="h-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Перейти к оплате</button>
			</div>
		</div>
	</div>
</body>
</html>