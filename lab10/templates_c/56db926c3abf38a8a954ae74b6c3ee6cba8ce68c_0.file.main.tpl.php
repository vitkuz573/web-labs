<?php
/* Smarty version 4.1.1, created on 2022-07-14 06:47:18
  from 'C:\OpenServer\domains\localhost\lab10\templates\main.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.1.1',
  'unifunc' => 'content_62cf91c65c8ef0_45517244',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '56db926c3abf38a8a954ae74b6c3ee6cba8ce68c' => 
    array (
      0 => 'C:\\OpenServer\\domains\\localhost\\lab10\\templates\\main.tpl',
      1 => 1657770401,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_62cf91c65c8ef0_45517244 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="ru">
<head>
	<title>Интернет-магазин</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php echo '<script'; ?>
 src="assets/js/tailwind.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="assets/js/jquery-3.6.0.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="assets/js/app.js"><?php echo '</script'; ?>
>
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
		<?php echo '<?php'; ?>

		$total_cost = 0;

		if (isset($_COOKIE['cart']) && !empty($_COOKIE['cart'])) {
			foreach (explode(',', $_COOKIE['cart']) as $id)
			{  
				foreach ($dbh->query("SELECT * FROM items WHERE id = $id") as $item) {
					$total_cost = $total_cost + $item['cost'];
		<?php echo '?>'; ?>

					<div class="relative flex w-full h-36 rounded overflow-hidden shadow-lg my-2 bg-white">
						<div>
							<img class="h-48" src="assets/images/<?php echo '<?php'; ?>
 echo $item['image']; <?php echo '?>'; ?>
" alt="<?php echo '<?php'; ?>
 echo $item['name']; <?php echo '?>'; ?>
">
						</div>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2"><?php echo '<?php'; ?>
 echo $item['name']; <?php echo '?>'; ?>
</div>
							<p class="text-grey-darker text-base"><?php echo '<?php'; ?>
 echo $item['description']; <?php echo '?>'; ?>
</p>
							<p class="text-grey-darker text-base"><?php echo '<?php'; ?>
 echo $item['cost']; <?php echo '?>'; ?>
 ₽</p>
						</div>
						<div class="absolute inset-y-0 right-0">
							<button type="button" onclick="removeFromCart(<?php echo '<?php'; ?>
 echo $item['id']; <?php echo '?>'; ?>
)" class="h-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Удалить</button>
						</div>
					</div>
		<?php echo '<?php'; ?>

				}
			}
		}
		<?php echo '?>'; ?>

		<div class="relative flex w-full rounded overflow-hidden shadow-lg my-2 bg-white">
			<div class="px-6 py-4">
				<p>Итого: <?php echo $_smarty_tpl->tpl_vars['total_cost']->value;?>
 ₽</p>
			</div>
			<div class="absolute inset-y-0 right-0">
				<button type="button" class="h-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Перейти к оплате</button>
			</div>
		</div>
	</div>
</body>
</html><?php }
}
