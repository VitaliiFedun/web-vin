<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 25.03.2018
 * Time: 20:51
 */
/* @var $category common\models\Categories */

/* @var $categories common\models\Categories  */

?>
<!--<div class="content" >-->
    <div class="col-sm-2">
        <div class="blog-sidebar">
        <h3><?= Yii::t('app', 'Categories').':' ?></h3>
        <?php
        foreach ($categories as $category) {
            echo $this->render('//categories/shortViewCategory', [
                'model' => $category
            ]);
        }
        ?>
        </div>

    <div class="blog-sidebar">
        <h3><?= Yii::t('frontend', 'Tags').':' ?></h3>
        <?php
        foreach ($tags as $tag) {
            echo $this->render('//tags/shortViewTag', [
                'model' => $tag
            ]);
        }
        ?>
    </div>
</div>
