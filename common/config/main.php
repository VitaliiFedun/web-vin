<?php
return [
//    'name_company' => 'Web@Vin',
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
        'name_brand' => 'Web@Vin',
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
    ],
];
