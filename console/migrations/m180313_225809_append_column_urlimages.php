<?php

use yii\db\Migration;
use common\models\Posts;

/**
 * Class m180313_225809_append_column_urlimages
 */
class m180313_225809_append_column_urlimages extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn(Posts::tableName(), 'image_url', $this->string(256));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn(Posts::tableName(), 'image_url');        return false;
    }


}
