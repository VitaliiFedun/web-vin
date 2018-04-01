<?php
/**
 * H:\1_PHP\OpenServer\domains\web-vin\common\widgets\views\LoginFormWidget.php
 * Created by PhpStorm.
 * User: user
 * Date: 21.01.2018
 * Time: 11:44
 */
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\bootstrap\Modal;
use yii\authclient\clients\Facebook;
use yii\authclient\clients\GitHub;
use yii\authclient\clients\Google;
use yii\authclient\clients\LinkedIn;
use yii\authclient\clients\Twitter;
use yii\authclient\clients\GoogleHybrid;
use yii\authclient\clients\GoogleOAuth;
Modal::begin([
//    'header'=>'<h4>Login</h4>',
    'header'=>'<h4>'.Yii::t('app','Login').'</h4>',

    'id'=>'login-modal',
]);
?>

    <p><?=Yii::t('app','Please fill out the following fields to login:')?></p>

<?php $form = ActiveForm::begin([
    'id' => 'login-form',
    'enableAjaxValidation' => true,
    'action' => ['site/ajax-login']
]);
//echo $form->field($model, 'email')->textInput();
echo $form->field($model, 'username')->textInput();
echo $form->field($model, 'password')->passwordInput();
echo $form->field($model, 'rememberMe')->checkbox();
?>

    <div class="portlet" id="yw1">
        <div class="portlet-decoration">
            <div class="portlet-title"><span><?=Yii::t('app','Registration and recovery')?></span></div>
        </div>

        <div class="portlet-content">
            <p style="margin:0;">

                <a class="btn btn-lg btn-success" data-toggle="modal" data-target="#signup-modal" <a href="#">
                <?=Yii::t('app','Registration')?></a>
                <a class="btn btn-lg btn-success" <a href='site/request-password-reset'>
                    <?=Yii::t('app','Forgot your password?')?></a>
            </p>

        </div>
    </div>
    <section class="main full">

        <div class="portlet" id="yw2">
            <div class="portlet-decoration">
                <div class="portlet-title"><span><?=Yii::t('app','The entrance through social networks')?></span></div>
            </div>
            <div class="portlet-content">
                <?= yii\authclient\widgets\AuthChoice::widget([
                    'baseAuthUrl' => ['site/auth'],
                    'popupMode' => false,
                ]) ?>

            </div>
        </div>
        <div class="clear"></div>
    </section>

    <div class="form-group">
        <div class="text-right">

            <?php
            echo Html::button(Yii::t('app','Cancel'), ['class' => 'btn btn-default', 'data-dismiss' => 'modal']);
            echo Html::submitButton(Yii::t('app','Login'), ['class' => 'btn btn-primary', 'name' => 'login-button']);
            ?>

        </div>
    </div>

<?php
ActiveForm::end();
Modal::end();