<?php

namespace common\models;

use Yii;
use yii\data\ActiveDataProvider;
use yii\db\ActiveQuery;
use yii\db\ActiveRecord;
use yii\web\NotFoundHttpException;
use yii\helpers\ArrayHelper;

/**
 * Модель тэгов.
 *
 * @property integer $id
 * @property string $title название тэга
 *
 * @property TagPost[] $tagPosts
 */
class Tags extends ActiveRecord
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
            [['title'], 'required'],
            [['title'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('backend', 'ID'),
            'title' => Yii::t('backend', 'Title'),
        ];
    }

    /**
     * Возвращает посты, относящиеся к тегу.
     * @return ActiveQuery
     */
    public function getTagPosts()
    {
        return $this->hasMany(TagPost::className(), ['tag_id' => 'id']);
    }
    public static function array2string($tags)
    {
        return implode(', ',$tags);
    }
    public static function string2array($tags)
    {
        return preg_split('/\s*,\s*/',trim($tags),-1,PREG_SPLIT_NO_EMPTY);
    }

    /**
     * Возвращает опубликованные посты, связанные с тэгом.
     * @return ActiveDataProvider
     */
    public function getPublishedPosts()
    {
//        $tagpost = $this->getTagPosts();
//        $postarray = ArrayHelper::getColumn($tagpost,'post_id');
//        return new ActiveDataProvider([
//            'query' => Posts::findAll()
//                ->where([
//                    postarray,
//                    'status' => Posts::STATUS_PUBLISHED
//                ])
//        ]);
//

        return new ActiveDataProvider([
            'query' => $this->getTagPosts()
                ->alias('tp')
                ->leftJoin(Posts::tableName() . ' p', 'p.id = tp.post_id')
                ->where(['status' => Posts::STATUS_PUBLISHED])
                ->orderBy(['created_at' => SORT_DESC])
        ]);
    }
    /**
     * Возвращает опубликованные посты, связанные с тэгом.
     * @return ActiveDataProvider
     */
    public function getPublishedPostsFromTagId($id)
    {
        $tagpost = TagPost::findAll(['tag_id'=>$id]); //  $this->getTagPosts();
        $postarray = ArrayHelper::getColumn($tagpost,'post_id');
//        $postarray = implode(', ',$postarray ) ЦЬОГО НЕ ПОТРІБНО!
//       TO DO;


        return new ActiveDataProvider([
            'query' => Posts::find()
                ->Where([
                    'id' => $postarray,
                    'status' => Posts::STATUS_PUBLISHED
                ])
                ->orderBy(['created_at' => SORT_DESC])
        ]);



//        return new ActiveDataProvider([
//            'query' => $this->getTagPosts()
//                ->alias('tp')
//                ->leftJoin(Posts::tableName() . ' p', 'p.id = tp.post_id')
//                ->where(['status' => Posts::STATUS_PUBLISHED])
//                ->orderBy(['created_at' => SORT_DESC])
//        ]);
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
