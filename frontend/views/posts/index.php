<?php

use yii\helpers\Html;
use yii\widgets\LinkPager;
use common\models\Posts;

Yii::$app->view->registerCssFile('/blog/css/styles.css', ['yii\web\CssAsset']);

/* @var $this yii\web\View */
/* @var $searchModel common\models\PostsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */
/* @var $posts common\models\Posts */
/* @var $post common\models\Posts */

$this->title = Yii::t('app', 'All Posts');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Blog'), 'url' => ['posts/index']];
$category_url = Posts:: loadBreadCrumb();
if ($category_url['title'] !== null) {
      $this->params['breadcrumbs'][] = ['label' => $category_url['title'],
        'url' => $category_url['url']];

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

 <?php echo $this->render('_sidebar', [
     'model' => $model,
     'posts' => $posts,
//     'categories' => $categories,
//     'tags' => $tags,
     'categories' => \common\models\Categories::find()->all(),
     'tags' => \common\models\Tags::find()->all(),

 ]); ?>

<!--<div class="col-sm-2 col-sm-offset blog-sidebar">-->
<!--    <h2>--><?//= Yii::t('app', 'Categories') ?><!--</h2>-->
<!--    <ul>-->
<!--        --><?php
//        foreach ($categories->models as $category) {
//            echo $this->render('//categories/shortViewCategory', [
//                'model' => $category
//            ]);
//        }
//        ?>
<!--    </ul>-->
<!---->
<!--</div>-->
<!--<div class="col-sm-2 col-sm-offset blog-sidebar">-->
<!--    <h2>--><?//= Yii::t('frontend', 'Tags') ?><!--</h2>-->
<!--    <ul>-->
<!--        --><?php
//        foreach ($tags as $tag) {
//            echo $this->render('//tags/shortViewTag', [
//                'model' => $tag
//            ]);
//        }
//        ?>
<!--    </ul>-->
<!--</div>-->


