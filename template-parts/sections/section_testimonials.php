<?php 
/**
 * Full image
 */
$bg_image = get_sub_field('background_image');
$testimonials = get_sub_field('testimonials');
?>
<div class="testimonials" style="background-image: url(<?php echo esc_url( $bg_image ); ?>);">
  <div class="swiper-container testimonials__container js-testimonial-slider">
      
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper testimonials__wrapper">
          <!-- Slides -->  
          <?php 
            if( have_rows('testimonials') ): ?>
              <?php
              // loop through the rows of data
              while ( have_rows('testimonials') ) : the_row();
              $image = get_sub_field('image');
              $text = get_sub_field('text');
            ?>
              <div class="swiper-slide testimonials__item">
                <div class="testimonials__content">
                  <img class="testimonials__image" src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_url( $image['alt'] ); ?>">
                  <div class="testimonials__text"><?php echo esc_html( $text ); ?></div>
                </div>
              </div>
            <?php
                endwhile;?>
    
            <?php
            endif;
          ?>
        </div>

      <!-- If we need pagination -->
      <div class="swiper-pagination testimonials__pagination"></div>

  </div>
</div>