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


$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Blog'), 'url' => ['posts/index']];
$category_url = Posts:: loadBreadCrumb();
if ($category_url['title'] !== null) {
    $this->title = Yii::t('app',  $category_url['title']);

}
else
{
    $this->title = Yii::t('app', 'All Posts');
}
$this->params['breadcrumbs'][] = $this->title;

?>
<p>
    <?= Html::a(Yii::t('app', 'Create Posts'), ['create'], ['class' => 'btn btn-success']);?>
</p>

<div class="col-sm-10 post-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <div>
        <?= LinkPager::widget([
            'pagination' => $posts->getPagination()
        ]) ?>
    </div>
    <div id="content">
        <div class="boxcontainer">
            <p>
                <?= Posts::getEmptyPromt() ?>
            </p>
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
<div class="allvisio" >
    <?php echo $this->render('_sidebar', [
        'model' => $model,
        'posts' => $posts,
        'categories' => \common\models\Categories::find()->all(),
        'tags' => \common\models\Tags::find()->all(),

    ]); ?>
</div>

