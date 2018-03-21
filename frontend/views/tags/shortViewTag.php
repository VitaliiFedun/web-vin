<?php
/**
 * H:\1_PHP\OpenServer\domains\web-vin\
 * frontend\views\tags\shortViewTag.php
 * Created by PhpStorm.
 * User: user
 * Date: 15.03.2018
 * Time: 23:48
 */
?>
<!--<li>--><?//= \yii\helpers\Html::a($model->title, ['tags/show', 'id' => $model->id])?><!--</li>-->
<?php
if ($model->getPublishedPosts()->count>0)
{ ?>
<li><?= \yii\helpers\Html::a($model->title.' - ('.$model->getPublishedPosts()->count.')', ['tags/show', 'id' => $model->id])?></li>
<?php } ?>