<!-- You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. -->

<?php

function positive_sum($arr)
{
    $sum = 0;
    if (empty($arr)) {
        return $sum;
    } else {
        for ($i = 0; $i < count($arr); $i++) {
            if ($arr[$i] > 0) {
                $sum += $arr[$i];
            }
        }
        return $sum;
    }
}

?>