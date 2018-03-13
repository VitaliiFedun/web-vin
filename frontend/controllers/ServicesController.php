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
use yii\helpers\Url;

use vova07\imperavi\actions\UploadAction;
use vova07\imperavi\actions\GetAction;



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

//     public function actions()
//    {
////        die();
//        return [
//            'image-upload' => [
//                'class' => 'vova07\imperavi\actions\UploadFileAction',
//                'url' => '/upload/',
//                'path' => '@webroot/upload/',
//
//            ],
//            'images-get' => [
//                'class' => 'vova07\imperavi\actions\GetImagesAction',
//                'url' => '/upload/',
//                'path' => '@webroot/upload/',
//                'options' => ['only' => ['*.jpg', '*.jpeg', '*.png', '*.gif', '*.ico']], // These options are by default.
//
//            ],
//            //Загрузка файлов
//            'file-upload' => [
//                'class' => 'vova07\imperavi\actions\UploadAction',
//                'url' =>  Url::to(['/post/images-get']),
//                'path' => '@frontend/web/post/images-get',
//                'uploadOnlyImage' => false, // For any kind of files uploading.
//                'createDirectory' => true,
//                'createDirectoryMode' => 0777,
//                'createDirectoryRecursive' => true,
//            ],
//
//
//            'files-get' => [
//                'class' => 'vova07\imperavi\actions\GetFilesAction',
//                'url' =>  Url::to(['/post/images-get']),  // URL адрес папки где хранятся файлы.
//                'path' => '@frontend/web/post/images-get/',  // Или абсолютный путь к папке с файлами.
//                'options' => ['only' => ['*.txt', '*.md']], // These options are by default.
//                'createDirectory' => true,
//                'createDirectoryMode' => 0777,
//                'createDirectoryRecursive' => true,
//            ],
//
//        ];
//    }
    //для визуального редактора
    public function actions(){
        return
            [
                //для загрузки и вставки изображений с компьютера
                'image-upload' => [
                    'class' => 'vova07\imperavi\actions\UploadFileAction',
                    'url' => Url::to(['/images-upload']), // URL адрес папки куда будут загружатся изображения.
                    'path' => '@frontend/image-upload/', // Или абсолютный путь к папке куда будут загружатся изображения.
                    'createDirectory' => true,
                    'createDirectoryMode' => 0777,
                    'createDirectoryRecursive' => true,

                ],


//            //для вставки уже загруженных изображений
                'images-get' => [
                    'class' => 'vova07\imperavi\actions\GetImagesAction',
                    'url' => Url::to(['/images-get']), // URL адрес папки куда будут загружатся изображения.
                    'path' => '@frontend/image-get/', // Или абсолютный путь к папке куда будут загружатся изображения.
                    'options' => ['only' => ['*.jpg', '*.jpeg', '*.png', '*.gif', '*.ico']], // These options are by default.
                    'createDirectory' => true,
                    'createDirectoryMode' => 0777,
                    'createDirectoryRecursive' => true,
                ],
                //Загрузка файлов
                'file-upload' => [
                    'class' => 'vova07\imperavi\actions\UploadAction',
                    'url' =>  Url::to(['/post/images-get']),
                    'path' => '@frontend/web/post/images-get',
                    'uploadOnlyImage' => false, // For any kind of files uploading.
                    'createDirectory' => true,
                    'createDirectoryMode' => 0777,
                    'createDirectoryRecursive' => true,
                ],


                'files-get' => [
                    'class' => 'vova07\imperavi\actions\GetFilesAction',
                    'url' =>  Url::to(['/post/images-get']),  // URL адрес папки где хранятся файлы.
                    'path' => '@frontend/web/post/images-get/',  // Или абсолютный путь к папке с файлами.
                    'options' => ['only' => ['*.txt', '*.md']], // These options are by default.
                    'createDirectory' => true,
                    'createDirectoryMode' => 0777,
                    'createDirectoryRecursive' => true,
                ],
            ];
    }

}
