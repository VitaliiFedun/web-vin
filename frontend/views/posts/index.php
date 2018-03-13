<?php

use yii\helpers\Html;
use yii\widgets\ListView;
use yii\widgets\LinkPager;
use yii\helpers\ArrayHelper;
use  yii\widgets\Breadcrumbs;
use common\models\Posts;
//Yii::$app->view->registerCssFile('/services/css/styles.css', ['yii\web\CssAsset']);
Yii::$app->view->registerCssFile('/blog/css/styles.css', ['yii\web\CssAsset']);

/* @var $this yii\web\View */
/* @var $searchModel common\models\PostsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'All Posts');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Blog'), 'url' => ['posts/index']];
$category_url = Posts:: loadBreadCrumb();
if ($category_url['title'] !== null) {
    $this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Category') . ': ' . $category->title,
        'url' => ['/categories/show', 'id' => $category->id]];

}
$this->params['breadcrumbs'][] = $this->title;

?>
<div class="col-sm-10 post-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <p>
        <?= Html::a(Yii::t('app', 'Create Posts'), ['create'], ['class' => 'btn btn-success']);?>
    </p>

    <div id="content">
        <div class="boxcontainer">
            <?php
            foreach ($posts->models as $post) {
                echo $this->render('shortViewAllPosts', [
                    'model' => $post
                ]);
            }
            ?>
        </div>
    </div>
    <div>
        <?= LinkPager::widget([
            'pagination' => $posts->getPagination()
        ]) ?>
    </div>
</div>
<div class="col-sm-2 col-sm-offset blog-sidebar">
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

