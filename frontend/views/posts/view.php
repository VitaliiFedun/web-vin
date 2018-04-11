<?php

use yii\helpers\Html;
use yii\helpers\HtmlPurifier;
use common\models\Posts;

/* @var $this yii\web\View */
/* @var $model common\models\Posts */
/* @var $commentForm common\models\CommentForm  */
/* @var $tags common\models\Tags  */
/* @var $posts common\models\Posts  */



Yii::$app->view->registerCssFile('/blog/css/styles.css', ['yii\web\CssAsset']);


$this->title = $model->title;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Blog'), 'url' => ['posts/index']];
$category_url= Posts::loadBreadCrumb();
if ($category_url['title'] !== null) {
    $this->params['breadcrumbs'][] = ['label' => $category_url['title'],
        'url' => $category_url['url']];
}

$this->params['breadcrumbs'][] = $this->title;
?>
<!--<div class="posts-view">-->

<div class="col-sm-10 post-index blog-sidebar">
    <!--    <h1>--><?//= Html::encode($this->title) ?><!--</h1>-->

    <!--    <p>-->
    <?= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
    <!--        --><?//= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
    //            'class' => 'btn btn-danger',
    //            'data' => [
    //                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
    //                'method' => 'post',
    //            ],
    //        ]) ?>
    <!--    </p>-->

    <div class="article-box" >

        <div class="content-big">
            <h3><?= Html::encode($model->title) ?></h3>
            <div class="image-anons">
                <div class="featured-image">
                    <img    width  = "270px" height="auto"
                            src    ="<?= $model->image_url ?>"
                            alt    = "<?= $model->title ?>"
                            class  = 'attachment-square size-square wp-post-image'
                    />
                </div>
                <div class="featured-image left-padding">
                    <?= $model->anons ?>
                </div>

            </div>

            <h5 class="storytitle" >
                <?= Yii::t('app', 'Published on') ?>:
                <?= date('d-m-Y',$model->created_at) ?>
                |
                <?= Yii::t('app', 'Author') ?>:
                <?= Html::encode($model->author->username) ?>
                |
                <?= Yii::t('app', 'Viewed') ?>:
                <?= $model->viewed ?>
                |

                <?= Yii::t('app', 'Category') ?>:
                <?= Html::a(Html::encode($model->category->title), ['category/view', 'id' =>
                    $model->category->id]) ?>


            </h5>
            <h4>
                <?= HtmlPurifier::process($model->content); ?>
            </h4>

        </div>


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

        <?php echo Html::a(Yii::t('app','Permalink'),['post/view', 'id' => $model->id]); ?> |
        <?php echo Html::a(Yii::t('app','Comments ')."({$model->commentCount})",$model->url.'#comments'); ?> |
        <?=Yii::t('app','Last updated on')?> <?php echo date('d-m-Y H:i:s',$model->updated_at); ?>

    </div>


    <div class="comments">
        <?php foreach($model->getPublishedComments()->models as $comment) : ?>
            <div class="comment">
                <h3><?= htmlspecialchars($comment->title) ?></h3>
                <div class="meta"><?= Yii::t('frontend', 'Author') ?>: <strong><?=isset($comment->author) ? $comment->author->username : null?></strong></div>
                <div><?= htmlspecialchars($comment->content) ?></div>
            </div>

            <?php echo Html::a(Yii::t('app','Add comment'),['comments/add', 'id' => $comment->id],['class' => 'btn btn-success']); ?>
        <?php endforeach; ?>
    </div>

    <?= $this->render('../comments/_form', [
        'model' => $commentForm
    ]) ?>

</div>
<?php echo $this->render('_sidebar', [
    'model' => $model,
    'posts' => $posts,
    'categories' => \common\models\Categories::find()->all(),
    'tags' => \common\models\Tags::find()->all(),
]); ?>
