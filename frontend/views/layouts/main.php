<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;
use common\widgets\LoginFormWidget;
use frontend\widgets\SignupFormWidget;
use frontend\widgets\FBFWidget;
//use frontend\widgets\Lang;
//use frontend\widgets\OcrFormWidget;
use frontend\widgets\MultiLang\MultiLang;



AppAsset::register($this);
?>
<?php $this->beginPage() ?>
    <!DOCTYPE html>
    <html lang="<?= Yii::$app->language ?>">
    <head>
        <meta charset="<?= Yii::$app->charset ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?= Html::csrfMetaTags() ?>
        <title><?= Html::encode($this->title) ?></title>
        <?php $this->head() ?>
    </head>
    <?php
define('HTTPS_SERVER', 'https://web-vin.com/');
?>
    <body>
    <?php $this->beginBody() ?>
    <?= (Yii::$app->user->isGuest ? LoginFormWidget::widget([]) : ''); ?>

    <div class="wrap">
        <?php
        NavBar::begin([
            'brandLabel' => Yii::$app->components[name_brand], /*'My Company',*/
            'brandUrl' => Yii::$app->homeUrl,
            'options' => [
                'class' => 'navbar-inverse navbar-fixed-top',
            ],
        ]);
        $menuItems = [
            ['label' => Yii::t('app','Home'), 'url' => ['/site/index']],
            ['label' => Yii::t('app','About'), 'url' => ['/site/about']],
            ['label' => Yii::t('app','On-line services'), 'url' => ['/services/index']],
            ['label' => Yii::t('app','Blog'),             'url' => ['/posts/index']],
            ['label' => Yii::t('app','Contact'), 'url' => '#', 'options' => ['data-toggle' => 'modal', 'data-target' => '#myModal']],
        ];
        if (Yii::$app->user->isGuest) {
            $menuItems[] = ['label' => Yii::t('app','Sign up'), 'url' => '#', 'options' => ['data-toggle' => 'modal', 'data-target' => '#signup-modal']];
            $menuItems[] = ['label' => Yii::t('app','Social'), 'url' => ['/site/social']];
            $menuItems[] = ['label' => Yii::t('app','Login'), 'url' => '#', 'options' => ['data-toggle' => 'modal', 'data-target' => '#login-modal']];
        } else {

            $menuItems[] =
            ['label' => Yii::$app->user->identity->username, 'items' => [
                ['label' => Yii::t('app','Categories'), 'url' => ['/categories']],
                ['label' => Yii::t('app','Posts'), 'url' => ['/posts']],
                ['label' => Yii::t('app','Comments'), 'url' => ['/comments']],

                ['label' => '',
                    'options'=>['class'=>'divider'],

                ],

                [
                    'label' => Yii::t('app','Logout'),
                    'url' => ['/site/logout'],
                    'linkOptions' => ['data-method' => 'post']]
            ]
            ];

        }
        echo Nav::widget([
            'options' => ['class' => 'navbar-nav navbar-right'],
            'items' => $menuItems,
        ]);
        NavBar::end();

        ?>

        <?php echo MultiLang::widget(['cssClass'=>'pull-right language']); ?>
<!--        --><?//= Lang::widget();?>

        <div class="container">
            <?= Breadcrumbs::widget([
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
//                'homeLink' => false,
            ]) ?>
            <?= Alert::widget() ?>
            <?= $content ?>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <p class="pull-left">© <?=Yii::$app->components[name_brand]?> <?= date('Y') ?></p>

        </div>
    </footer>
    <?= FBFWidget::widget([]) ?>
    <?= SignupFormWidget::widget([]) ?>
    <?php $this->endBody() ?>
    </body>
    </html>
<?php $this->endPage() ?>