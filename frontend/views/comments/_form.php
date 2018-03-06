<?php


/**
 * Created by PhpStorm.
 * User: georgy
 * Date: 14.12.14
 * Time: 0:07
 */

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var yii\web\View $this */
/* @var yii\widgets\ActiveForm $form */
/* @var \frontend\models\CommentForm $model */
?>

<div class="comment-form">

    <?php
//    var_dump($model);
//    die();
    $form = ActiveForm::begin(['action' => $model->action]);
    ?>

    <?= $form->field($model, 'pid')->hiddenInput()->label(false) ?>
    <?= $form->field($model, 'title')->textInput(['maxlength' => 255]) ?>
    <?= $form->field($model, 'content')->textarea(['maxlength' => 255]) ?>
    <?= $form->field($model, 'publish_status')->dropDownList([ 'moderate' => 'Moderate', 'publish' => 'Publish', ], ['prompt' => '']) ?>
    <?= $form->field($model, 'post_id')->textInput() ?>
    <?= $form->field($model, 'author_id')->textInput() ?>
    <?= $form->field($model, 'created_at')->hiddenInput()->label(false) ?>
    <?= $form->field($model, 'updated_at')->hiddenInput()->label(false) ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('frontend', 'Publish'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>


<?//
//
//
//use yii\helpers\Html;
//use yii\widgets\ActiveForm;
//
///* @var $this yii\web\View */
///* @var $model app\models\Comments */
///* @var $form yii\widgets\ActiveForm */
///* @var \frontend\models\CommentForm $model */
//
//?>
<!---->
<!--<div class="comments-form">-->
<!---->
<!--    --><?php //$form = ActiveForm::begin(); ?>
<!---->
<!--    --><?//= $form->field($model, 'pid')->textInput() ?>
<!---->
<!--    --><?//= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>
<!---->
<!--    --><?//= $form->field($model, 'content')->textInput(['maxlength' => true]) ?>
<!---->
<!--    --><?//= $form->field($model, 'publish_status')->dropDownList([ 'moderate' => 'Moderate', 'publish' => 'Publish', ], ['prompt' => '']) ?>
<!---->
<!--    --><?//= $form->field($model, 'post_id')->textInput() ?>
<!---->
<!--    --><?//= $form->field($model, 'author_id')->textInput() ?>
<!---->
<!--    --><?//= $form->field($model, 'created_at')->textInput() ?>
<!---->
<!--    --><?//= $form->field($model, 'updated_at')->textInput() ?>
<!---->
<!--    <div class="form-group">-->
<!--        --><?//= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
<!--    </div>-->
<!---->
<!--    --><?php //ActiveForm::end(); ?>
<!---->
<!--</div>-->
