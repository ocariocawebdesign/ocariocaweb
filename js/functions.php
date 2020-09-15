
<?php

function estilo_script_enqueue() {

wp_enqueue_style('customstyle', get_template_directory_uri() . '/assets/css/estilo.css', array(), '1.0.0', 'all');

}

add_action('wp_enqueue_scripts', 'estilo_script_enqueue');



/*acrecentando bootstrap*/

function bootstrap_script_enqueue() {

wp_enqueue_style('customstyle', get_template_directory_uri() . '/assets/css/bootstrap.css', array(), '1.0.0', 'all');

}

add_action('wp_enqueue_scripts', 'bootstrap_script_enqueue');


/*acrecentando exemplo1.css*/

function exemplo1_script_enqueue() {

wp_enqueue_style('customstyle', get_template_directory_uri() . '/assets/css/exemplo1.css', array(), '1.0.0', 'all');

}

add_action('wp_enqueue_scripts', 'exemplo1_script_enqueue');


/*acrecentando exemplo2.css*/

function exemplo2_script_enqueue() {

wp_enqueue_style('customstyle', get_template_directory_uri() . '/assets/css/exemplo2.css', array(), '1.0.0', 'all');

}

add_action('wp_enqueue_scripts', 'exemplo2_script_enqueue');


/*acrecentando exemplo3.css*/

function exemplo3_script_enqueue() {

wp_enqueue_style('customstyle', get_template_directory_uri() . '/assets/css/exemplo3.css', array(), '1.0.0', 'all');

}

add_action('wp_enqueue_scripts', 'exemplo3_script_enqueue');

/*Aqui é colocado o JS*/

function exemplojs1_scripts() {

wp_enqueue_script( 'exemplojs1code', get_template_directory_uri() . '/assets/js/exemplojs1.js', array ( 'anima' ), 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'exemplojs1_scripts' );