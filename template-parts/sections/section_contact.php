<?php 
/**
 * Contact
 */

$title          = get_sub_field('contact_title');
$form_shortcode = get_sub_field('form_shortcode');
$image          = get_sub_field('background_image');
?>

<section class="contact" style="background-image: url(<?php echo esc_url( $image['url'] ); ?>);background-size:cover;height:100%;">
  <div class="contact__container">
      <div class="col">
        <?php if ( $title ) {?>
          <h1 class="contact__title" >
            <?php echo esc_html( $title ); ?>
          </h1>
        <?php } ?>
        <?php if ( $form_shortcode ) {?>
          <div class="contact__form" >
            <?php echo do_shortcode( $form_shortcode ); ?>
          </div>
        <?php } ?>
      </div>

      <div class="col contact__details">
        <?php get_template_part('template-parts/part', 'office'); ?>
      </div>      
    </div>
</section>