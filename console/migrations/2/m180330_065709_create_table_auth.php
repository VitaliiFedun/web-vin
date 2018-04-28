<?php

use yii\db\Migration;
use common\models\User;
use common\models\Auth;

/**
 * Class m180330_065709_create_table_auth
 */
class m180330_065709_create_table_auth extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable(Auth::tableName(), [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'source' => $this->string()->notNull(),
            'source_id' => $this->string()->notNull(),
        ],$tableOptions);

        $this->addForeignKey('fk-auth-user_id-user-id', Auth::tableName(), 'user_id', User::tableName(), 'id', 'CASCADE', 'CASCADE');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable(Auth::tableName());
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180330_065709_create_table_auth cannot be reverted.\n";

        return false;
    }
    */
}
