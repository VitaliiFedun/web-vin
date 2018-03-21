<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 23.01.2018
 * Time: 10:55
 */
//use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
use frontend\widgets\AudioFormWidget;
?>

<?=
$this->title = Yii::t('app','Audio Notepad');
$this->params['breadcrumbs'][] = [
'label' => Yii::t('app','On-line services'), // название ссылки
'url' => ['/services/index'] // сама ссылка
];
$this->params['breadcrumbs'][] = $this->title;

?>

<div id="content">
<!-- Викликаєм Частину коду з віджету  -->
<?= AudioFormWidget::widget([]) ?>

</div>
<div class="site-about">

    <p>This is the 'AudioNotepad' page. You may modify the following file to customize its content:</p>
    <code><?= __FILE__ ?></code>


</div>
