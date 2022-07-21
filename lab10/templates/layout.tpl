<html>
<head>
	{block name=head}
	<title>{block name=title}Default Page Title{/block}</title>
	<meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/lab10/dist/css/app.css" />
	<script src="/lab10/dist/js/app.js"></script>
	{/block}
</head>

<body class="bg-slate-400">
	<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<div>
						<a href="#" class="flex items-center py-4 px-2">
							<img src="/lab10/dist/images/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
							<span class="font-semibold text-gray-500 text-lg">Store</span>
						</a>
					</div>
					<div class="hidden md:flex items-center space-x-1">
						<a href="/lab10/product" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Главная</a>
						<a href="/lab10/#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Контакты</a>
						<a href="/lab10/cart" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Корзина</a>
                        <div id="autocomplete"></div>
					</div>
				</div>
			</div>
		</div>
	</nav>
    
    {block name=body}{/block}
</body>
</html>