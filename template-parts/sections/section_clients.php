<?php 
/**
 * Clients
 */

?>

<div class="clients">
  <?php 
    if( have_rows('logos') ): ?>
      <?php
      // loop through the rows of data
      while ( have_rows('logos') ) : the_row();
	    $logo = get_sub_field('logo');
      ?>
        <img class="clients__logo" src="<?php echo esc_url( $logo['url'] ); ?>" style="background-image: url();"/>
      <?php
      endwhile;?>
  <?php
    endif;
  ?>
</div>