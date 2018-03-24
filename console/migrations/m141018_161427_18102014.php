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

        $this->createTable(Categories::tableName(), [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
			'description'=> $this->string(),
        ], $tableOptions);

        $this->createTable(Posts::tableName(), [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
            'anons' => $this->text()->notNull(),
            'content' => $this->text()->notNull(),
            'viewed' => $this->integer()->notNull()->defaultValue(-1),
            'category_id' => $this->integer(),
            'author_id' => $this->integer(),
			'status' => $this->integer(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ], $tableOptions);

        $this->createIndex('FK_post_author', Posts::tableName(), 'author_id');
        $this->addForeignKey(
            'FK_post_author', Posts::tableName(), 'author_id', User::tableName(), 'id', 'SET NULL', 'CASCADE'
        );

        $this->createIndex('FK_post_category', Posts::tableName(), 'category_id');
        $this->addForeignKey(
            'FK_post_category', Posts::tableName(), 'category_id', Categories::tableName(), 'id', 'SET NULL', 'CASCADE'
        );
    }

    public function down()
    {
        $this->dropTable(Posts::tableName());
        $this->dropTable(Categories::tableName());
    }
}
