<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2018/5/5 0005
 * Time: 11:34
 */

namespace Miner;

/**
 * Trait SelectTrait
 * @package Miner
 */
trait SelectTrait
{
    /**
     * Columns, tables, and expressions to SELECT from.
     * @var array
     */
    private $select;

    /**
     * Add a SELECT column, table, or expression with optional alias.
     * @param  string|array $column column name, table name, or expression
     * @param  string $alias optional alias
     * @return Miner
     */
    public function select($column, string $alias = null): self
    {
        if (\is_string($column)) {
            if (\strpos($column, ',')) {
                $this->select = \array_merge($this->select, \array_filter(\explode(',', $column)));
            } else {
                $this->select[$column] = $alias;
            }
        } elseif (\is_array($column)) {
            foreach ($column as $col => $ali) {
                if (\is_numeric($col)) {
                    $this->select[$ali] = null;
                } else {
                    $this->select[$col] = $ali;
                }
            }
        }

        return $this;
    }

    /**
     * Whether this is a SELECT statement.
     * @return bool whether this is a SELECT statement
     */
    public function isSelect(): bool
    {
        return !empty($this->select);
    }

    /**
     * @return array
     */
    public function getSelect(): array
    {
        return $this->select;
    }

    /**
     * Merge this Miner's SELECT into the given Miner.
     * @param  Miner $miner to merge into
     * @return Miner
     */
    public function mergeSelectInto(Miner $miner): self
    {
        $this->mergeOptionsInto($miner);

        foreach ($this->select as $column => $alias) {
            $miner->select($column, $alias);
        }

        return $miner;
    }

    /**
     * Get the SELECT portion of the statement as a string.
     * @param  bool $includeText optional include 'SELECT' text, default true
     * @return string SELECT portion of the statement
     */
    public function getSelectString($includeText = true): string
    {
        $statement = '';

        if (!$this->select) {
            return $statement;
        }

        $statement .= $this->getOptionsString(true);

        foreach ($this->select as $column => $alias) {
            $statement .= $column;

            if ($alias) {
                $statement .= ' AS ' . $alias;
            }

            $statement .= ', ';
        }

        $statement = substr($statement, 0, -2);

        if ($includeText && $statement) {
            $statement = 'SELECT ' . $statement;
        }

        return $statement;
    }

    /**
     * Get the full SELECT statement.
     * @param  bool $usePlaceholders optional use ? placeholders, default true
     * @return string full SELECT statement
     */
    private function getSelectStatement($usePlaceholders = true): string
    {
        $statement = '';

        if (!$this->isSelect()) {
            return $statement;
        }

        $statement .= $this->getSelectString();

        if ($this->from) {
            $statement .= ' ' . $this->getFromString();
        }

        if ($this->where) {
            $statement .= ' ' . $this->getWhereString($usePlaceholders);
        }

        if ($this->groupBy) {
            $statement .= ' ' . $this->getGroupByString();
        }

        if ($this->having) {
            $statement .= ' ' . $this->getHavingString($usePlaceholders);
        }

        if ($this->orderBy) {
            $statement .= ' ' . $this->getOrderByString();
        }

        if ($this->limit) {
            $statement .= ' ' . $this->getLimitString();
        }

        return $statement;
    }

}
