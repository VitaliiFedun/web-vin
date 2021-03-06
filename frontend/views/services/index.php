<?php
/* @var $this yii\web\View */

use yii\helpers\Html;
//use yii\helpers\Url;

$this->title = Yii::t('app','On-line services');
$this->params['breadcrumbs'][] = $this->title;

?>
<div class="site-about">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>У нас можна скористатись безплатною послугою </p>
    <li>  "Оптичне розпізнавання тексту" ( зображення тексту перевести в текст).</li>
    <li>  "Аудіоблокнот" ( Не потрібно набирати текст - достатнього його просто начитати).</li>

    <p> </p>
    <p> Зверніть увагу:</p>
    <li> Ваша інформація нікуди не передається! </li>
    <li> Вся обробка відбувається тільки на Вашому пристрої</li>
    <li> Від можливостей Вашого пристрою залежить максимальний розмір іформації та швидкість її обробки. </li>

<!--    <code>--><?//= __FILE__ ?><!--</code>-->
</div>

<div class="demo">
    <p><a class="btn btn-lg btn-success" href='ocr'>Демонстрація "Оптичне розпізнавання тексту"</a></p>
    <p><a class="btn btn-lg btn-success" href="audio">Демонстрація "Аудіоблокнот"</a></p>

</div>
