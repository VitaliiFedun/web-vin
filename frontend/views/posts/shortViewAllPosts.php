<?php
/**
 * Created by PhpStorm.
 * User: georgy
 * Date: 09.07.14
 * Time: 9:26
 */
use common\models\TagPost;
//use yii\helpers\Html;
use yii\helpers\Url;
use yii\helpers\HtmlPurifier;
/* @var $model common\models\Posts */
/* @var TagPost $postTag */
?>

<!--<h1>--><?//= $model->title.'titles' ?><!--</h1>-->
<div class="article-box">

    <div class="featured-image">

        <a
                href="<?= Url::to(['posts/view', 'id' => $model->id]) ?>">

              <img    width  = "270px" height="auto"
                    src    ="<?= $model->image_url ?>"
                    alt    = "<?= $model->title ?>"
                    class  = 'attachment-square size-square wp-post-image'
              >
        </a>
    </div>

    <div class="content-short">
        <h3><?= $model->title ?></h3>
        <h5 class="storytitle" >
            <p>
                <?= Yii::t('app', 'Published on') ?>:
                <?= date('d-m-Y',$model->created_at) ?>
            </p>
<!--            <p>-->
                <?= Yii::t('app', 'Author') ?>:
                <?= $model->author->username ?>
<!--            </p>-->

        </h5>

        <a
                href="<?= Url::to(['posts/view', 'id' => $model->id]) ?>"
                rel="bookmark"> <?= HtmlPurifier::process( $model->anons) ?>
        </a>

    </div>

<!--    --><?//= Html::a(Yii::t('app', 'More'),
//        ['posts/view', 'id' => $model->id],
//        ['class' => 'btn btn-success']) ?>


</div>

