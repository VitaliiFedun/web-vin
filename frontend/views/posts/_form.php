<?php

use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use \yii\helpers\Url;
use yii\widgets\ActiveForm;
use common\models\Posts;
use vova07\imperavi\Widget;

Yii::$app->view->registerCssFile('/services/css/quill.snow.css', ['yii\web\CssAsset']);
Yii::$app->view->registerJsFile('/services/files/quill.min.js',['yii\web\JsAsset']);

/* @var $this yii\web\View */
/* @var $model common\models\Posts */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="posts-form" xmlns:>

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'image_url')->widget(Widget::className(), [

        'settings' => [
            'lang' => 'en',
            'minHeight' => 200,
            'imageUpload' => Url::to(['/posts/image-upload']),
            'imageManagerJson' => Url::to(['/posts/images-get']),
            'fileUpload' => Url::to(['posts/file-upload']),
            'fileManagerJson' => Url::to(['/posts/files-get']),
            'buttons' => ['image', 'file','html'],

            'plugins' => [
                'imagemanager',
                'filemanager',

            ],
        ],
    ]);
    ?>


    <?= $form->field($model, 'author_id')->dropDownList(
        ArrayHelper::map($authors, 'id', 'username')
    ) ?>


    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>
     <?= $form->field($model, 'content')->widget(Widget::className(), [

        'settings' => [
            'lang' => 'en',
            'minHeight' => 200,
            'imageUpload' => Url::to(['/posts/image-upload']),
            'imageManagerJson' => Url::to(['/posts/images-get']),
            'fileUpload' => Url::to(['posts/file-upload']),
            'fileManagerJson' => Url::to(['/posts/files-get']),

            'plugins' => [
                'imagemanager',
                'filemanager',

            ],
        ],
    ]);
    ?>


    <?= $form->field($model, 'category_id')->dropDownList(
        ArrayHelper::map($category, 'id', 'title')
    ) ?>

    <?= $form->field($model, 'status')->dropDownList(
        Posts::$statuses
    ) ?>

    <?= $form->field($model, 'tags')->checkboxList(
        ArrayHelper::map($tags, 'id', 'title'),
        [
            'multiple' => true
        ]
    ) ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>
    <?php //   alert("Hello\nHow are you?"); ?>
    <?php ActiveForm::end(); ?>

</div>
