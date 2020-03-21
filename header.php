<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */


$blog_name        = get_bloginfo( 'name' );
$blog_description = get_bloginfo( 'description' );
$header_logo_info = $blog_name . ' - ' . $blog_description;

?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
<<<<<<< HEAD
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', '_s' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$_s_description = get_bloginfo( 'description', 'display' );
			if ( $_s_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $_s_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', '_s' ); ?></button>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->
=======
	<header id="masthead" class="site-header">
    <a class="header__logo-link" href="<?php echo esc_url( home_url() ); ?>" title="<?php echo esc_attr( $blog_name ); ?>">
      <div class="header__logo-img">
      <svg xmlns="http://www.w3.org/2000/svg" width="65" height="60"><text font-family="Myriad Pro" transform="matrix(.6761 0 0 .6761 18.93 27.134)" font-size="30"><tspan><tspan font-family="Roboto" fill="#FFF">LO</tspan> </tspan><tspan x="0" dy="1.2em"><tspan font-family="Roboto" fill="#FFF">G</tspan><tspan font-family="Roboto" fill="#FFF">O</tspan> </tspan></text><path stroke="#FFF" stroke-width="2" fill="none" d="M4 1h56a3 3 0 013 3v51a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3z"/></svg>
      </div>
    </a>

		<div class="header__menu js-header-menu">
      <nav id="site-navigation" class="">
        <?php
        bem_menu(
          'menu-1',
          'primary-menu'
        );
        ?>
      </nav><!-- #site-navigation -->
    </div>

    <div class="header__item header__item--mobile-trigger mobile-menu">
      <a href="#" class="mobile-menu__link js-mobile-menu-trigger">
        <span class="mobile-menu__link-item"></span> 
        <span class="mobile-menu__link-item"></span> 
        <span class="mobile-menu__link-item"></span>
      </a>
    </div>
>>>>>>> feature/stashed
	</header><!-- #masthead -->

	<div id="content" class="site-content">
