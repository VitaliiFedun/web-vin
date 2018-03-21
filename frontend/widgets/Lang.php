<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 19.03.2018
 * Time: 23:59
 */
namespace frontend\widgets;
//use frontend\models\Lang;

class Lang extends \yii\bootstrap\Widget
{
    public function init(){}

    public function run() {
        return $this->render('langView', [
            'current' => Lang::getCurrent(),
            'langs' => Lang::find()->where('id != :current_id', [':current_id' => Lang::getCurrent()->id])->all(),
        ]);
    }
}