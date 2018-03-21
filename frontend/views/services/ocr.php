<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 23.01.2018
 * Time: 10:55
 */
//use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
use frontend\widgets\OcrFormWidget;
use frontend\widgets\ItemButtonWidget;


?>

<?=
$this->title = Yii::t('app','Ocr >Optical Character Recognition');

$this->params['breadcrumbs'][] = [
//'template' => "<li><b>{link}</b></li>\n", // шаблон для этой ссылки
'label' =>Yii::t('app', 'On-line services'), // название ссылки
'url' => ['/services/index'] // сама ссылка
];
$this->params['breadcrumbs'][] = $this->title;


?>
<!-- Викликаєм Частину коду з віджету  -->
<?= OcrFormWidget::widget([]) ?>
<?= ItemButtonWidget::widget([]) ?>

<div class="site-about">

    <p>This is the Ocr page. You may modify the following file to customize its content:</p>

    <code><?= __FILE__ ?></code>


</div>
