<?php

namespace app\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\ActiveQuery;

use yii\data\ActiveDataProvider;

use yii\db\Expression;
use yii\helpers\ArrayHelper;
use common\models\User;
/**
 * This is the model class for table "{{%post}}".
 *
 * @property int $id
 * @property string $title
 * @property string $content
 * @property string $author_id автор
 * @property int $category_id
 * @property int $status
 * @property int $viewed
 * @property string $created_at
 * @property string $updated_at
 *
 * @property User $author
 * @property Categories $category
 * @property Comments $comments

 */
class Posts extends \yii\db\ActiveRecord
{
     /*
     * Статус поста: черновие.
     */
    const STATUS_DRAFT = 0; /* 'draft';
     /*
     * Статус поста: опубликованн.
     */
    const STATUS_PUBLISHED = 1; /*'published';
     /*
      * Статус поста: архівний.
     */
    const STATUS_ARCHIVES = 2; /*'archives';
     /**
     * Статус поста: Очікування схвалення.
     */
    const STATUS_Pending_Approval = 3; /*'pending_approval';*/


    public static $statuses = [

        self::STATUS_DRAFT => 'draft',
        self::STATUS_PUBLISHED => 'published',
        self::STATUS_ARCHIVES => 'archives',
        self::STATUS_Pending_Approval => 'pending_approval',

    ];


    private $_oldTags;
    /**
     * Список тэгов, закреплённых за постом.
     * @var array
     */
    protected $tags = [];
    /**
     * @return string the URL that shows the detail of the post
     */
    public function getUrl()
    {
        return Yii::$app->urlManager->createUrl('post/view', array(
            'id'=>$this->id,
//            'title'=>$this->title,
        ));
    }

    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at', 'updated_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
                // если вместо метки времени UNIX используется datetime:
//                'value' => new Expression('NOW()'),
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%post}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'content', 'category_id', 'status'], 'required'],
            [['content'], 'string'],
            [['category_id', 'status', 'author_id'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['title'], 'string', 'max' => 255],
            [['status'], 'in', 'range'=>array(0,1,2,3)],
//            [['tags'], 'match', 'pattern'=> '/^[0-1A-Za-zА-Яа-яs,]+$/u\',',
//                'message'=>'В тегах можно использовать только буквы.'],
            [['tags'], 'normalizeTags'],
            [['title, status'], 'safe', 'on'=>'search'],
//            array('title, content, status', 'required'),
//            array('title', 'length', 'max'=>128),
//            array('status', 'in', 'range'=>array(1,2,3)),
//            array('tags', 'match', 'pattern'=>'/^[\w\s,]+$/',
//                'message'=>'В тегах можно использовать только буквы.'),
//            array('tags', 'normalizeTags'),

//            array('title, status', 'safe', 'on'=>'search'),
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
            'content' => Yii::t('app', 'Content'),
            'status' => Yii::t('app', 'Status'),
            'category_id' => Yii::t('app', 'Category ID'),
            'viewed' => Yii::t('app', 'Viewed'),
            'author_id' => Yii::t('app', 'Author ID'),
            'created_at' => Yii::t('app', 'Created At'),
            'updated_at' => Yii::t('app', 'Updated At'),
        ];
    }
    public function normalizeTags($attribute,$params)
    {
        var_dump($attribute);
        var_dump($params);

        var_dump($this->tags);
        $this->tags=Tags::array2string(array_unique(Tags::string2array($this->tags)));

    }

    /**
     * @return ActiveQuery
     */
    public function getAuthor()
    {
        return $this->hasOne(User::className(), ['id' => 'author_id']);
    }

    public function getCategory()
    {
        return $this->hasOne(Categories::className(), ['id' => 'category_id']);
    }
    /**
     * @return ActiveQuery
     */
    public function getComments()
    {
        return $this->hasMany(Comments::className(), ['post_id' => 'id']);
    }

    /**
     * @return ActiveQuery
     */
    public function getCommentCount()
    {
        return $this->getComments()->count();

    }


    /**
     * Возвращает опубликованные комментарии
     * @return ActiveDataProvider
     */
    public function getPublishedComments()
    {
        return new ActiveDataProvider([
            'query' => $this->getComments()
                ->where(['publish_status' => Comments::STATUS_PUBLISHED])
        ]);
    }

    /**
     * Устанавлиает тэги поста.
     * @param $tagsId
     */
    public function setTags($tagsId)
    {
        $this->tags = (array) $tagsId;
    }

    /**
     * Возвращает массив идентификаторов тэгов.
     */
    public function getTags()
    {
        return ArrayHelper::getColumn(
            $this->getTagPost()->all(), 'tag_id'
        );
    }

    /**
     * Возвращает тэги поста.
     * @return ActiveQuery
     */
    public function getTagPost()
    {
        return $this->hasMany(
            TagPost::className(), ['post_id' => 'id']
        );
    }

    /**
     * Возвращает опубликованные посты
     * @return ActiveDataProvider
     */
    public function getPublishedPosts()
    {
        return new ActiveDataProvider([
            'query' => Posts::find()
                ->where(['status' => self::STATUS_PUBLISHED])
                ->orderBy(['updated_at' => SORT_DESC])
        ]);
    }

    /**
     * Возвращает модель поста.
     * @param int $id
     * @throws NotFoundHttpException в случае, когда пост не найден или не опубликован
     * @return Post
     */
    public function getPost($id)
    {
        if (
            ($model = Posts::findOne($id)) !== null &&
            $model->isPublished()
        ) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested post does not exist.');
        }
    }

    public function afterDelete()
    {
        TagPost::deleteAll(['post_id' => $this->id]);
        Comments::deleteAll('post_id='.$this->id);

        parent::afterDelete(); // TODO: Change the autogenerated stub

    }

    /**
     * @inheritdoc
     */
    public function afterSave($insert, $changedAttributes)
    {
        TagPost::deleteAll(['post_id' => $this->id]);

        if (is_array($this->tags) && !empty($this->tags)) {
            $values = [];
            foreach ($this->tags as $id) {
                $values[] = [$this->id, $id];
            }
            self::getDb()->createCommand()
                ->batchInsert(TagPost::tableName(), ['post_id', 'tag_id'], $values)->execute();
        }

        parent::afterSave($insert, $changedAttributes);
    }

    /**
     * Опубликован ли пост.
     * @return bool
     */
    protected function isPublished()
    {
        return $this->status === self::STATUS_PUBLISHED;
    }
    /**
     * @return ActiveQuery
     * возвращать тэги, закреплённые за постом*
     * @return ActiveQuery
      **/
    public function getTagPosts()
    {
        return $this->hasMany(TagPost::className(), ['post_id' => 'id']);
    }

    /**
     * Adds a new comment to this post.
     * This method will set status and post_id of the comment accordingly.
     * @param Comment the comment to be added
     * @return boolean whether the comment is saved successfully
     */
    public function addComment($comment)
    {
        if(Yii::app()->params['commentNeedApproval'])
            $comment->status=Comments::STATUS_MODERATE; /*STATUS_PENDING;*/
        else
            $comment->status=Comments::STATUS_PUBLISHED; /*STATUS_APPROVED;*/
        $comment->post_id=$this->id;
        return $comment->save();
    }

}
