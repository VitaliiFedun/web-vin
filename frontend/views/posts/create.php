<?php

use yii\helpers\Html;
use common\models\Posts;

/* @var $this yii\web\View */
/* @var $model common\models\Posts */

//<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">

$this->title = Yii::t('app', 'Create Posts');
$category_url = Posts:: loadBreadCrumb();
if ($category_url['title'] !== null) {
       $this->params['breadcrumbs'][] = ['label' => $category_url['title'],
        'url' => $category_url['url']];


}

$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Posts'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="posts-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
            'model' => $model,
            'category' => $category,
            'tags' => $tags,
            'authors' => $authors

    ]) ?>

</div>
