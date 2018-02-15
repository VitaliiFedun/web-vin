<?php

namespace  frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

use frontend\models\OcrForm;
use frontend\models\AudioForm;


class ServicesController extends \yii\web\Controller
{
    /**
     * Displays Services page .
     *
     * @return mixed
     */
    public function actionIndex()
    {
        return $this->render('index');
    }

    /**
     * Displays about page.
     *
     * @return mixed
     */


    public function actionOcr()
    {
        $model = new OcrForm();
        if ($model->load(Yii::$app->request->post())) {
            return $this->goHome();   /*TO DO*/
        }

        return $this->render('ocr');
    }
    public function actionAudio()
    {
//        $model = new OcrForm();
//        if ($model->load(Yii::$app->request->post())) {
//            return $this->goHome();   /*TO DO*/
//        }

        return $this->render('audio');
    }


}
