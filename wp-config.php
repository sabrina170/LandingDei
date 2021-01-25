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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'grupobli_WPWXG');

/** MySQL database username */
define('DB_USER', 'grupobli_WPWXG');

/** MySQL database password */
define('DB_PASSWORD', 'pVPg(B%kWN[ZyGS/X');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'b7ae1d37f7a43736f4fafdb99eb524a7e59f8a86213efbd02990aa1af363cb68');
define('SECURE_AUTH_KEY', 'd9badaf5cfaf17ca28f7810b92c7d236a41f67afd12b756a7f8bd9f627ac7e4f');
define('LOGGED_IN_KEY', 'dc39580df90580c54386168f5ad109b00257e745cff519cfff9a039ec9752548');
define('NONCE_KEY', 'dd514bdef5be94c23f7631c7b085a936b8da09f5faf3a9396478b31b5ecd211f');
define('AUTH_SALT', '764645e42d286fe0d49157e1cac5bf800d3d62be12e2350b365c7fb59d872034');
define('SECURE_AUTH_SALT', 'cc47d5cb9ffb81801cdccc83612e5cdef18a4979dcaf74dff12b0dde00c4cc4f');
define('LOGGED_IN_SALT', '7cf6dd71557e04f994b65f909bbc5ef3d89461b1ce901698d5da012b4ade06ac');
define('NONCE_SALT', '17a1b68e207ced565353f609860db22c5cbc27619d01175a1d2c6fb0061f81d0');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'UiZ_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 5);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
