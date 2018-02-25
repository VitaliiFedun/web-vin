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
//use frontend\widgets\OcrFormWidget;



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
            ['label' => 'Home', 'url' => ['/site/index']],
            ['label' => 'About', 'url' => ['/site/about']],
            ['label' => 'On-line services', 'url' => ['/services/index']],
            ['label' => 'Blog',             'url' => ['/posts/index']],
            ['label' => 'Contact', 'url' => '#', 'options' => ['data-toggle' => 'modal', 'data-target' => '#myModal']],
        ];
        if (Yii::$app->user->isGuest) {
//            $menuItems[] = ['label' => 'Signup', 'url' => ['/site/signup']];
            $menuItems[] = ['label' => 'Signup', 'url' => '#', 'options' => ['data-toggle' => 'modal', 'data-target' => '#signup-modal']];

            $menuItems[] = ['label' => 'Social', 'url' => ['/site/social']];

//            $menuItems[] = ['label' => 'Signup2', 'url' => '#', 'options' => ['data-toggle' => 'modal', 'data-target' => '#social-modal']];
            $menuItems[] = ['label' => 'Login', 'url' => '#', 'options' => ['data-toggle' => 'modal', 'data-target' => '#login-modal']];
        } else {
//            $menuItems[] = '<li>'
//                . Html::beginForm(['/site/logout'], 'post')
//                . Html::submitButton(
//                    'Logout (' . Yii::$app->user->identity->username . ')',
//                    ['class' => 'btn btn-link logout']
//                )
//                . Html::endForm()
//                . '</li>';
            $menuItems[] =
            ['label' => Yii::$app->user->identity->username, 'items' => [
                ['label' => 'Category', 'url' => ['/categories']],
                ['label' => 'Posts', 'url' => ['/posts']],
                ['label' => 'Comments', 'url' => ['/comments']],
                [
                    'label' => 'Logout',
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

        <div class="container">
            <?= Breadcrumbs::widget([
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ]) ?>
            <?= Alert::widget() ?>
            <?= $content ?>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <p class="pull-left">© My Company <?= date('Y') ?></p>

<!--            <p class="pull-right">--><?//= Yii::powered() ?><!--</p>-->
        </div>
    </footer>
    <?= FBFWidget::widget([]) ?>
    <?= SignupFormWidget::widget([]) ?>
    <?php $this->endBody() ?>
    </body>
    </html>
<?php $this->endPage() ?>