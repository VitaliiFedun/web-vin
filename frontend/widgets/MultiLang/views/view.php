<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 20.03.2018
 * Time: 10:45
 */
namespace frontend\widgets\MultiLang;
use yii\helpers\Html;
use Yii;
?>

<div class="btn-group <?= $cssClass; ?>">
    <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
        <span class="uppercase"><?= Yii::$app->language; ?></span>
        <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
        <li class="item-lang">
            <?= Html::a('Go to English', array_merge(
                \Yii::$app->request->get(),
                [\Yii::$app->controller->route, 'language' => 'en']
            )); ?>
        </li>
        <li class="item-lang">
            <?= Html::a('Перейти на російську', array_merge(
                \Yii::$app->request->get(),
                [\Yii::$app->controller->route, 'language' => 'ua']
            )); ?>
        </li>
    </ul>
</div>