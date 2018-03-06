<?php

namespace app\models;

use Yii;
use yii\data\ActiveDataProvider;
use yii\db\ActiveQuery;
use yii\db\ActiveRecord;
use yii\web\NotFoundHttpException;

/**
 * This is the model class for table "{{%tags}}".
 *
 * @property int $id
 * @property string $title
 */
class Tags extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%tags}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title' => Yii::t('app', 'Title'),
        ];
    }

    public static function string2array($tags)
    {
//        var_dump($tags);
//        die();
        return preg_split('/\s*,\s*/',trim($tags),-1,PREG_SPLIT_NO_EMPTY);
    }

    public static function array2string($tags)
    {
        return implode(', ',$tags);
    }
    /**
     * Возвращает опубликованные посты, связанные с тэгом.
     * @return ActiveDataProvider
     */
    public function getPublishedPosts()
    {
        return new ActiveDataProvider([
            'query' => $this->getTagPosts()
                ->alias('tp')
                ->leftJoin(Post::tableName() . ' p', 'p.id = tp.post_id')
                ->where(['status' => Post::STATUS_PUBLISHED])
                ->orderBy(['updated_at' => SORT_DESC])
        ]);
    }

    /**
     * Возвращает модель тэга.
     * @param int $id
     * @return Tags
     * @throws NotFoundHttpException
     */
    public function getTag($id)
    {
        if (($model = Tags::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested post does not exist.');
        }
    }

}
