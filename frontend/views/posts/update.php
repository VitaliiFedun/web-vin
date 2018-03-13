<?php

use yii\helpers\Html;
use common\models\Posts;

/* @var $this yii\web\View */
/* @var $model common\models\Posts */

$this->title = Yii::t('app', 'Update Posts: {nameAttribute}', [
    'nameAttribute' => $model->title,
]);
$category_url = Posts:: loadBreadCrumb();
if ($category_url['title'] !== null) {
    $this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Category') . ': ' . $category->title,
        'url' => ['/categories/show', 'id' => $category->id]];

}


$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Posts'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="posts-update">

    <h1><?= Html::encode($this->title) ?></h1>

<!--   --><?php //var_dump($model); var_dump($category); die() ?>

    <?= $this->render('_form', [
        'model' => $model,
        'category' => $category,
        'tags' =>  $tags,
        'authors' => $authors,
        'comments' => $Comments,


    ]) ?>

</div>
