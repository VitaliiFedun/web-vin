<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%comment}}".
 *
 * @property int $id
 * @property string $entity
 * @property int $entityId
 * @property string $content
 * @property int $parentId
 * @property int $level
 * @property int $createdBy
 * @property int $updatedBy
 * @property string $relatedTo
 * @property string $url
 * @property int $status
 * @property int $createdAt
 * @property int $updatedAt
 */
class Comments extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%comment}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['entity', 'entityId', 'content', 'createdBy', 'updatedBy', 'relatedTo', 'createdAt', 'updatedAt'], 'required'],
            [['entityId', 'parentId', 'level', 'createdBy', 'updatedBy', 'status', 'createdAt', 'updatedAt'], 'integer'],
            [['content', 'url'], 'string'],
            [['entity'], 'string', 'max' => 10],
            [['relatedTo'], 'string', 'max' => 500],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('frontend', 'ID'),
            'entity' => Yii::t('frontend', 'Entity'),
            'entityId' => Yii::t('frontend', 'Entity ID'),
            'content' => Yii::t('frontend', 'Content'),
            'parentId' => Yii::t('frontend', 'Parent ID'),
            'level' => Yii::t('frontend', 'Level'),
            'createdBy' => Yii::t('frontend', 'Created By'),
            'updatedBy' => Yii::t('frontend', 'Updated By'),
            'relatedTo' => Yii::t('frontend', 'Related To'),
            'url' => Yii::t('frontend', 'Url'),
            'status' => Yii::t('frontend', 'Status'),
            'createdAt' => Yii::t('frontend', 'Created At'),
            'updatedAt' => Yii::t('frontend', 'Updated At'),
        ];
    }
}
