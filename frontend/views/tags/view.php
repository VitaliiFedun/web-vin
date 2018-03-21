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

$this->title = $tag->title;
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="col-sm-8 post-index">

    <h1>Тэг: <?= Html::encode($this->title) ?></h1>

    <?php
    foreach ($posts->models as $postTag) {
        echo $this->render('//posts/shortViewAllPosts', [
            'model' => $postTag->getPost()->one()
        ]);
    }
    ?>

    <div>
        <?= LinkPager::widget([
            'pagination' => $posts->getPagination()
        ]) ?>
    </div>

</div>

<div class="col-sm-3 col-sm-offset-1 blog-sidebar">
    <h1>Категории</h1>
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
