<?php 
/**
 * Our office part
 */

$location = get_field( 'location', 'option' );
$phone    = get_field( 'phone', 'option' );
$mail     = get_field( 'mail', 'option' );
?>

<div class="office">
  <h3 class="office__title">
    <?php echo esc_html_e( 'Our office', 'am2' ); ?>
  </h3>
  <div class="office__list"> 
    <?php if ( $location ) { ?>
      <div class="office__location">
        <i class="office__icon fas fa-home"></i> <?php echo wp_kses( $location, array('br' => true) ); ?>
      </div>
    <?php } ?>

    <?php if ( $phone ) { ?>
    <div class="office__contact">
      <a href="tel:<?php echo esc_html( $phone ); ?>"><i class="office__icon fas fa-phone-alt"></i> <?php echo esc_html( $phone ); ?></a>
    </div>
    <?php } ?>
    
    <?php if ( $mail ) { ?>
    <div class="office__mail">
    <a href="<?php echo esc_html( $mail ); ?>"><i class="office__icon fas fa-envelope"></i> <?php echo esc_html( $mail ); ?></a>
    </div>
    <?php } ?>

  </div>
</div>
