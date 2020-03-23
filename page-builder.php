<?php
/**
 *  Template Name: Page Builder
**/
get_header();
?>
<main>
<?php
// check if the post has a Post Thumbnail assigned to it.
if ( has_post_thumbnail() ) { ?>

<?php } ?>

<div id="sections">

<?php
//check if the flexible content field has rows of data
if( have_rows('sections') ):

     // loop through the rows of data
    while ( have_rows('sections') ) : the_row();

    get_template_part( 'template-parts/sections/'. get_row_layout() );

    endwhile;

else :

    // no layouts found

endif;

?>
</div>
</main>

<?php

get_footer();