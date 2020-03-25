<?php 
/**
 * Team
 */

$title = get_sub_field('title');
$intro_text = get_sub_field('intro_text');
?>

<div class="team">
  <div class="team__container">
    <h2 class="team__title"><?php echo wp_kses( $title, array('br' => true) ); ?></h2> 
    <div class="team__intro"><?php echo esc_html( $intro_text ); ?></div>
      <?php 
        if( have_rows('team') ): ?>
          <div class="team__list">
            <?php
            // loop through the rows of data
            while ( have_rows('team') ) : the_row();
            $image = get_sub_field('image');
            $title = get_sub_field('title');
            $text = get_sub_field('text');
            $facebook = get_sub_field('facebook');
            $rss = get_sub_field('rss');
            $twitter = get_sub_field('twitter');
            $pinterest = get_sub_field('pinterest');

          ?>
            <div class="team__item">
            <div class="team__content">
              <img class="team__image" src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_url( $image['alt'] ); ?>">
              <div class="team__info">
                <h3 class="team__item-title"><?php echo esc_html( $title ); ?></h3>
                <?php if ( $facebook || $rss || $twitter || $pinterest ) {?>
                  <div class="team__social">
                    <?php if ( $facebook ) {?>
                      <a href="<?php echo esc_url( $facebook ); ?>" class="team__social--fb"></a>
                    <?php } ?>
                    <?php if ( $rss ) {?>
                      <a href="<?php echo esc_url( $rss ); ?>" class="team__social--rss"></a>
                    <?php } ?>
                    <?php if ( $twitter ) {?>
                      <a href="<?php echo esc_url( $twitter ); ?>" class="team__social--tw"></a>
                    <?php } ?>
                    <?php if ( $pinterest ) {?>
                      <a href="<?php echo esc_url( $pinterest ); ?>" class="team__social--pt"></a>
                    <?php } ?>
                  </div>
                <?php } ?>
              </div>

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
