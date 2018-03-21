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
            <?=Yii::t('app','If you forgot your password you can')?><?= Html::a(' '.Yii::t('app','reset it'), ['site/request-password-reset']) ?>.

            <p style="margin:0;">
            <li data-toggle="modal" data-target="#signup-modal"><a href="#">Реєстрація</a></li>
                    --><?//= Html::a(' '.Yii::t('app','Registration'), ['site/ajax-signup']) ?><!--.-->
<!--                <a href="/registration">--><?//=Yii::t('app',Registration)?><!--</a>-->
<!--                'url' => '#', 'options' => ['data-toggle' => 'modal', 'data-target' => '#login-modal']]-->
                | <a href="/remind"><?=Yii::t('app','Forgot your password?')?></a></p>
        </div>
    </div>

    <section class="main full">

        <div class="portlet" id="yw2">
            <div class="portlet-decoration">
                <div class="portlet-title"><span><?=Yii::t('app','The entrance through social networks')?></span></div>
            </div>
            <div class="portlet-content">

                <div id="uLogin"
                     x-ulogin-params=
                     "
                             display=panel;
                             fields=first_name,last_name,email,photo;
                             providers= twitter, facebook, google;
                             hidden=other;
                             redirect_uri=http%3A%2F%2Fwww.planetatuninga.ru%2Fulogin%2Flogin%3Freturn%3D%252Flogin
                           "
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