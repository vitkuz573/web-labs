<?php
/* Smarty version 4.1.1, created on 2022-07-14 07:14:55
  from 'C:\OpenServer\domains\localhost\lab10\templates\cart.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.1.1',
  'unifunc' => 'content_62cf983fb0b0e0_81401119',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd8c83f7b002e975f7430772e81832f7648c6dca6' => 
    array (
      0 => 'C:\\OpenServer\\domains\\localhost\\lab10\\templates\\cart.tpl',
      1 => 1657771792,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_62cf983fb0b0e0_81401119 (Smarty_Internal_Template $_smarty_tpl) {
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
		<?php if ((isset($_smarty_tpl->tpl_vars['cart_cookie']->value))) {?>
			<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, explode(',',$_smarty_tpl->tpl_vars['cart_cookie']->value), 'id');
$_smarty_tpl->tpl_vars['id']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['id']->value) {
$_smarty_tpl->tpl_vars['id']->do_else = false;
?>
				<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['dbh']->value->query("SELECT * FROM items WHERE id = ".((string)$_smarty_tpl->tpl_vars['id']->value)), 'item');
$_smarty_tpl->tpl_vars['item']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->tpl_vars['item']->do_else = false;
?>
					<?php $_smarty_tpl->_assignInScope('total_cost', $_smarty_tpl->tpl_vars['total_cost']->value+$_smarty_tpl->tpl_vars['item']->value['cost']);?>
					<div class="relative flex w-full h-36 rounded overflow-hidden shadow-lg my-2 bg-white">
						<div>
							<img class="h-48" src="assets/images/<?php echo $_smarty_tpl->tpl_vars['item']->value['image'];?>
" alt="<?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
">
						</div>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2"><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</div>
							<p class="text-grey-darker text-base"><?php echo $_smarty_tpl->tpl_vars['item']->value['description'];?>
</p>
							<p class="text-grey-darker text-base"><?php echo $_smarty_tpl->tpl_vars['item']->value['cost'];?>
 ₽</p>
						</div>
						<div class="absolute inset-y-0 right-0">
							<button type="button" onclick="removeFromCart(<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
)" class="h-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Удалить</button>
						</div>
					</div>
				<?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
			<?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
		<?php }?>
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
