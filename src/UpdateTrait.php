<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2018/5/5 0005
 * Time: 11:14
 */

namespace Miner;

/**
 * Trait UpdateTrait
 * @package Miner
 */
trait UpdateTrait
{
    /**
     * Table to UPDATE.
     * @var string
     */
    private $update = '';

    /**
     * Set the UPDATE table.
     * @param  string $table UPDATE table
     * @return Miner
     */
    public function update(string $table): self
    {
        $this->update = $table;

        return $this;
    }

    /**
     * Merge this Miner's UPDATE into the given Miner.
     * @param  Miner $miner to merge into
     * @return Miner
     */
    public function mergeUpdateInto(Miner $miner): self
    {
        $this->mergeOptionsInto($miner);

        if ($this->update) {
            $miner->update($this->getUpdate());
        }

        return $miner;
    }

    /**
     * Whether this is an UPDATE statement.
     * @return bool whether this is an UPDATE statement
     */
    public function isUpdate(): bool
    {
        return !empty($this->update);
    }

    /**
     * Get the UPDATE table.
     * @return string UPDATE table
     */
    public function getUpdate(): string
    {
        return $this->update;
    }

    /**
     * Get the UPDATE portion of the statement as a string.
     * @param  bool $includeText optional include 'UPDATE' text, default true
     * @return string UPDATE portion of the statement
     */
    public function getUpdateString($includeText = true): string
    {
        $statement = '';

        if (!$this->update) {
            return $statement;
        }

        $statement .= $this->getOptionsString(true);
        $statement .= $this->getUpdate();

        // Add any JOINs.
        $statement .= ' ' . $this->getJoinString();
        $statement = rtrim($statement);

        if ($includeText && $statement) {
            $statement = 'UPDATE ' . $statement;
        }

        return $statement;
    }

    /**
     * Get the full UPDATE statement.
     * @param  bool $usePlaceholders optional use ? placeholders, default true
     * @return string full UPDATE statement
     */
    private function getUpdateStatement($usePlaceholders = true): string
    {
        $statement = '';

        if (!$this->isUpdate()) {
            return $statement;
        }

        $statement .= $this->getUpdateString();

        if ($this->set) {
            $statement .= ' ' . $this->getSetString($usePlaceholders);
        }

        if ($this->where) {
            $statement .= ' ' . $this->getWhereString($usePlaceholders);
        }

        // ORDER BY and LIMIT are only applicable when updating a single table.
        if (!$this->join) {
            if ($this->orderBy) {
                $statement .= ' ' . $this->getOrderByString();
            }

            if ($this->limit) {
                $statement .= ' ' . $this->getLimitString();
            }
        }

        return $statement;
    }
}
