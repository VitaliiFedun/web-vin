<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Comments */
/* @var $form ActiveForm */
?>
<div class="comments-CommentForm">

    <?php $form = ActiveForm::begin(); ?>

        <?= $form->field($model, 'pid') ?>
        <?= $form->field($model, 'post_id') ?>
        <?= $form->field($model, 'author_id') ?>
        <?= $form->field($model, 'created_at') ?>
        <?= $form->field($model, 'updated_at') ?>
        <?= $form->field($model, 'title') ?>
        <?= $form->field($model, 'content') ?>
        <?= $form->field($model, 'publish_status') ?>
    
        <div class="form-group">
            <?= Html::submitButton(Yii::t('app', 'Submit'), ['class' => 'btn btn-primary']) ?>
        </div>
    <?php ActiveForm::end(); ?>

</div><!-- comments-CommentForm -->
