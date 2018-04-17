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
//        'authManager' => [
//            'class' => 'yii\rbac\PhpManager',
//            'defaultRoles' => ['user','moder','admin'], //здесь прописываем роли
//            //зададим куда будут сохраняться наши файлы конфигураций RBAC
//            'itemFile' => '@common/components/rbac/items.php',
//            'assignmentFile' => '@common/components/rbac/assignments.php',
//            'ruleFile' => '@common/components/rbac/rules.php'
//        ],

        'authManager' => [
            'class' => 'yii\rbac\DbManager',
            'cache' => 'cache' //Включаем кеширование
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',  // Подключаем файловое кэширование данных
        ],
        'i18n' => [
            'translations' => [
                'yii2mod.comments' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@common/messages',
                    'sourceLanguage' => 'en-Us',
                    'fileMap' => [
                        'yii2mod.comments' => 'yii2modcomments.php'
                    ],
                ],
                'app' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@common/messages',
                    'sourceLanguage' => 'en-Us',
                    'fileMap' => [
                        'app' => 'app.php'
                    ],
                ],
                'backend' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@common/messages',
                    'sourceLanguage' => 'en-Us',
                    'fileMap' => [
                        'backend' => 'backend.php'
                    ],
                ],
                'frontend' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@common/messages',
                    'sourceLanguage' => 'en-Us',
                    'fileMap' => [
                        'frontend' => 'frontend.php'
                    ],
                ],
            ],
        ],

    ],
];
