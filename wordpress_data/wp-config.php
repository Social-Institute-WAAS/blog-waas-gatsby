<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'blog_waas');

/** MySQL database username */
define( 'DB_USER', 'waas_user');

/** MySQL database password */
define( 'DB_PASSWORD', 'waas123');

/** MySQL hostname */
define( 'DB_HOST', 'db:3306');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ad786800846810ec7e09c0e3f3074147a0223f41');
define( 'SECURE_AUTH_KEY',  '4a7f65028c1857c5a1ea305e5b2b631038f1e253');
define( 'LOGGED_IN_KEY',    '49d7ddf05f268c15c810f6deda7ec833b7196e0b');
define( 'NONCE_KEY',        'b96ae370a70e5e793dd73bab1a7a58f80d2391a7');
define( 'AUTH_SALT',        '34d66abae592f67b8013c05417075be86598ffa6');
define( 'SECURE_AUTH_SALT', '00f7224adf69e16988c8149c99781ee2b147700e');
define( 'LOGGED_IN_SALT',   'f3f6f15d51ef7935da8fb7b5eec88c8258919640');
define( 'NONCE_SALT',       '1c0d355da000cd8305ac52521832fae53fdd5f12');

/**#@-*/

define('JWT_AUTH_SECRET_KEY', 'aG^2jX4cS%YOCktCd<tc+O;R-Uw$3y/z_GH.VQoQHU@|2=<n:/%2]J-MIr054<h/');
define('JWT_AUTH_CORS_ENABLE', true);
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

// If we're behind a proxy server and using HTTPS, we need to alert Wordpress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

