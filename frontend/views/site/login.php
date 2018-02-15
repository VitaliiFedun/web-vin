<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = 'Login';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-login">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>Please fill out the following fields to login:</p>

    <div class="row">
        <div class="col-lg-5">
            <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>

            <?= $form->field($model, 'username')->textInput(['autofocus' => true]) ?>

            <?= $form->field($model, 'password')->passwordInput() ?>

            <?= $form->field($model, 'rememberMe')->checkbox() ?>

            <div style="color:#999;margin:1em 0">
                If you forgot your password you can <?= Html::a('reset it', ['site/request-password-reset']) ?>.
            </div>

            <div class="form-group">
                <?= Html::submitButton('Login', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?>
            </div>

            <div class="portlet" id="yw1">
                <div class="portlet-decoration">
                    <div class="portlet-title"><span>Регистрация и восстановление</span></div>
                </div>
                <div class="portlet-content">
                    <p style="margin:0;"><a href="/registration">Регистрация</a> | <a href="/remind">Забыли пароль?</a></p>
                </div>
            </div>

            <section class="main full">

                <   <div class="portlet" id="yw2">
                    <div class="portlet-decoration">
                        <div class="portlet-title"><span>Вход через аккаунт в соцсети</span></div>
                    </div>
                    <div class="portlet-content">

                        <div id="uLogin"
                             x-ulogin-params="display=panel;fields=first_name,last_name,email,
                 photo;providers=
                 twitter,
                 facebook,
                 google;
                 hidden=other;
                 redirect_uri=http%3A%2F%2Fwww.planetatuninga.ru%2Fulogin%2Flogin%3Freturn%3D%252Flogin"
                             style="position: relative;"
                             data-ulogin-inited="1516778900726">
                            <div class="ulogin-buttons-container" style="margin: 0px; padding: 0px; outline: none; border: none; border-radius: 0px; cursor: default; float: none; position: relative; display: inline-block; width: 210px; height: 32px; left: 0px; top: 0px; box-sizing: content-box; max-width: 100%; vertical-align: top; line-height: 0;">
                                <div class="ulogin-button-twitter"
                                     data-uloginbutton="twitter"
                                     role="button" title="Twitter" style="margin: 0px 10px 10px 0px; padding: 0px; outline: none; border: none; border-radius: 0px; cursor: pointer; float: left; position: relative; display: inherit; width: 32px; height: 32px; left: 0px; top: 0px; box-sizing: content-box; background: url(&quot;https://ulogin.ru/version/2.0/img/providers-32-classic.png?version=img.2.0.0&quot;) 0px -172px / 32px no-repeat;">

                                </div>
                                <div class="ulogin-button-facebook" data-uloginbutton="facebook"
                                     role="button" title="Facebook" style="margin: 0px 10px 10px 0px; padding: 0px; outline: none; border: none; border-radius: 0px; cursor: pointer; float: left; position: relative; display: inherit; width: 32px; height: 32px; left: 0px; top: 0px; box-sizing: content-box; background: url(&quot;https://ulogin.ru/version/2.0/img/providers-32-classic.png?version=img.2.0.0&quot;) 0px -138px / 32px no-repeat;">

                                </div>
                                <div class="ulogin-button-google" data-uloginbutton="google"
                                     role="button" title="Google" style="margin: 0px 10px 10px 0px; padding: 0px; outline: none; border: none; border-radius: 0px; cursor: pointer; float: left; position: relative; display: inherit; width: 32px; height: 32px; left: 0px; top: 0px; box-sizing: content-box; background: url(&quot;https://ulogin.ru/version/2.0/img/providers-32-classic.png?version=img.2.0.0&quot;) 0px -206px / 32px no-repeat;">

                                </div>
                                <div class="ulogin-dropdown-button" style="margin: 0px 10px 10px 0px; padding: 0px; outline: none; border: none; border-radius: 0px; cursor: pointer; float: none; position: relative; display: inline-block; width: 32px; height: 32px; left: 0px; top: 0px; box-sizing: content-box; background: url(&quot;https://ulogin.ru/version/2.0/img/providers-32-classic.png?version=img.2.0.0&quot;) 0px -2px / 32px no-repeat; vertical-align: baseline;">

                                </div>
                            </div>
                            <div style="margin: 0px; padding: 0px; outline: none; border-width: 5px; border-style: solid; border-color: transparent transparent rgb(102, 102, 102); border-image: initial; border-radius: 0px; cursor: default; float: none; position: absolute; display: none; width: 0px; height: 0px; left: 180px; top: 28px; box-sizing: content-box; z-index: 9999;">

                            </div>
                        </div>

                    </div>
                </div>
                <div class="clear"></div>
            </section>

            <?php ActiveForm::end(); ?>
        </div>
    </div>
</div>


