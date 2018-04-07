<?php

use common\models\User;

class m130524_201442_init extends \yii\db\Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }

        $this->createTable(User::tableName(), [
            'id' => $this->primaryKey(),
            'username' => $this->string()->notNull(),
            'auth_key' => $this->string(32)->notNull(),
            'password_hash' => $this->string()->notNull(),
            'password_reset_token' => $this->string(),
            'email' => $this->string()->notNull(),
            'registration_ip'=> $this->string(15),
            'bind_to_ip' => $this->string(),
            'avatar_url' => $this->string(),
            'role' => $this->smallInteger()->notNull()->defaultValue(10),
            'status' => $this->smallInteger()->notNull()->defaultValue(10),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),

        ], $tableOptions);
        $this->createTable(Auth::tableName(), [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'source' => $this->string()->notNull(),
            'source_id' => $this->string()->notNull(),
        ],$tableOptions);

        $this->addForeignKey('fk-auth-user_id-user-id', Auth::tableName(), 'user_id', User::tableName(), 'id', 'CASCADE', 'CASCADE');
    }

    public function down()
    {
        $this->dropTable(Auth::tableName());
        $this->dropTable(User::tableName());

    }
}
