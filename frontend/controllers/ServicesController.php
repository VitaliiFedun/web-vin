<?php

namespace  frontend\controllers;

use Yii;
//use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

use frontend\models\OcrForm;
use frontend\models\AudioForm;
use yii\helpers\Url;

use vova07\imperavi\actions\UploadAction;
use vova07\imperavi\actions\GetAction;



class ServicesController extends Controller
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
        return $this->render('ocr');
    }
    public function actionAudio()
    {
        return $this->render('audio');
    }


}
