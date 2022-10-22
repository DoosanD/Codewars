<!-- php variant -->
<?php
function flip(string $dir, array $arr): array
{
    if ($dir == 'R') {
        sort($arr);
        return $arr;
    } else {
        rsort($arr);
        return $arr;
    };
};

?>

<!-- top solution -->

<?php

function flip_ternary(string $dir, array $arr): array
{
    $dir == 'R' ? sort($arr) : rsort($arr);
    return $arr;
}

?>