<?php

use common\models\Categories;
use common\models\Posts;
use common\models\User;
use yii\db\Migration;

class m141018_161427_18102014 extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

    }

    public function down()
    {
        $this->dropTable(Posts::tableName());
        $this->dropTable(Categories::tableName());
    }
}
