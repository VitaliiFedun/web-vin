<?php

use yii\helpers\Html;
use yii\widgets\ListView;
use yii\widgets\LinkPager;
use yii\helpers\ArrayHelper;
use  yii\widgets\Breadcrumbs;
//Yii::$app->view->registerCssFile('/services/css/styles.css', ['yii\web\CssAsset']);
Yii::$app->view->registerCssFile('/blog/css/styles.css', ['yii\web\CssAsset']);

/* @var $this yii\web\View */
/* @var $searchModel common\models\PostsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$title_main= Yii::t('app', 'All Posts');

\common\models\Posts::
//if ($session->has('category_id') &&  $session['category_id']!=0)
$title_main=\common\models\Posts::$_category_url['title'];
var_dump($title_main);
die();
    {
     $this->params['breadcrumbs'][] = ['label' => Yii::t('app', $_category_url['title']) . ': ' . $category->title, 'url' => ['index']];
//        Yii::t('frontend', 'Category:') . ' ' . $category->title;
    }


//$this->params['breadcrumbs'][] = ['label' => 'Подкатегория-2', 'url' => ['/category/subcategory']];
$this->params['breadcrumbs'][] = $this->title;

?>

<div class="col-sm-10 post-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <p>
        <?= Html::a(Yii::t('app', 'Create Posts'), ['create'], ['class' => 'btn btn-success']);?>
    </p>

    <div id="content">
<!--        <div class="container showcase">-->
            <div class="boxcontainer">
                <?php
                foreach ($posts->models as $post) {
                    echo $this->render('shortView', [
                        'model' => $post
                    ]);
                }
                ?>
            </div>
<!--        </div>-->
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

