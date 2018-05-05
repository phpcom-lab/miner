
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Miner" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Miner.html">Miner</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Miner_DeleteTrait" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Miner/DeleteTrait.html">DeleteTrait</a>                    </div>                </li>                            <li data-name="class:Miner_InsertTrait" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Miner/InsertTrait.html">InsertTrait</a>                    </div>                </li>                            <li data-name="class:Miner_Miner" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Miner/Miner.html">Miner</a>                    </div>                </li>                            <li data-name="class:Miner_ReplaceTrait" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Miner/ReplaceTrait.html">ReplaceTrait</a>                    </div>                </li>                            <li data-name="class:Miner_SelectTrait" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Miner/SelectTrait.html">SelectTrait</a>                    </div>                </li>                            <li data-name="class:Miner_UpdateTrait" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Miner/UpdateTrait.html">UpdateTrait</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Miner.html", "name": "Miner", "doc": "Namespace Miner"},
            
            {"type": "Trait", "fromName": "Miner", "fromLink": "Miner.html", "link": "Miner/DeleteTrait.html", "name": "Miner\\DeleteTrait", "doc": "&quot;Trait DeleteTrait&quot;"},
                                                        {"type": "Method", "fromName": "Miner\\DeleteTrait", "fromLink": "Miner/DeleteTrait.html", "link": "Miner/DeleteTrait.html#method_delete", "name": "Miner\\DeleteTrait::delete", "doc": "&quot;Add a table to DELETE from, or false if deleting from the FROM table.&quot;"},
                    {"type": "Method", "fromName": "Miner\\DeleteTrait", "fromLink": "Miner/DeleteTrait.html", "link": "Miner/DeleteTrait.html#method_mergeDeleteInto", "name": "Miner\\DeleteTrait::mergeDeleteInto", "doc": "&quot;Merge this Miner&#039;s DELETE into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\DeleteTrait", "fromLink": "Miner/DeleteTrait.html", "link": "Miner/DeleteTrait.html#method_getDeleteString", "name": "Miner\\DeleteTrait::getDeleteString", "doc": "&quot;Get the DELETE portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\DeleteTrait", "fromLink": "Miner/DeleteTrait.html", "link": "Miner/DeleteTrait.html#method_isDelete", "name": "Miner\\DeleteTrait::isDelete", "doc": "&quot;Whether this is a DELETE statement.&quot;"},
            
            {"type": "Trait", "fromName": "Miner", "fromLink": "Miner.html", "link": "Miner/InsertTrait.html", "name": "Miner\\InsertTrait", "doc": "&quot;Trait InsertTrait&quot;"},
                                                        {"type": "Method", "fromName": "Miner\\InsertTrait", "fromLink": "Miner/InsertTrait.html", "link": "Miner/InsertTrait.html#method_isInsert", "name": "Miner\\InsertTrait::isInsert", "doc": "&quot;Whether this is an INSERT statement.&quot;"},
                    {"type": "Method", "fromName": "Miner\\InsertTrait", "fromLink": "Miner/InsertTrait.html", "link": "Miner/InsertTrait.html#method_insert", "name": "Miner\\InsertTrait::insert", "doc": "&quot;Set the INSERT table.&quot;"},
                    {"type": "Method", "fromName": "Miner\\InsertTrait", "fromLink": "Miner/InsertTrait.html", "link": "Miner/InsertTrait.html#method_mergeInsertInto", "name": "Miner\\InsertTrait::mergeInsertInto", "doc": "&quot;Merge this Miner&#039;s INSERT into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\InsertTrait", "fromLink": "Miner/InsertTrait.html", "link": "Miner/InsertTrait.html#method_getInsert", "name": "Miner\\InsertTrait::getInsert", "doc": "&quot;Get the INSERT table.&quot;"},
                    {"type": "Method", "fromName": "Miner\\InsertTrait", "fromLink": "Miner/InsertTrait.html", "link": "Miner/InsertTrait.html#method_getInsertString", "name": "Miner\\InsertTrait::getInsertString", "doc": "&quot;Get the INSERT portion of the statement as a string.&quot;"},
            
            {"type": "Class", "fromName": "Miner", "fromLink": "Miner.html", "link": "Miner/Miner.html", "name": "Miner\\Miner", "doc": "&quot;A dead simple PHP class for building SQL statements. No manual string concatenation necessary.&quot;"},
                                                        {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_create", "name": "Miner\\Miner::create", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method___construct", "name": "Miner\\Miner::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_setPdoConnection", "name": "Miner\\Miner::setPdoConnection", "doc": "&quot;Set the PDO database connection to use in executing this statement.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getPdoConnection", "name": "Miner\\Miner::getPdoConnection", "doc": "&quot;Get the PDO database connection to use in executing this statement.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_setAutoQuote", "name": "Miner\\Miner::setAutoQuote", "doc": "&quot;Set whether to automatically escape values.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getAutoQuote", "name": "Miner\\Miner::getAutoQuote", "doc": "&quot;Get whether values will be automatically escaped.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_autoQuote", "name": "Miner\\Miner::autoQuote", "doc": "&quot;Safely escape a value if auto-quoting is enabled, or do nothing if\ndisabled.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_quote", "name": "Miner\\Miner::quote", "doc": "&quot;Safely escape a value for use in a statement.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_option", "name": "Miner\\Miner::option", "doc": "&quot;Add an execution option like DISTINCT or SQL_CALC_FOUND_ROWS.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getOptionsString", "name": "Miner\\Miner::getOptionsString", "doc": "&quot;Get the execution options portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeOptionsInto", "name": "Miner\\Miner::mergeOptionsInto", "doc": "&quot;Merge this Miner&#039;s execution options into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_calcFoundRows", "name": "Miner\\Miner::calcFoundRows", "doc": "&quot;Add SQL_CALC_FOUND_ROWS execution option.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_distinct", "name": "Miner\\Miner::distinct", "doc": "&quot;Add DISTINCT execution option.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_set", "name": "Miner\\Miner::set", "doc": "&quot;Add one or more column values to INSERT, UPDATE, or REPLACE.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_values", "name": "Miner\\Miner::values", "doc": "&quot;Add an array of columns =&gt; values to INSERT, UPDATE, or REPLACE.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeSetInto", "name": "Miner\\Miner::mergeSetInto", "doc": "&quot;Merge this Miner&#039;s SET into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getSetString", "name": "Miner\\Miner::getSetString", "doc": "&quot;Get the SET portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getSetPlaceholderValues", "name": "Miner\\Miner::getSetPlaceholderValues", "doc": "&quot;Get the SET placeholder values.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_from", "name": "Miner\\Miner::from", "doc": "&quot;Set the FROM table with optional alias.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeFromInto", "name": "Miner\\Miner::mergeFromInto", "doc": "&quot;Merge this Miner&#039;s FROM into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getFrom", "name": "Miner\\Miner::getFrom", "doc": "&quot;Get the FROM table.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getFromAlias", "name": "Miner\\Miner::getFromAlias", "doc": "&quot;Get the FROM table alias.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_join", "name": "Miner\\Miner::join", "doc": "&quot;Add a JOIN table with optional ON criteria.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_innerJoin", "name": "Miner\\Miner::innerJoin", "doc": "&quot;Add an INNER JOIN table with optional ON criteria.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_leftJoin", "name": "Miner\\Miner::leftJoin", "doc": "&quot;Add a LEFT JOIN table with optional ON criteria.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_rightJoin", "name": "Miner\\Miner::rightJoin", "doc": "&quot;Add a RIGHT JOIN table with optional ON criteria.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeJoinInto", "name": "Miner\\Miner::mergeJoinInto", "doc": "&quot;Merge this Miner&#039;s JOINs into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getJoinString", "name": "Miner\\Miner::getJoinString", "doc": "&quot;Get the JOIN portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getFromString", "name": "Miner\\Miner::getFromString", "doc": "&quot;Get the FROM portion of the statement, including all JOINs, as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_openWhere", "name": "Miner\\Miner::openWhere", "doc": "&quot;Add an open bracket for nesting WHERE conditions.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_closeWhere", "name": "Miner\\Miner::closeWhere", "doc": "&quot;Add a closing bracket for nesting WHERE conditions.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_where", "name": "Miner\\Miner::where", "doc": "&quot;Add a WHERE condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_andWhere", "name": "Miner\\Miner::andWhere", "doc": "&quot;Add an AND WHERE condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_orWhere", "name": "Miner\\Miner::orWhere", "doc": "&quot;Add an OR WHERE condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_whereIn", "name": "Miner\\Miner::whereIn", "doc": "&quot;Add an IN WHERE condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_whereNotIn", "name": "Miner\\Miner::whereNotIn", "doc": "&quot;Add a NOT IN WHERE condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_whereBetween", "name": "Miner\\Miner::whereBetween", "doc": "&quot;Add a BETWEEN WHERE condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_whereNotBetween", "name": "Miner\\Miner::whereNotBetween", "doc": "&quot;Add a NOT BETWEEN WHERE condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeWhereInto", "name": "Miner\\Miner::mergeWhereInto", "doc": "&quot;Merge this Miner&#039;s WHERE into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getWhereString", "name": "Miner\\Miner::getWhereString", "doc": "&quot;Get the WHERE portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getWherePlaceholderValues", "name": "Miner\\Miner::getWherePlaceholderValues", "doc": "&quot;Get the WHERE placeholder values.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_groupBy", "name": "Miner\\Miner::groupBy", "doc": "&quot;Add a GROUP BY column.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeGroupByInto", "name": "Miner\\Miner::mergeGroupByInto", "doc": "&quot;Merge this Miner&#039;s GROUP BY into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getGroupByString", "name": "Miner\\Miner::getGroupByString", "doc": "&quot;Get the GROUP BY portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_openHaving", "name": "Miner\\Miner::openHaving", "doc": "&quot;Add an open bracket for nesting HAVING conditions.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_closeHaving", "name": "Miner\\Miner::closeHaving", "doc": "&quot;Add a closing bracket for nesting HAVING conditions.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_having", "name": "Miner\\Miner::having", "doc": "&quot;Add a HAVING condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_andHaving", "name": "Miner\\Miner::andHaving", "doc": "&quot;Add an AND HAVING condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_orHaving", "name": "Miner\\Miner::orHaving", "doc": "&quot;Add an OR HAVING condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_havingIn", "name": "Miner\\Miner::havingIn", "doc": "&quot;Add an IN WHERE condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_havingNotIn", "name": "Miner\\Miner::havingNotIn", "doc": "&quot;Add a NOT IN HAVING condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_havingBetween", "name": "Miner\\Miner::havingBetween", "doc": "&quot;Add a BETWEEN HAVING condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_havingNotBetween", "name": "Miner\\Miner::havingNotBetween", "doc": "&quot;Add a NOT BETWEEN HAVING condition.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeHavingInto", "name": "Miner\\Miner::mergeHavingInto", "doc": "&quot;Merge this Miner&#039;s HAVING into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getHavingString", "name": "Miner\\Miner::getHavingString", "doc": "&quot;Get the HAVING portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getHavingPlaceholderValues", "name": "Miner\\Miner::getHavingPlaceholderValues", "doc": "&quot;Get the HAVING placeholder values.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_orderBy", "name": "Miner\\Miner::orderBy", "doc": "&quot;Add a column to ORDER BY.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeOrderByInto", "name": "Miner\\Miner::mergeOrderByInto", "doc": "&quot;Merge this Miner&#039;s ORDER BY into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getOrderByString", "name": "Miner\\Miner::getOrderByString", "doc": "&quot;Get the ORDER BY portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_limit", "name": "Miner\\Miner::limit", "doc": "&quot;Set the LIMIT on number of rows to return with optional offset.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeLimitInto", "name": "Miner\\Miner::mergeLimitInto", "doc": "&quot;Merge this Miner&#039;s LIMIT into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getLimit", "name": "Miner\\Miner::getLimit", "doc": "&quot;Get the LIMIT on number of rows to return.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getLimitOffset", "name": "Miner\\Miner::getLimitOffset", "doc": "&quot;Get the LIMIT row number to start at.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getLimitString", "name": "Miner\\Miner::getLimitString", "doc": "&quot;Get the LIMIT portion of the statement as a string.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_mergeInto", "name": "Miner\\Miner::mergeInto", "doc": "&quot;Merge this self into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getSql", "name": "Miner\\Miner::getSql", "doc": "&quot;alias of the getStatement()&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getStatement", "name": "Miner\\Miner::getStatement", "doc": "&quot;Get the full SQL statement.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getBoundedParams", "name": "Miner\\Miner::getBoundedParams", "doc": "&quot;alias of the getPlaceholderValues()&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_getPlaceholderValues", "name": "Miner\\Miner::getPlaceholderValues", "doc": "&quot;Get all placeholder values (SET, WHERE, and HAVING).&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method_execute", "name": "Miner\\Miner::execute", "doc": "&quot;Execute the statement using the PDO database connection.&quot;"},
                    {"type": "Method", "fromName": "Miner\\Miner", "fromLink": "Miner/Miner.html", "link": "Miner/Miner.html#method___toString", "name": "Miner\\Miner::__toString", "doc": "&quot;Get the full SQL statement without value placeholders.&quot;"},
            
            {"type": "Trait", "fromName": "Miner", "fromLink": "Miner.html", "link": "Miner/ReplaceTrait.html", "name": "Miner\\ReplaceTrait", "doc": "&quot;Trait ReplaceTrait&quot;"},
                                                        {"type": "Method", "fromName": "Miner\\ReplaceTrait", "fromLink": "Miner/ReplaceTrait.html", "link": "Miner/ReplaceTrait.html#method_replace", "name": "Miner\\ReplaceTrait::replace", "doc": "&quot;Set the REPLACE table.&quot;"},
                    {"type": "Method", "fromName": "Miner\\ReplaceTrait", "fromLink": "Miner/ReplaceTrait.html", "link": "Miner/ReplaceTrait.html#method_mergeReplaceInto", "name": "Miner\\ReplaceTrait::mergeReplaceInto", "doc": "&quot;Merge this Miner&#039;s REPLACE into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\ReplaceTrait", "fromLink": "Miner/ReplaceTrait.html", "link": "Miner/ReplaceTrait.html#method_isReplace", "name": "Miner\\ReplaceTrait::isReplace", "doc": "&quot;Whether this is a REPLACE statement.&quot;"},
                    {"type": "Method", "fromName": "Miner\\ReplaceTrait", "fromLink": "Miner/ReplaceTrait.html", "link": "Miner/ReplaceTrait.html#method_getReplace", "name": "Miner\\ReplaceTrait::getReplace", "doc": "&quot;Get the REPLACE table.&quot;"},
                    {"type": "Method", "fromName": "Miner\\ReplaceTrait", "fromLink": "Miner/ReplaceTrait.html", "link": "Miner/ReplaceTrait.html#method_getReplaceString", "name": "Miner\\ReplaceTrait::getReplaceString", "doc": "&quot;Get the REPLACE portion of the statement as a string.&quot;"},
            
            {"type": "Trait", "fromName": "Miner", "fromLink": "Miner.html", "link": "Miner/SelectTrait.html", "name": "Miner\\SelectTrait", "doc": "&quot;Trait SelectTrait&quot;"},
                                                        {"type": "Method", "fromName": "Miner\\SelectTrait", "fromLink": "Miner/SelectTrait.html", "link": "Miner/SelectTrait.html#method_select", "name": "Miner\\SelectTrait::select", "doc": "&quot;Add a SELECT column, table, or expression with optional alias.&quot;"},
                    {"type": "Method", "fromName": "Miner\\SelectTrait", "fromLink": "Miner/SelectTrait.html", "link": "Miner/SelectTrait.html#method_isSelect", "name": "Miner\\SelectTrait::isSelect", "doc": "&quot;Whether this is a SELECT statement.&quot;"},
                    {"type": "Method", "fromName": "Miner\\SelectTrait", "fromLink": "Miner/SelectTrait.html", "link": "Miner/SelectTrait.html#method_getSelect", "name": "Miner\\SelectTrait::getSelect", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Miner\\SelectTrait", "fromLink": "Miner/SelectTrait.html", "link": "Miner/SelectTrait.html#method_mergeSelectInto", "name": "Miner\\SelectTrait::mergeSelectInto", "doc": "&quot;Merge this Miner&#039;s SELECT into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\SelectTrait", "fromLink": "Miner/SelectTrait.html", "link": "Miner/SelectTrait.html#method_getSelectString", "name": "Miner\\SelectTrait::getSelectString", "doc": "&quot;Get the SELECT portion of the statement as a string.&quot;"},
            
            {"type": "Trait", "fromName": "Miner", "fromLink": "Miner.html", "link": "Miner/UpdateTrait.html", "name": "Miner\\UpdateTrait", "doc": "&quot;Trait UpdateTrait&quot;"},
                                                        {"type": "Method", "fromName": "Miner\\UpdateTrait", "fromLink": "Miner/UpdateTrait.html", "link": "Miner/UpdateTrait.html#method_update", "name": "Miner\\UpdateTrait::update", "doc": "&quot;Set the UPDATE table.&quot;"},
                    {"type": "Method", "fromName": "Miner\\UpdateTrait", "fromLink": "Miner/UpdateTrait.html", "link": "Miner/UpdateTrait.html#method_mergeUpdateInto", "name": "Miner\\UpdateTrait::mergeUpdateInto", "doc": "&quot;Merge this Miner&#039;s UPDATE into the given Miner.&quot;"},
                    {"type": "Method", "fromName": "Miner\\UpdateTrait", "fromLink": "Miner/UpdateTrait.html", "link": "Miner/UpdateTrait.html#method_isUpdate", "name": "Miner\\UpdateTrait::isUpdate", "doc": "&quot;Whether this is an UPDATE statement.&quot;"},
                    {"type": "Method", "fromName": "Miner\\UpdateTrait", "fromLink": "Miner/UpdateTrait.html", "link": "Miner/UpdateTrait.html#method_getUpdate", "name": "Miner\\UpdateTrait::getUpdate", "doc": "&quot;Get the UPDATE table.&quot;"},
                    {"type": "Method", "fromName": "Miner\\UpdateTrait", "fromLink": "Miner/UpdateTrait.html", "link": "Miner/UpdateTrait.html#method_getUpdateString", "name": "Miner\\UpdateTrait::getUpdateString", "doc": "&quot;Get the UPDATE portion of the statement as a string.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


