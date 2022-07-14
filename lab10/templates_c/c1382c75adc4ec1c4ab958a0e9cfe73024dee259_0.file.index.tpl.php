<?php
/* Smarty version 4.1.1, created on 2022-07-14 07:14:32
  from 'C:\OpenServer\domains\localhost\lab10\templates\index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.1.1',
  'unifunc' => 'content_62cf9828525ee7_64700383',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'c1382c75adc4ec1c4ab958a0e9cfe73024dee259' => 
    array (
      0 => 'C:\\OpenServer\\domains\\localhost\\lab10\\templates\\index.tpl',
      1 => 1657772071,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_62cf9828525ee7_64700383 (Smarty_Internal_Template $_smarty_tpl) {
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
 src="assets/js/jquery.cookie.js"><?php echo '</script'; ?>
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
						<a href="index.php" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Главная</a>
						<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">О нас</a>
						<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Контакты</a>
						<a href="cart.php" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Корзина</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
	
	<div class="flex flex-wrap justify-center -m-2">
		<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['dbh']->value->query('SELECT * FROM items'), 'item');
$_smarty_tpl->tpl_vars['item']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->tpl_vars['item']->do_else = false;
?>
			<div class="p-4">
				<div class="rounded-lg shadow-lg bg-white max-w-sm">
					<a href="#">
						<img class="rounded-t-lg" src="assets/images/<?php echo $_smarty_tpl->tpl_vars['item']->value['image'];?>
" alt="<?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
"/>
					</a>
					<div class="p-6">
						<h5 class="text-gray-900 text-xl font-medium mb-2"><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</h5>
						<p class="text-gray-700 text-base mb-4"><?php echo $_smarty_tpl->tpl_vars['item']->value['description'];?>
</p>
						<p class="text-gray-700 text-base mb-4"><?php echo $_smarty_tpl->tpl_vars['item']->value['cost'];?>
 ₽</p>
						<button type="button" onclick="addToCart(<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
);" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Добавить в корзину</button>
					</div>
				</div>
			</div>
        <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
		</div>
	</body>
</html><?php }
}
