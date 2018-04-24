<?php

/* @var $this yii\web\View */

use yii\helpers\Html;

$this->title = Yii::t('app','About');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-about">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>This is the About page. You may modify the following file to customize its content:</p>

    <code><?= __FILE__ ?></code>
    <p><img src="https://web-vin.com/blog/images/5ad6fc6f14be0.jpg"
        width="150px"><br>
    </p>
    <p>Мені дуже подобалось працювати з учнями та студентами, але все життя я хотів програмувати.
    </p>
    <p>Але держава кожен раз робила мені такі хитрі пропозиції, від яких я не міг відмовитись. Мені кожен раз обіцяли можливість займатись програмуванням за гарну винагороду.
    </p>

</div>
