<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2018/5/5 0005
 * Time: 11:34
 */

namespace Miner;

/**
 * Trait ReplaceTrait
 * @package Miner
 */
trait ReplaceTrait
{
    /**
     * Table to REPLACE into.
     * @var string
     */
    private $replace = '';

    /**
     * Set the REPLACE table.
     * @param  string $table REPLACE table
     * @return Miner
     */
    public function replace(string $table): self
    {
        $this->replace = $table;

        return $this;
    }

    /**
     * Merge this Miner's REPLACE into the given Miner.
     * @param  Miner $miner to merge into
     * @return Miner
     */
    public function mergeReplaceInto(Miner $miner): self
    {
        $this->mergeOptionsInto($miner);

        if ($this->replace) {
            $miner->replace($this->getReplace());
        }

        return $miner;
    }

    /**
     * Whether this is a REPLACE statement.
     * @return bool whether this is a REPLACE statement
     */
    public function isReplace(): bool
    {
        return !empty($this->replace);
    }

    /**
     * Get the REPLACE table.
     * @return string REPLACE table
     */
    public function getReplace(): string
    {
        return $this->replace;
    }

    /**
     * Get the REPLACE portion of the statement as a string.
     * @param  bool $includeText optional include 'REPLACE' text, default true
     * @return string REPLACE portion of the statement
     */
    public function getReplaceString($includeText = true): string
    {
        $statement = '';

        if (!$this->replace) {
            return $statement;
        }

        $statement .= $this->getOptionsString(true);
        $statement .= $this->getReplace();

        if ($includeText && $statement) {
            $statement = 'REPLACE ' . $statement;
        }

        return $statement;
    }

    /**
     * Get the full REPLACE statement.
     * @param  bool $usePlaceholders optional use ? placeholders, default true
     * @return string full REPLACE statement
     */
    private function getReplaceStatement($usePlaceholders = true): string
    {
        $statement = '';

        if (!$this->isReplace()) {
            return $statement;
        }

        $statement .= $this->getReplaceString();

        if ($this->set) {
            $statement .= ' ' . $this->getSetString($usePlaceholders);
        }

        return $statement;
    }
}
