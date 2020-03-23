<?php 
/**
 * Full image
 */

$images = get_sub_field('images');
?>

<div class="swiper-container slider js-slider">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper slider__wrapper">
      <!-- Slides -->  
      <?php 
        if( have_rows('images') ): ?>
          <?php
          // loop through the rows of data
          while ( have_rows('images') ) : the_row();
		      $image = get_sub_field('image');
		      $title = get_sub_field('title');
		      $link_text = get_sub_field('link_text');
		      $link = get_sub_field('link');
        ?>
          <div class="swiper-slide slider__item" style="background-image: url('<?php echo esc_url( $image['url'] ); ?>')">
          <div class="slider__content">
            <span class="slider__title"><?php echo esc_html( $title ); ?></span>
            <a class="slider__link" href="<?php echo esc_html( $link ); ?>"><?php echo esc_html( $link_text ); ?></a>
          </div>
          </div>
        <?php
            endwhile;?>
 
         <?php
        endif;
      ?>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination slider__pagination"></div>
   
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar slider__scrollbar"></div>
</div>
