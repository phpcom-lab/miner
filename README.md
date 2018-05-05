# Miner

[![Latest Stable Version](https://poser.pugx.org/jstayton/miner/v/stable.png)](https://packagist.org/packages/ulue/miner)
[![Total Downloads](https://poser.pugx.org/jstayton/miner/downloads.png)](https://packagist.org/packages/ulue/miner)

> forked from https://github.com/jstayton/Miner

A dead simple PHP class for building SQL statements. No manual string concatenation necessary.

Developed by [Justin Stayton](http://twitter.com/jstayton) while at [Monk Development](http://monkdev.com).

* [Documentation](https://ulue.github.io/Miner/classes/master/Miner/Miner.html)
* [Release Notes](https://github.com/jstayton/Miner/wiki/Release-Notes)

## Requirements

* PHP > 7.0.0

## Installation

### Composer

The recommended installation method is through [Composer](http://getcomposer.org/), a dependency manager for PHP. 

In command line:

```bash
composer require ulue/miner
```

Or, just add `ulue/miner` to your project's `composer.json` file:

```json
{
    "require": {
        "ulue/miner": "*"
    }
}
```

[More details](http://packagist.org/packages/ulue/miner) can be found over at [Packagist](http://packagist.org).

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

* [__construct](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method___construct)

### SELECT

* [select](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_select)
* [getSelect](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getSelect)
* [getSelectString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getSelectString)
* [mergeSelectInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeSelectInto)

### INSERT

* [insert](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_insert)
* [getInsert](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getInsert)
* [getInsertString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getInsertString)
* [mergeInsertInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeInsertInto)

### REPLACE

* [replace](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_replace)
* [getReplace](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getReplace)
* [getReplaceString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getReplaceString)
* [mergeReplaceInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeReplaceInto)

### UPDATE

* [update](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_update)
* [getUpdate](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getUpdate)
* [getUpdateString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getUpdateString)
* [mergeUpdateInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeUpdateInto)

### DELETE

* [delete](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_delete)
* [getDeleteString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getDeleteString)
* [mergeDeleteInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeDeleteInto)

### OPTIONS

* [option](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_option)
* [calcFoundRows](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_calcFoundRows)
* [distinct](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_distinct)
* [getOptionsString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getOptionsString)
* [mergeOptionsInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeOptionsInto)

### SET / VALUES

* [set](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_set)
* [values](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_values)
* [getSetPlaceholderValues](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getSetPlaceholderValues)
* [getSetString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getSetString)
* [mergeSetInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeSetInto)

### FROM

* [from](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_from)
* [innerJoin](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_innerJoin)
* [leftJoin](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_leftJoin)
* [rightJoin](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_rightJoin)
* [join](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_join)
* [getFrom](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getFrom)
* [getFromAlias](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getFromAlias)
* [getFromString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getFromString)
* [getJoinString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getJoinString)
* [mergeFromInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeFromInto)
* [mergeJoinInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeJoinInto)

### WHERE

* [where](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_where)
* [andWhere](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_andWhere)
* [orWhere](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_orWhere)
* [whereIn](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_whereIn)
* [whereNotIn](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_whereNotIn)
* [whereBetween](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_whereBetween)
* [whereNotBetween](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_whereNotBetween)
* [openWhere](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_openWhere)
* [closeWhere](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_closeWhere)
* [getWherePlaceholderValues](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getWherePlaceholderValues)
* [getWhereString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getWhereString)
* [mergeWhereInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeWhereInto)

### GROUP BY

* [groupBy](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_groupBy)
* [getGroupByString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getGroupByString)
* [mergeGroupByInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeGroupByInto)

### HAVING

* [having](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_having)
* [andHaving](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_andHaving)
* [orHaving](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_orHaving)
* [havingIn](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_havingIn)
* [havingNotIn](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_havingNotIn)
* [havingBetween](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_havingBetween)
* [havingNotBetween](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_havingNotBetween)
* [openHaving](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_openHaving)
* [closeHaving](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_closeHaving)
* [getHavingPlaceholderValues](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getHavingPlaceholderValues)
* [getHavingString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getHavingString)
* [mergeHavingInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeHavingInto)

### ORDER BY

* [orderBy](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_orderBy)
* [getOrderByString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getOrderByString)
* [mergeOrderByInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeOrderByInto)

### LIMIT

* [limit](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_limit)
* [getLimit](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getLimit)
* [getLimitOffset](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getLimitOffset)
* [getLimitString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getLimitString)

### Statement

* [execute](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_execute)
* [getSql](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getSql)
* [getStatement](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getStatement)
* [getBoundedParams](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getBoundedParams)
* [getPlaceholderValues](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getPlaceholderValues)
* [isSelect](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_isSelect)
* [isInsert](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_isInsert)
* [isReplace](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_isReplace)
* [isUpdate](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_isUpdate)
* [isDelete](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_isDelete)
* [__toString](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method___toString)
* [mergeInto](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_mergeInto)

### Connection

* [setPdoConnection](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_setPdoConnection)
* [getPdoConnection](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getPdoConnection)
* [setAutoQuote](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_setAutoQuote)
* [getAutoQuote](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_getAutoQuote)
* [autoQuote](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_autoQuote)
* [quote](https://ulue.github.io/Miner/classes/master/Miner/Miner.html#method_quote)

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
