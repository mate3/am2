<?php 
/**
 * Latest news
 */


$title = get_sub_field('title');
$number_of_posts = get_sub_field('number_of_posts');
?>

<section class="latest-news">

<div class="latest-news__container">
  <h2 class="latest-news__title">
  <?php if ( !empty( $title ) ) {
      esc_html_e( $title );
    }
  ?>
  </h2>
  <div class="latest-news__wrapper">

  <?php

    global $post;
    if ( !empty( $number_of_posts ) ) {
      $args = array( 
        'posts_per_page' => $number_of_posts,
        'suppress_filters' => false
      );
    } else {
      $args = array( 
        'posts_per_page' => 3,
        'suppress_filters' => false
      );
    }

    $latest_posts = get_posts( $args );
    foreach ( $latest_posts as $post ) : setup_postdata( $post ); ?>
      <div class="latest-news__item">
        <article class="article"> 
          <a class="article__link" href="<?php esc_url( the_permalink() ); ?>">
            <div class="article__image" style="background-image: url('<?php echo esc_url( get_the_post_thumbnail_url(get_the_id(), 'full') ); ?>')"></div>
            <div class="article__content">
              <h2 class="article__title"><?php esc_html( the_title() ); ?></h2>
              <div class="article__intro"><?php esc_html( the_excerpt() ); ?></div>
              <div class="article__footer">
                <div class="article__date"><?php echo esc_html( get_the_time('M d\' y') ); ?></div> 
                <!-- HARDCODED COMMENTS START-->
                <div class="article__comments"><?php echo esc_html('5 Comments'); ?></div> 
                <!-- HARDCODED COMMENTS END-->
              </div>
            </div>
          </a>
        </article>
      </div>

    <?php endforeach; 
      wp_reset_postdata();
      ?>


  </div>
</div>
</section>