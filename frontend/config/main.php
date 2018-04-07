<?php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app_myblog',
	'language'=>'uk-UK',

    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'frontend\controllers',
    'components' => [

// Чтобы приложение не копировало файлы бутстрапа, jquery и
// скриптов yii,
// а также других каких-то ассетов, в папку web,
// можно настроить его на создание линков:

        'assetManager'=>[
            'class'=>'yii\web\AssetManager',
            'linkAssets'=>true,
            'basePath' => '@webroot/assets',
            'baseUrl' => '@web/assets'
        ],

        'request' => [
            'csrfParam' => '_csrf-frontend',
            'baseUrl' => '',

        ],
/*
 * 'assetManager' => [
             'basePath' => '@webroot/assets',
             'baseUrl' => '@web/assets'
        ],
        'request' => [
            'baseUrl' => ''
        ]
 */


        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'Web&Vin',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                    ''=>'site/index',
                    '<action>'=>'site/<action>',
                '<controller>/<action>' => '<controller>/<action>',
				 '<_c:[\w\-]+>/<id:\d+>' => '<_c>/view',
                '<_c:[\w\-]+>' => '<_c>/index',
                '<_c:[\w\-]+>/<_a:[\w\-]+>/<id:\d+>' => '<_c>/<_a>',


            ],
        ],

        'authClientCollection' => [
            'class' => 'yii\authclient\Collection',
            'clients' => [
                'facebook' => [
                    'class' => 'yii\authclient\clients\Facebook',
                    'clientId' => $params['facebook_clientId'],
                    'clientSecret' => $params['facebook_clientSecret'],
                    'authUrl' => 'https://www.facebook.com/dialog/oauth?display=popup&scope=email',

                ],
                'google' => [
                    'class' => 'yii\authclient\clients\Google',
                    'clientId' => $params['google_clientId'],
                    'clientSecret' => $params['google_clientSecret'],
                    'authUrl' => 'https://accounts.google.com/o/oauth2/auth?display=popup&type=web_server&',
                ],
                'twitter' => [
                    'class' => 'yii\authclient\clients\Twitter',
                    'consumerKey' => $params['twitter_consumerKey'],
                    'consumerSecret' => $params['twitter_consumerSecret'],
                ],

                'github' => [
                    'class'        => 'yii\authclient\clients\GitHub',
                    'clientId'     => $params['github_CLIENT_ID'],
                    'clientSecret' => $params['github_CLIENT_SECRET'],
                ],
//                'linkedin' => [
//                    'class' => 'yii\authclient\clients\LinkedIn',
//                    'clientId' => 'linkedin_client_id',
//                    'clientSecret' => 'linkedin_client_secret',
//                ],
            ],
        ],


    ],
    'params' => $params,
];
