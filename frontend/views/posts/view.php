<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use common\models\Posts;

/* @var $this yii\web\View */
/* @var $model common\models\Posts */

//use common\models\Comment;
//use common\models\TagPost;

/* @var $model common\models\Post */
/* @var \frontend\models\CommentForm $commentForm \;
/* @var TagPost $post */




$this->title = $model->title;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Blog'), 'url' => ['posts/index']];
$category_url= Posts::loadBreadCrumb();
if ($category_url['title'] !== null) {
    $this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Category') . ': ' .$model->category->title,
        'url' => ['/categories/show', 'id' => $model->category->id]];

}

$this->params['breadcrumbs'][] = $this->title;
?>
<div class="posts-view">

<!--    <h1>--><?//= Html::encode($this->title) ?><!--</h1>-->

<!--    <p>-->
<!--        --><?//= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
<!--        --><?//= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
//            'class' => 'btn btn-danger',
//            'data' => [
//                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
//                'method' => 'post',
//            ],
//        ]) ?>
<!--    </p>-->

    <div class="article-box" >

        <div class="featured-image">
            <p>
                    <img
                    alt="Схема иерархии RBAC для модуля управления статьями"
                    src="../blog/images/1.jpg"
            </p>
        </div>
        <div class="content-big">
            <h3><?= $model->title ?></h3>
            <h4>
                    <?= $model->content; ?>
            </h4>

        </div>

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

    <div class="comments">
        <?php foreach($model->getPublishedComments()->models as $comment) : ?>
            <div class="comment">
                <h3><?= htmlspecialchars($comment->title) ?></h3>
                <div class="meta"><?= Yii::t('frontend', 'Author') ?>: <strong><?=isset($comment->author) ? $comment->author->username : null?></strong></div>
                <div><?= htmlspecialchars($comment->content) ?></div>
            </div>

            <?php echo Html::a('Add comment',['comments/add', 'id' => $comment->id],['class' => 'btn btn-success']); ?>
               <?php endforeach; ?>
    </div>

    <?= $this->render('../comments/_form', [
        'model' => $commentForm
    ]) ?>

</div>
