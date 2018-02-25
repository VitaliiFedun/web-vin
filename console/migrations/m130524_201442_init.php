<?php

use yii\db\Migration;

class m130524_201442_init extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%user}}', [
            'id' => $this->primaryKey(),
            'username' => $this->string()->notNull(),
            'auth_key' => $this->string(32)->notNull(),
            'password_hash' => $this->string()->notNull(),
            'password_reset_token' => $this->string()->unique(),
            'email' => $this->string()->notNull()->unique(),
            'status' => $this->smallInteger()->notNull()->defaultValue(10),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),



        ], $tableOptions);
        $this->createIndex('username', '{{%user}}', 'username', true);
        $this->createTable('{{%category}}', [
            'id' => $this->primaryKey(),
            'name' =>$this->string()->notNull(),
            'description' => $this->string()
        ], $tableOptions);
        $this->createIndex('name', '{{%category}}', 'name', true);
        $this->createTable('{{%post}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
            'content' => $this->text()->notNull(),
            'category_id' => $this->smallInteger()->unsigned()->notNull(),
            'status' => $this->smallInteger()->notNull(),
            'created_at' => $this->timestamp()->notNull(),
            'updated_at' => $this->timestamp()->notNull()
        ], $tableOptions);
        $this->createIndex('status', '{{%post}}', 'status');
        $this->createTable('{{%comment}}', [
            'id' => $this->primaryKey(),
            'author' => $this->string()->notNull(),
            'email' => $this->string()->notNull(),
            'url' => $this->string()->notNull(),
            'content' => $this->text()->notNull(),
            'status' => $this->smallInteger()->notNull()
        ], $tableOptions);
        $this->createIndex('status', '{{%comment}}', 'status');
        $this->execute($this->addUserSql());
    }
    private function addUserSql()
    {
        $password_hash = Yii::$app->security->generatePasswordHash('admin');
        $auth_key = Yii::$app->security->generateRandomString();
        $password_reset_token = Yii::$app->security->generateRandomString() . '_' . time();
        $created = time();
        return "INSERT INTO {{%user}} (`username`, `email`, `password_hash`, `auth_key`,
             `password_reset_token`,
             `created_at`,`updated_at` )
              VALUES ('admin', 'admin@myblog.loc', '$password_hash', '$auth_key',
               '$password_reset_token',
              '$created','$created')";
    }


    public function down()
    {
        $this->dropTable('{{%post}}');
        $this->dropTable('{{%comment}}');
        $this->dropTable('{{%category}}');
        $this->dropTable('{{%user}}');

    }
}
