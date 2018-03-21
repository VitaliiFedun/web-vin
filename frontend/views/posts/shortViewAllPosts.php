<?php
/**
 * Created by PhpStorm.
 * User: georgy
 * Date: 09.07.14
 * Time: 9:26
 */
use common\models\TagPost;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\helpers\HtmlPurifier;
/* @var $model common\models\Post */
/* @var TagPost $postTag */
?>

<!--<h1>--><?//= $model->title.'titles' ?><!--</h1>-->
<div class="article-box">

    <div class="featured-image">

        <a
                href="<?= Url::to(['posts/view', 'id' => $model->id]) ?>">
            <img
                    width="400" height="400"
                    src="<?= $model->image_url ?>"
                    class="attachment-square size-square wp-post-image" alt=""
                    srcset="<?= $model->image_url ?>"
                    sizes="(max-width: 400px) 100vw, 400px"/>
        </a>
    </div>
    <div class="content-short">
        <h3><?= $model->title ?></h3>
        <h5 class="storytitle" >
            <p>
                <?= Yii::t('app', 'Published on') ?>:
                <?= date('d-m-Y',$model->created_at) ?>
            </p>
            <p><?= Yii::t('app', 'Author') ?>:
                <?= $model->author->username ?>
            </p>

        </h5>

        <a
                href="<?= Url::to(['posts/view', 'id' => $model->id]) ?>"
                rel="bookmark"><?php echo HtmlPurifier::process(\common\models\Posts::cutStr($model->content,300)); ?>

    </div>
    <?= Html::a(Yii::t('app', 'More'),
        ['posts/view', 'id' => $model->id],
        ['class' => 'btn btn-success']) ?>


    <h5 class="storytitle" >
    <p>
        <?= Yii::t('app', 'Category') ?>:
        <?= Html::a($model->category->title, ['categories/show', 'id' =>
            $model->category->id]) ?>
    </p>


    <div class="tags">
        <?php
        $tags = [];
        foreach($model->getTagPost()->all() as $postTag) {
            $tag = $postTag->getTag()->one();
            $tags[] = Html::a($tag->title, ['tags/show', 'id' => $tag->id]);
        } ?>

        <?= Yii::t('app', 'Tags') ?>:
        <?= implode($tags, ', ') ?>
    </div>

    <?php echo Html::a('Permalink',['posts/view', 'id' => $model->id]); ?> |
    <?php echo Html::a("Comments ({$model->commentCount})",$model->url.'#comments'); ?> |
    Last updated on <?php echo date('d-m-Y H:i:s',$model->updated_at); ?>
    </h5>
</div>

