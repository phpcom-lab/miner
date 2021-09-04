# Miner

[![Latest Stable Version](https://poser.pugx.org/phpcom-lab/miner/v/stable.png)](https://packagist.org/packages/phpcom-lab/miner)

> forked from https://github.com/jstayton/Miner

A dead simple PHP class for building SQL statements. No manual string concatenation necessary.

Developed by [Justin Stayton](http://twitter.com/jstayton) while at [Monk Development](http://monkdev.com).

* [Documentation](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html)
* [Release Notes](https://github.com/phpcom-lab/miner/wiki/Release-Notes)

## Requirements

* PHP > 7.0.0

## Installation

### Composer

The recommended installation method is through [Composer](http://getcomposer.org/), a dependency manager for PHP. 

In command line:

```bash
composer require phpcom-lab/miner
```

Or, just add `phpcom-lab/miner` to your project's `composer.json` file:

```json
{
    "require": {
        "phpcom-lab/miner": "*"
    }
}
```

[More details](http://packagist.org/packages/phpcom-lab/miner) can be found over at [Packagist](http://packagist.org).

## Getting Started

Composing SQL with Miner is very similar to writing it by hand, as much of the
syntax maps directly to methods:

```php
$miner = Miner::create()
      ->select('*')
      ->from('shows')
      ->innerJoin('episodes', 'show_id')
      ->where('shows.network_id', 12)
      ->orderBy('episodes.aired_on', Miner::ORDER_BY_DESC)
      ->limit(20);
```

Now that the statement is built,

```php
$miner->getSql(); // Or $miner->getStatement();
```

returns the full SQL string with placeholders (?), and

```php
$miner->getBoundedParams(); // Or $miner->getPlaceholderValues();
```

returns the array of placeholder values that can then be passed to your
database connection or abstraction layer of choice. Or, if you'd prefer it all
at once, you can get the SQL string with values already safely quoted:

```php
$miner->getSql(false); // Or $miner->getStatement(false);
```

If you're using PDO, however, Miner makes executing the statement even easier:

```php
$PDOStatement = $miner->execute();
```

Miner works directly with your PDO connection, which can be passed during
creation of the Miner object

```php
$miner = Miner::create($PDO)
$miner = new Miner($PDO);
```

or after

```php
$miner->setPdoConnection($PDO);
```

## Usage

### SELECT

```mysql
SELECT *
FROM shows
INNER JOIN episodes
  ON shows.show_id = episodes.show_id
WHERE shows.network_id = 12
ORDER BY episodes.aired_on DESC
LIMIT 20
```

With Miner:

```php
$miner->select('*')
      ->from('shows')
      ->innerJoin('episodes', 'show_id')
      ->where('shows.network_id', 12)
      ->orderBy('episodes.aired_on', Miner::ORDER_BY_DESC)
      ->limit(20);
```

### INSERT

```mysql
INSERT HIGH_PRIORITY shows
SET network_id = 13,
    name = 'Freaks & Geeks',
    air_day = 'Tuesday'
```

With Miner:

```php
$miner->insert('shows')
      ->option('HIGH_PRIORITY')
      ->set('network_id', 13)
      ->set('name', 'Freaks & Geeks')
      ->set('air_day', 'Tuesday');
```

### REPLACE

```mysql
REPLACE shows
SET network_id = 13,
    name = 'Freaks & Geeks',
    air_day = 'Monday'
```

With Miner:

```php
$miner->replace('shows')
      ->set('network_id', 13)
      ->set('name', 'Freaks & Geeks')
      ->set('air_day', 'Monday');
```

### UPDATE

```mysql
UPDATE episodes
SET aired_on = '2012-06-25'
WHERE show_id = 12
  OR (name = 'Girlfriends and Boyfriends' AND air_day != 'Monday')
```

With Miner:

```php
$miner->update('episodes')
      ->set('aired_on', '2012-06-25')
      ->where('show_id', 12)
      ->openWhere(Miner::LOGICAL_OR)
          ->where('name', 'Girlfriends and Boyfriends')
          ->where('air_day', 'Monday', Miner::NOT_EQUALS)
      ->closeWhere();
```

### DELETE

```mysql
DELETE
FROM shows
WHERE show_id IN (12, 15, 20)
LIMIT 3
```

With Miner:

```php
$miner->delete()
      ->from('shows')
      ->whereIn('show_id', array(12, 15, 20))
      ->limit(3);
```

## Methods

* [__construct](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method___construct)

### SELECT

* [select](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_select)
* [getSelect](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getSelect)
* [getSelectString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getSelectString)
* [mergeSelectInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeSelectInto)

### INSERT

* [insert](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_insert)
* [getInsert](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getInsert)
* [getInsertString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getInsertString)
* [mergeInsertInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeInsertInto)

### REPLACE

* [replace](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_replace)
* [getReplace](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getReplace)
* [getReplaceString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getReplaceString)
* [mergeReplaceInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeReplaceInto)

### UPDATE

* [update](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_update)
* [getUpdate](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getUpdate)
* [getUpdateString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getUpdateString)
* [mergeUpdateInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeUpdateInto)

### DELETE

* [delete](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_delete)
* [getDeleteString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getDeleteString)
* [mergeDeleteInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeDeleteInto)

### OPTIONS

* [option](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_option)
* [calcFoundRows](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_calcFoundRows)
* [distinct](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_distinct)
* [getOptionsString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getOptionsString)
* [mergeOptionsInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeOptionsInto)

### SET / VALUES

* [set](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_set)
* [values](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_values)
* [getSetPlaceholderValues](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getSetPlaceholderValues)
* [getSetString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getSetString)
* [mergeSetInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeSetInto)

### FROM

* [from](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_from)
* [innerJoin](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_innerJoin)
* [leftJoin](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_leftJoin)
* [rightJoin](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_rightJoin)
* [join](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_join)
* [getFrom](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getFrom)
* [getFromAlias](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getFromAlias)
* [getFromString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getFromString)
* [getJoinString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getJoinString)
* [mergeFromInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeFromInto)
* [mergeJoinInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeJoinInto)

### WHERE

* [where](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_where)
* [andWhere](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_andWhere)
* [orWhere](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_orWhere)
* [whereIn](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_whereIn)
* [whereNotIn](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_whereNotIn)
* [whereBetween](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_whereBetween)
* [whereNotBetween](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_whereNotBetween)
* [openWhere](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_openWhere)
* [closeWhere](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_closeWhere)
* [getWherePlaceholderValues](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getWherePlaceholderValues)
* [getWhereString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getWhereString)
* [mergeWhereInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeWhereInto)

### GROUP BY

* [groupBy](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_groupBy)
* [getGroupByString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getGroupByString)
* [mergeGroupByInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeGroupByInto)

### HAVING

* [having](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_having)
* [andHaving](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_andHaving)
* [orHaving](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_orHaving)
* [havingIn](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_havingIn)
* [havingNotIn](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_havingNotIn)
* [havingBetween](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_havingBetween)
* [havingNotBetween](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_havingNotBetween)
* [openHaving](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_openHaving)
* [closeHaving](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_closeHaving)
* [getHavingPlaceholderValues](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getHavingPlaceholderValues)
* [getHavingString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getHavingString)
* [mergeHavingInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeHavingInto)

### ORDER BY

* [orderBy](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_orderBy)
* [getOrderByString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getOrderByString)
* [mergeOrderByInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeOrderByInto)

### LIMIT

* [limit](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_limit)
* [getLimit](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getLimit)
* [getLimitOffset](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getLimitOffset)
* [getLimitString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getLimitString)

### Statement

* [execute](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_execute)
* [getSql](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getSql)
* [getStatement](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getStatement)
* [getBoundedParams](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getBoundedParams)
* [getPlaceholderValues](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getPlaceholderValues)
* [isSelect](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_isSelect)
* [isInsert](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_isInsert)
* [isReplace](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_isReplace)
* [isUpdate](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_isUpdate)
* [isDelete](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_isDelete)
* [__toString](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method___toString)
* [mergeInto](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_mergeInto)

### Connection

* [setPdoConnection](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_setPdoConnection)
* [getPdoConnection](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getPdoConnection)
* [setAutoQuote](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_setAutoQuote)
* [getAutoQuote](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_getAutoQuote)
* [autoQuote](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_autoQuote)
* [quote](https://phpcom-lab.github.io/miner/classes/master/Miner/Miner.html#method_quote)

Feedback
--------

Please open an issue to request a feature or submit a bug report. Or even if
you just want to provide some feedback, I'd love to hear. I'm also available on
Twitter as [@jstayton](http://twitter.com/jstayton).

Contributing
------------

1.  Fork it.
2.  Create your feature branch (`git checkout -b my-new-feature`).
3.  Commit your changes (`git commit -am 'Added some feature'`).
4.  Push to the branch (`git push origin my-new-feature`).
5.  Create a new Pull Request.
