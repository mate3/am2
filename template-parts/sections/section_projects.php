<?php 
/**
 * Projects
 */

$title = get_sub_field('title');
$intro_text = get_sub_field('intro_text');
$button = get_sub_field('more_button');
?>

<div class="projects">
  <div class="projects__container">
    <h2 class="projects__title"><?php echo wp_kses( $title, array('br' => true) ); ?></h2> 
    <div class="projects__intro"><?php echo esc_html( $intro_text ); ?></div>
      <?php 
        if( have_rows('projects') ): ?>
          <div class="projects__list">
            <?php
            // loop through the rows of data
            while ( have_rows('projects') ) : the_row();
            $image = get_sub_field('image');
            $title = get_sub_field('title');
            $text = get_sub_field('text');
          ?>
            <div class="projects__item">
            <div class="projects__content">
              <img class="projects__image" src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_url( $image['alt'] ); ?>">
            </div>
            </div>
          <?php
              endwhile;?>
          </div>
         <?php
        endif;
      ?>
    <?php if ($button) { ?>
      <div class="projects__load-more">
        <a href="<?php echo esc_url( $intro_text ); ?>" class="projects__button"><?php esc_html_e( 'Load more', 'am2' ); ?></a>
      </div>
    <?php }?>
  </div>    
</div>
