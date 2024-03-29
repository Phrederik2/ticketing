<?php

/**
 * Create your routes in here. The name is the lowercase name of the controller
 * without the controller part, the stuff after the hash is the method.
 * e.g. page#index -> OCA\Ticketing\Controller\PageController->index()
 *
 * The controller class has to be registered in the application.php file since
 * it's instantiated in there
 */
return [
	'routes' => [
		['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
		['name' => 'page#indexPOST', 'url' => '/', 'verb' => 'POST'],
		['name' => 'PublicAPI#get', 'url' => '/display/{token}', 'verb' => 'GET'],
		['name' => 'PublicAPI#getPOST', 'url' => '/display/{token}', 'verb' => 'POST'],
		['name' => 'page#pdf', 'url' => '/pdf', 'verb' => 'GET'],
		['name' => 'PublicAPI#pdf', 'url' => '/display/{token}/pdf', 'verb' => 'GET']

	]
];
