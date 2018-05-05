<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2018/5/5 0005
 * Time: 11:29
 */

namespace Miner;

/**
 * Trait InsertTrait
 * @package Miner
 */
trait InsertTrait
{
    /**
     * Table to INSERT into.
     * @var string
     */
    private $insert = '';

    /**
     * Whether this is an INSERT statement.
     * @return bool whether this is an INSERT statement
     */
    public function isInsert(): bool
    {
        return !empty($this->insert);
    }

    /**
     * Set the INSERT table.
     * @param  string $table INSERT table
     * @return Miner
     */
    public function insert(string $table): self
    {
        $this->insert = $table;

        return $this;
    }

    /**
     * Merge this Miner's INSERT into the given Miner.
     * @param  Miner $miner to merge into
     * @return Miner
     */
    public function mergeInsertInto(Miner $miner): self
    {
        $this->mergeOptionsInto($miner);

        if ($this->insert) {
            $miner->insert($this->getInsert());
        }

        return $miner;
    }

    /**
     * Get the INSERT table.
     * @return string INSERT table
     */
    public function getInsert(): string
    {
        return $this->insert;
    }

    /**
     * Get the INSERT portion of the statement as a string.
     * @param  bool $includeText optional include 'INSERT' text, default true
     * @return string INSERT portion of the statement
     */
    public function getInsertString(bool $includeText = true): string
    {
        $statement = '';

        if (!$this->insert) {
            return $statement;
        }

        $statement .= $this->getOptionsString(true);
        $statement .= $this->getInsert();

        if ($includeText && $statement) {
            $statement = 'INSERT INTO ' . $statement;
        }

        return $statement;
    }

    /**
     * Get the full INSERT statement.
     * @param  bool $usePlaceholders optional use ? placeholders, default true
     * @return string full INSERT statement
     */
    private function getInsertStatement(bool $usePlaceholders = true): string
    {
        $statement = '';

        if (!$this->isInsert()) {
            return $statement;
        }

        $statement .= $this->getInsertString();

        if ($this->set) {
            $statement .= ' ' . $this->getSetString($usePlaceholders);
        }

        return $statement;
    }
}
