<?php
/**
 * Created by PhpStorm.
 * User: georgy
 * Date: 18.10.14
 * Time: 2:14
 */
use yii\helpers\Html;
use yii\widgets\LinkPager;
use common\models\Posts;
Yii::$app->view->registerCssFile('/blog/css/styles.css', ['yii\web\CssAsset']);

/** @var $this yii\web\View */
/** @var $category \common\models\Category текущая категория */
/** @var $categories \yii\data\ActiveDataProvider список категорий */
/** @var $posts \yii\data\ActiveDataProvider список категорий */


$this->title = Yii::t('frontend', 'Category') . ': ' . $category->title;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Blog'), 'url' => ['posts/index']];
$category_url = Posts:: loadBreadCrumb();
if ($category_url['title'] !== null) {
    $this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Category') . ': ' . $category->title,
        'url' => ['/categories/show', 'id' => $category->id]];
}
?>

<div class="col-sm-10 post-index">

    <div id="content">
        <!--        <div class="container showcase">-->
        <div class="boxcontainer">

            <?php
            foreach ($posts->models as $post) {
                echo $this->render('//posts/shortViewAllPosts', [
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
    <h1><?= Yii::t('frontend', 'Categories') ?></h1>
    <ul>
        <?php
        foreach ($categories->models as $category) {
            echo $this->render('shortViewCategory', [
                'model' => $category
            ]);
        }
        ?>
    </ul>
</div>
