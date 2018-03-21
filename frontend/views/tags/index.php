<?php
//H:\1_PHP\OpenServer\domains\web-vin\frontend\views\tags\view.php
/**
 * Created by PhpStorm.
 * User: georg
 * Date: 24.06.15
 * Time: 18:01
 */

/** @var $tag common\models\Tags */
/** @var $posts \yii\data\ActiveDataProvider */
/** @var $categories yii\data\ActiveDataProvider */
/** @var $postTag \common\models\TagPost */

use yii\helpers\Html;
use yii\widgets\LinkPager;
use common\models\Posts;


Yii::$app->view->registerCssFile('/blog/css/styles.css', ['yii\web\CssAsset']);

$this->title = $tag->title;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Blog'), 'url' => ['posts/index']];
$category_url = Posts:: loadBreadCrumb();
if ($category_url['title'] !== null) {
    $this->params['breadcrumbs'][] = ['label' => $category_url['title'],
        'url' => $category_url['url']];
}	  
//$this->params['breadcrumbs'][] = $this->title;
?>

<div class="col-sm-10 post-index">

<!--    <h1>Тэг: --><?//= Html::encode($this->title) ?><!--</h1>-->

	
	  <div id="content">
        <!--        <div class="container showcase">-->
        <div class="boxcontainer">

            <?php
            foreach ($posts->models as $postTag) {
                echo $this->render('//posts/shortViewAllPosts', [
                    'model' => $postTag->getPost()->one()
                ]);
            }
            ?>
        </div>
    </div>
	
    <?php
//    foreach ($posts->models as $postTag) {
//        echo $this->render('//posts/shortViewAllPosts', [
//            'model' => $postTag->getPost()->one()
//        ]);
//    }
    ?>

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
        foreach ($categories->models as $tagItem) {
            echo $this->render('//categories/shortViewCategory', [
                'model' => $tagItem
            ]);
        }
        ?>
    </ul>
</div>

<div class="col-sm-2 col-sm-offset blog-sidebar">
    <h2><?= Yii::t('frontend', 'Tags') ?></h2>
    <ul>
        <?php
        foreach ($tags as $tag) {
            echo $this->render('//tags/shortViewTag', [
                'model' => $tag
            ]);
        }
        ?>
    </ul>
</div>
