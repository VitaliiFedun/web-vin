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
/* @var $model common\models\Post */
/* @var TagPost $postTag */
?>

<!--<h1>--><?//= $model->title.'titles' ?><!--</h1>-->
<div class="article-box post-4811 post
            type-post status-publish
             format-standard has-post-thumbnail
              hentry category-uncategorized
               tag-blogging tag-comment-spam
                tag-comments">
    <!--     id="post-4811" style="">-->

    <div class="featured-image">
        <a
                href="<?= Url::to(['posts/view', 'id' => $model->id]) ?>">
            <img
                    width="400" height="400"
                    src=    "../images/1.jpg"
                    class="attachment-square size-square wp-post-image" alt=""
                    srcset="../blog/images/1.jpg 300w"
                    sizes="(max-width: 400px) 100vw, 400px"/>
        </a>
    </div>
    <div class="content-short">
        <h3><?= $model->title ?></h3>
        <a
                href="<?= Url::to(['posts/view', 'id' => $model->id]) ?>"

    <a
            rel="bookmark"><?php echo substr($model->content,0,375).'...'; ?>
        <!--//             Ваші діти не вміють розв'язувати задачі про труби? Я теж не вмів.-->
    </a>
    </div>
    <?= Html::a(Yii::t('app', 'More'),
        ['posts/view', 'id' => $model->id],
        ['class' => 'btn btn-success']) ?>



    </h3>

    <h4 class="storytitle" >
        <p><?= Yii::t('app', 'Author') ?>:
            <?= $model->author->username ?>
        </p>
    </h4>
    <h5>
        <p>
            <?= Yii::t('app', 'Published on') ?>:
            <?= date('d-m-Y H:i:s',$model->created_at) ?>
        </p>
    </h5>
    <p>
        <?= Yii::t('app', 'Category') ?>:
        <?= Html::a($model->category->title, ['category/view', 'id' =>
            $model->category->id]) ?>
    </p>

    </h4>
    <div class="tags">
        <?php
        $tags = [];
        foreach($model->getTagPost()->all() as $postTag) {
            $tag = $postTag->getTag()->one();
            $tags[] = Html::a($tag->title, ['tag/view', 'id' => $tag->id]);
        } ?>

        <?= Yii::t('app', 'Tags') ?>:
        <?= implode($tags, ', ') ?>
    </div>

    <?php echo Html::a('Permalink',['post/view', 'id' => $model->id]); ?> |
    <?php echo Html::a("Comments ({$model->commentCount})",$model->url.'#comments'); ?> |
    Last updated on <?php echo date('d-m-Y H:i:s',$model->updated_at); ?>

</div>

