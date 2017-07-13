<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'wp1');

/** Имя пользователя MySQL */
define('DB_USER', 'wp1');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '1234');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yOSNG&,S]q4#nb)XAHUsb}%>r4KK(A`}jr6]5r,?> ]WzPk{:LN>=ZKan<7QwN^$');
define('SECURE_AUTH_KEY',  '6aZ2IG%,wgCUH/K`D[e4+I]|_3WdH!)*m70z&ahW;e2]BuhC3UdwPRDOironxX-d');
define('LOGGED_IN_KEY',    '?^lzkHGQg6r<Od$JQ|oIyhXp`dUE;suxIN${{W2$*=@&2,)h/3eV/XgkE-i+C<l_');
define('NONCE_KEY',        'f1PnIWnn(NZEq/qIQa~4*k&^}|uR^l?eH5$B.{|v(GT^mjSg01I1FHk:l^sP](4l');
define('AUTH_SALT',        'T|xJz}N{2AbWPIg9q-EP7fmbG#;yCg2MRk1~~u.dQBWZUvSR=k53co-j7]}3GN9n');
define('SECURE_AUTH_SALT', 'ZU-v:nTUlc.Cf)ML%f>jT$wE0(uoY`sGtPH}25Pb;V$q/iEE/X^6vM6[go@PV2ms');
define('LOGGED_IN_SALT',   'A^u&{b+7#T!_{(,Y7@hu/]?Te}xUbTLr*32#<Q`^2VGe:%=clTK;)`-/5Z3o]3UM');
define('NONCE_SALT',       'VIUz&[_*370oMWv]B~27s8B$40ykZW}9L<=})7$IxiD]}MK#/,hwX7Yj3G|q^;_.');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
