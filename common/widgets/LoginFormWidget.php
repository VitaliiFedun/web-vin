<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 21.01.2018
 * Time: 11:32
 */


namespace common\widgets;

use Yii;
use yii\base\Widget;
use common\models\LoginForm;

class LoginFormWidget extends Widget {

    public function run() {
        if (Yii::$app->user->isGuest) {
            $model = new LoginForm();
            return $this->render('loginFormWidget', [
                'model' => $model,
            ]);
        } else {
            return ;
        }
    }

}