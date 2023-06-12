<?php
header('Content-Type: application/json');

$json_discs = file_get_contents('./dischi.json');

if (isset($_GET['disc'])) {
	$arr_discs = json_decode($json_discs, true);
	$disc_details = $arr_discs[$_GET['disc']];
	$json_response = json_encode($disc_details);
} else {
	$json_response = $json_discs;
}

echo $json_response;