<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 21.01.2018
 * Time: 11:32
 */


namespace frontend\widgets;

use Yii;
use yii\base\Widget;
use frontend\models\SignupForm;

class SignupFormWidget extends Widget {

    public function run() {
        if (Yii::$app->user->isGuest) {
            $model = new SignupForm();
            return $this->render('signupFormWidget', [
                'model' => $model,
            ]);
        } else {
            return ;
        }
    }

}