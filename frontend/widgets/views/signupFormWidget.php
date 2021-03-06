<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 21.01.2018
 * Time: 11:44
 */
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\bootstrap\Modal;

Modal::begin([
    'header'=>'<h4>'.Yii::t('app','Registration').'</h4>',
    'id'=>'signup-modal',
]);
?>

    <p> <?= Yii::t('app','Please fill out the following fields to register').':'?></p>

<?php $form = ActiveForm::begin([
    'id' => 'signup-form',
    'enableAjaxValidation' => true,
    'action' => ['site/ajax-signup']
]);
//echo $form->field($model, 'email')->textInput();
echo $form->field($model, 'username')->textInput();
echo $form->field($model, 'email')->textInput();
echo $form->field($model, 'password')->passwordInput();
echo $form->field($model, 'repassword')->passwordInput();

?>

<!--    <div>-->
<!--        If you forgot your password you can --><?//= Html::a('reset it', ['site/request-password-reset']) ?><!--.-->
<!--    </div>-->
    <div class="form-group">
        <div class="text-right">

            <?php
            echo Html::button(Yii::t('app','Cancel'), ['class' => 'btn btn-default', 'data-dismiss' => 'modal']);
            echo Html::submitButton(Yii::t('app','Register'), ['class' => 'btn btn-primary', 'name' => 'login-button']);
            ?>

        </div>
    </div>

<?php
ActiveForm::end();
Modal::end();