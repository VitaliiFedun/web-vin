<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 20.03.2018
 * Time: 10:43
 */
namespace frontend\widgets\MultiLang;

use yii\helpers\Html;

class MultiLang extends \yii\bootstrap\Widget
{
    public $cssClass;
    public function init(){}

    public function run() {

        return $this -> render('view', [
            'cssClass' => $this->cssClass,
        ]);

}
}