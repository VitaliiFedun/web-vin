<?php

use common\models\User;
use common\models\Categories;
use common\models\Post;
use common\models\TagPost;
use common\models\Tags;
use common\models\Auth;
use yii\db\Migration;


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

        $this->createTable(Categories::tableName(), [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
            'description'=> $this->string(),
        ], $tableOptions);

        $this->createTable(Posts::tableName(), [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
            'image_url'=> $this->string()->notNull(),
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
        $this->createTable(Tags::tableName(), [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
        ], $tableOptions);

        $this->createTable(TagPost::tableName(), [
            'id' =>  $this->primaryKey(),
            'tag_id' => $this->integer(),
            'post_id' => $this->integer(),
        ], $tableOptions);

        $this->createIndex('FK_tag', TagPost::tableName(), 'tag_id');
        $this->addForeignKey(
            'FK_tag_post', TagPost::tableName(), 'tag_id', Tags::tableName(), 'id', 'SET NULL', 'CASCADE'
        );

        $this->createIndex('FK_post', TagPost::tableName(), 'post_id');
        $this->addForeignKey(
            'FK_post_tag', TagPost::tableName(), 'post_id', Posts::tableName(), 'id', 'SET NULL', 'CASCADE'
        );

        $this->createTable('{{%Comment}}', [
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
             'url' =>  $this->text(),
        ], $tableOptions);

        $this->createIndex('idx-Comment-entity', '{{%Comment}}', 'entity');
        $this->createIndex('idx-Comment-status', '{{%Comment}}', 'status');

        $this->createIndex('FK_comment_author', Comments::tableName(), 'createdBy');
        $this->addForeignKey(
            'FK_comment_author', Comments::tableName(), 'createdBy', User::tableName(), 'id', 'SET NULL', 'CASCADE'
        );

        $this->createIndex('FK_comment_post', Comments::tableName(), 'entityId');
        $this->addForeignKey(
            'FK_comment_post', Comments::tableName(), 'entityId', Posts::tableName(), 'id', 'SET NULL', 'CASCADE'
        );

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
        $this->dropTable(User::tableName());
        $this->dropTable(User::tableName());


        $this->dropForeignKey('FK_tag_post', TagPost::tableName());
        $this->dropForeignKey('FK_post_tag', TagPost::tableName());

        $this->dropTable(Tags::tableName());
        $this->dropTable(TagPost::tableName());
        $this->dropTable(Posts::tableName());
        $this->dropTable(Categories::tableName());
        $this->dropTable(User::tableName());

    }
}
