<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2018/5/5 0005
 * Time: 11:17
 */

use Miner\Miner;

require __DIR__ . '/test/boot.php';

$miner = Miner::create()
    ->select('*')
    ->from('shows')
    ->innerJoin('episodes', 'show_id')
    ->where('shows.network_id', 12)
    ->orderBy('episodes.aired_on', Miner::ORDER_BY_DESC)
    ->limit(20);

printf("SELECT SQL:\n - %s\n - Bound Params: %s\n", $miner->getStatement(), json_encode($miner->getPlaceholderValues()));

$miner = Miner::create()
    ->insert('shows')
    ->option('HIGH_PRIORITY')
    ->set('network_id', 13)
    ->set('name', 'Freaks & Geeks')
    ->set('air_day', 'Tuesday');

printf("INSERT SQL:\n - %s\n - Bound Params: %s\n", $miner->getStatement(), json_encode($miner->getBoundedParams()));

$miner = Miner::create()
    ->replace('shows')
    ->set('network_id', 13)
    ->set('name', 'Freaks & Geeks')
    ->set('air_day', 'Monday');

printf("REPLACE SQL:\n - %s\n - Bound Params: %s\n", $miner->getStatement(), json_encode($miner->getBoundedParams()));

$miner = Miner::create()
    ->update('episodes')
    ->set('aired_on', '2012-06-25')
    ->where('show_id', 12)
    ->openWhere(Miner::LOGICAL_OR)
    ->where('name', 'Girlfriends and Boyfriends')
    ->where('air_day', 'Monday', Miner::NOT_EQUALS)
    ->closeWhere();

printf("UPDATE SQL:\n - %s\n - Bound Params: %s\n", $miner->getStatement(), json_encode($miner->getBoundedParams()));

$miner = Miner::create()
    ->delete()
    ->from('shows')
    ->whereIn('show_id', [12, 15, 20])
    ->limit(3);

printf("DELETE SQL:\n - %s\n - Bound Params: %s\n", $miner->getStatement(), json_encode($miner->getBoundedParams()));
