<?php
/**
 * Social
 */

?>

<div class="social">

<h2 class="social__title">
  <?php echo esc_html__( 'Go business', 'am2' ); ?>
</h2>

<?php if( have_rows( 'social_networks', 'option' ) ): ?>

  <div class="social__icons">

  <?php while( have_rows( 'social_networks', 'option' ) ): the_row(); 

    $icon = get_sub_field('icon');
    $link = get_sub_field('link');
    ?>

    <a class="social__icon" href="<?php echo esc_url($link); ?>"><?php echo $icon; ?></a>


  <?php endwhile; ?>

  </div>

<?php endif; ?>

</div>