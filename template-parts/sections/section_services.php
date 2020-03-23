<?php 
/**
 * Services
 */

$title = get_sub_field('title');
$intro_text = get_sub_field('intro_text');
?>

<div class="services">
  <div class="services__container">
    <h2 class="services__title"><?php echo wp_kses( $title, array('br' => true) ); ?></h2> 
    <div class="services__intro"><?php echo esc_html( $intro_text ); ?></div>
      <?php 
        if( have_rows('services') ): ?>
          <div class="services__list">
            <?php
            // loop through the rows of data
            while ( have_rows('services') ) : the_row();
            $image = get_sub_field('image');
            $title = get_sub_field('title');
            $text = get_sub_field('text');
          ?>
            <div class="services__item">
            <div class="services__content">
              <img class="services__image" src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_url( $image['alt'] ); ?>">
              <h3 class="services__item-title"><?php echo esc_html( $title ); ?></h3>
              <p class="services__text"><?php echo esc_html( $text ); ?></p>
            </div>
            </div>
          <?php
              endwhile;?>
          </div>
         <?php
        endif;
      ?>
  </div>    
</div>
