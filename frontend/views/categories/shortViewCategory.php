<?php
/**
 * Created by PhpStorm.
 * User: georgy
 * Date: 18.10.14
 * Time: 1:39
 */

/* @var $model frontend\models\Categories */
?>
<?php
if ($model->getPosts()->count>0) { ?>
    <li><?= \yii\helpers\Html::a($model->title . ' - (' . $model->getPosts()->count . ')', ['categories/show', 'id' => $model->id]) ?></li>
<?php } ?>

