<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 21.01.2018
 * Time: 18:23
 */
//H:\1_PHP\OpenServer\domains\web-vin\frontend\widgets\FBFWidget.php
namespace frontend\widgets;

use Yii;
use yii\base\Widget;
use frontend\models\ContactForm;

class FBFWidget extends Widget
{

    public function run()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');
        }
        return $this->render('fbfWidget', [
            'model' => $model,
        ]);
    }

}