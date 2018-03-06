<?php

namespace app\models;

use Yii;
use common\models\User;
/**
 * This is the model class for table "blog_comment".
 *
 * @property int $id
 * @property int $pid
 * @property string $title
 * @property string $content
 * @property string $publish_status
 * @property int $post_id
 * @property int $author_id
 * @property int $created_at
 * @property int $updated_at
 *
 * @property Post $post
 * @property User $author
 */
class Comments extends \yii\db\ActiveRecord
{
    /**
     * РЎС‚Р°С‚СѓСЃ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ "РќР° РјРѕРґРµСЂР°С†РёРё"
     */
    const STATUS_MODERATE = 'moderate';
    /**
     * РЎС‚Р°С‚СѓСЃ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ "РћРїСѓР±Р»РёРєРѕРІР°РЅ"
     */
    const STATUS_PUBLISHED = 'publish';


    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%comment}}';
//        return 'blog_comment';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['pid', 'post_id', 'author_id', 'created_at', 'updated_at'], 'integer'],
            [['title', 'content', 'created_at', 'updated_at'], 'required'],
            [['publish_status'], 'string'],
            [['title', 'content'], 'string', 'max' => 255],
            [['post_id'], 'exist', 'skipOnError' => true, 'targetClass' => Posts::className(), 'targetAttribute' => ['post_id' => 'id']],
            [['author_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['author_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'pid' => Yii::t('app', 'Pid'),
            'title' => Yii::t('app', 'Title'),
            'content' => Yii::t('app', 'Content'),
            'publish_status' => Yii::t('app', 'Publish Status'),
            'post_id' => Yii::t('app', 'Post ID'),
            'author_id' => Yii::t('app', 'Author ID'),
            'created_at' => Yii::t('app', 'Created At'),
            'updated_at' => Yii::t('app', 'Updated At'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPost()
    {
        return $this->hasOne(Posts::className(), ['id' => 'post_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAuthor()
    {
        return $this->hasOne(User::className(), ['id' => 'author_id']);
    }
    /**
     * Р’РѕР·РІСЂР°С‰Р°РµС‚ РєРѕРјРјРµРЅС‚Р°СЂРёР№.
     * @param int $id РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ
     * @throws NotFoundHttpException
     * @return Comment
     */
    public function getComment($id)
    {
        if (
            ($model = Comments::findOne($id)) !== null &&
            $model->isPublished()
        ) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested post does not exist.');
        }
    }

    /**
     * РћРїСѓР±Р»РёРєРѕРІР°РЅ Р»Рё РєРѕРјРјРµРЅС‚Р°СЂРёР№.
     * @return bool
     */
    protected function isPublished()
    {
        return $this->publish_status === self::STATUS_PUBLISH;
    }

}
