<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2018/5/5 0005
 * Time: 10:57
 */

namespace Miner;

/**
 * Trait DeleteTrait
 * @package Miner
 */
trait DeleteTrait
{
    /**
     * Tables to DELETE from, or true if deleting from the FROM table.
     * @var array|true
     */
    private $delete;

    /**
     * Add a table to DELETE from, or false if deleting from the FROM table.
     * @param  string|false $table optional table name, default false
     * @return Miner
     */
    public function delete($table = false): self
    {
        if ($table === false) {
            $this->delete = true;
        } else {
            // Reset the array in case the class variable was previously set to a boolean value.
            if (!\is_array($this->delete)) {
                $this->delete = [];
            }

            $this->delete[] = $table;
        }

        return $this;
    }

    /**
     * Merge this Miner's DELETE into the given Miner.
     * @param  Miner $miner to merge into
     * @return Miner
     */
    public function mergeDeleteInto(Miner $miner): Miner
    {
        $this->mergeOptionsInto($miner);

        if ($this->isDeleteTableFrom()) {
            $miner->delete();
        } else {
            foreach ($this->delete as $delete) {
                $miner->delete($delete);
            }
        }

        return $miner;
    }

    /**
     * Get the DELETE portion of the statement as a string.
     * @param  bool $includeText optional include 'DELETE' text, default true
     * @return string DELETE portion of the statement
     */
    public function getDeleteString($includeText = true): string
    {
        $statement = '';

        if (!$this->delete && !$this->isDeleteTableFrom()) {
            return $statement;
        }

        $statement .= $this->getOptionsString(true);

        if (\is_array($this->delete)) {
            $statement .= \implode(', ', $this->delete);
        }

        if ($includeText && ($statement || $this->isDeleteTableFrom())) {
            $statement = 'DELETE ' . $statement;

            // Trim in case the table is specified in FROM.
            $statement = \trim($statement);
        }

        return $statement;
    }

    /**
     * Whether this is a DELETE statement.
     * @return bool whether this is a DELETE statement
     */
    public function isDelete(): bool
    {
        return !empty($this->delete);
    }

    /**
     * Whether the FROM table is the single table to delete from.
     * @return bool whether the delete table is FROM
     */
    private function isDeleteTableFrom(): bool
    {
        return $this->delete === true;
    }

    /**
     * Get the full DELETE statement.
     * @param  bool $usePlaceholders optional use ? placeholders, default true
     * @return string full DELETE statement
     */
    private function getDeleteStatement($usePlaceholders = true): string
    {
        $statement = '';

        if (!$this->isDelete()) {
            return $statement;
        }

        $statement .= $this->getDeleteString();

        if ($this->from) {
            $statement .= ' ' . $this->getFromString();
        }

        if ($this->where) {
            $statement .= ' ' . $this->getWhereString($usePlaceholders);
        }

        // ORDER BY and LIMIT are only applicable when deleting from a single
        // table.
        if ($this->isDeleteTableFrom()) {
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
