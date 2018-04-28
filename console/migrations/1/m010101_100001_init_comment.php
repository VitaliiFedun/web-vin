<?php
use common\models\Comments;
use common\models\Posts;
use common\models\User;
use yii\db\Migration;

/**
 */
class m010101_100001_init_comment extends Migration
{
    /**
     * Create table `Comment`
     */
    public function up()
    {
        $tableOptions = null;

        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%Comments}}', [
            'id' => $this->primaryKey(),
            'entity' => $this->char(10)->notNull(),
            'entityId' => $this->integer()->notNull(),
            'content' => $this->text()->notNull(),
            'parentId' => $this->integer()->null(),
            'level' => $this->smallInteger()->notNull()->defaultValue(1),
            'createdBy' => $this->integer()->notNull(),
            'updatedBy' => $this->integer()->notNull(),
            'status' => $this->smallInteger()->notNull()->defaultValue(1),
            'createdAt' => $this->integer()->notNull(),
            'updatedAt' => $this->integer()->notNull(),
			'relatedTo' => $this->string(500)->notNull(),
			 'url' => $this->text(),
        ], $tableOptions);

        $this->createIndex('idx-Comment-entity', '{{%Comments}}', 'entity');
        $this->createIndex('idx-Comment-status', '{{%Comments}}', 'status');

  $this->createIndex('FK_comment_author', Comments::tableName(), 'createdBy');
        $this->addForeignKey(
            'FK_comment_author', Comments::tableName(), 'createdBy', User::tableName(), 'id', 'SET NULL', 'CASCADE'
        );

        $this->createIndex('FK_comment_post', Comments::tableName(), 'entityId');
        $this->addForeignKey(
            'FK_comment_post', Comments::tableName(), 'entityId', Posts::tableName(), 'id', 'SET NULL', 'CASCADE'
        );
		}

    /**
     * Drop table `Comment`
     */
    public function down()
    {
        $this->dropTable('{{%Comment}}');
    }
}
