<?php

use yii\helpers\Html;
use yii\widgets\ListView;
use yii\widgets\LinkPager;
use yii\helpers\ArrayHelper;
//Yii::$app->view->registerCssFile('/services/css/styles.css', ['yii\web\CssAsset']);
Yii::$app->view->registerCssFile('/blog/css/styles.css', ['yii\web\CssAsset']);
/* @var $this yii\web\View */
/* @var $searchModel app\models\PostsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Posts');
$this->params['breadcrumbs'][] = $this->title;
?>


<div class="posts-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <p>
        <?= Html::a(Yii::t('app', 'Create Posts'), ['create'], ['class' => 'btn btn-success']);?>
    </p>

    <div id="content">
        <div class="container showcase">
            <div class="boxcontainer">
                <?php
                foreach ($posts->models as $post) {
                    echo $this->render('shortView', [
                        'model' => $post
                    ]);
                }
                ?>
            </div>
        </div>
    </div>
    <div>
        <?= LinkPager::widget([
            'pagination' => $posts->getPagination()
        ]) ?>
    </div>
</div>
<div class="col-sm-3 col-sm-offset-1 blog-sidebar">
    <h2><?= Yii::t('app', 'Categories') ?></h2>
    <ul>
        <?php
        foreach ($categories->models as $category) {
            echo $this->render('//categories/shortViewCategory', [
                'model' => $category
            ]);
        }
        ?>
    </ul>

</div>

