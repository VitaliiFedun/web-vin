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

<div class="col-sm-2 col-sm-offset blog-sidebar">
    <h2><?= Yii::t('app', 'Categories') ?></h2>
<ul>
    <?php
    foreach ($categories as $category) {
        echo $this->render('//categories/shortViewCategory', [
            'model' => $category
        ]);
    }
    ?>
</ul>

</div>
<div class="col-sm-2 col-sm-offset blog-sidebar">
    <h2><?= Yii::t('frontend', 'Tags') ?></h2>
    <ul>
        <?php
        foreach ($tags as $tag) {
            echo $this->render('//tags/shortViewTag', [
                'model' => $tag
            ]);
        }
        ?>
    </ul>
</div>
