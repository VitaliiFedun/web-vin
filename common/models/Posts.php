<?php

namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\ActiveQuery;
use yii\data\ActiveDataProvider;
//use yii\db\Expression;
use yii\helpers\ArrayHelper;
use yii\web\NotFoundHttpException;


/**
 * This is the model class for table "{{%post}}".
 *
 * @property int $id
 * @property string $title
 * @property string $anons
 * @property string $content
 * @property int $viewed
 * @property int $category_id
 * @property int $author_id
 * @property int $status
 * @property int $created_at
 * @property int $updated_at
 * @property string $image_url
 *
// * @property Comment[] $Comments
 * @property User $author
 * @property Category $category
 * @property TagPost[] $tagPosts
 */
class Posts extends ActiveRecord
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

    const STATUS_DELETED = 4;

    public static $statuses = [

        self::STATUS_DRAFT => 'draft',
        self::STATUS_PUBLISHED => 'published',
        self::STATUS_ARCHIVES => 'archives',
        self::STATUS_Pending_Approval => 'pending_approval',
        self::STATUS_DELETED => 'deleted',


    ];


    /**
     * Список тэгов, закреплённых за постом.
     * @var array
     */
    protected $tags = [];

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
            [['title', 'content', 'category_id', 'status','anons'], 'required'],
            [['content','image_url','anons'], 'string'],
            [['category_id', 'status', 'author_id','viewed'], 'integer'],
            [['created_at', 'updated_at', 'tags'], 'safe'],
            [['title'], 'string', 'max' => 255],
            [['status'], 'in', 'range'=>array(0,1,2,3)],




//            
//            [['title', 'anons', 'content', 'created_at', 'updated_at'], 'required'],
//            [['anons', 'content'], 'string'],
//            [['viewed', 'category_id', 'author_id', 'status', 'created_at', 'updated_at'], 'integer'],
//            [['title'], 'string', 'max' => 255],
//            [['image_url'], 'string', 'max' => 256],
//            [['author_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['author_id' => 'id']],
//            [['category_id'], 'exist', 'skipOnError' => true, 'targetClass' => Category::className(), 'targetAttribute' => ['category_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('frontend', 'ID'),
            'title' => Yii::t('frontend', 'Title'),
            'anons' => Yii::t('frontend', 'Anons'),
            'content' => Yii::t('frontend', 'Content'),
            'viewed' => Yii::t('frontend', 'Viewed'),
            'category_id' => Yii::t('frontend', 'Category ID'),
            'author_id' => Yii::t('frontend', 'Author ID'),
            'status' => Yii::t('frontend', 'Status'),
            'created_at' => Yii::t('frontend', 'Created At'),
            'updated_at' => Yii::t('frontend', 'Updated At'),
            'image_url' => Yii::t('frontend', 'Image Url'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getComments()
    {
        return $this->hasMany(Comments::className(), ['entityId' => 'id']);
    }
    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAuthor()
    {
        return $this->hasOne(User::className(), ['id' => 'author_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Categories::className(), ['id' => 'category_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTagPosts()
    {
        return $this->hasMany(TagPost::className(), ['post_id' => 'id']);
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

    public static function cutStr($str, $length=100, $postfix='...')
    {
        if ( strlen($str) < $length)
            return $str;
        $temp = substr($str, 0, $length);
        return substr($temp, 0, strrpos($temp, ' ') ) . $postfix;
    }
    public function getUrl()
    {
        return Yii::$app->urlManager->createUrl('post/view');
    }

    public static function saveBreadCrumb($value)
    {
        $session = Yii::$app->session;
        $session['BreadCrumb']=$value;
    }

    public static function loadBreadCrumb()
    {
        $session = Yii::$app->session;
        return isset($session['BreadCrumb']) ? $session['BreadCrumb'] : null;
    }


    public function viewedCounter()
    {
        $this->viewed = $this->viewed+1;
//        return
        $this->updateAttributes(['viewed']);
//        save(false);
    }

    /**
     * @return int
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

    /* ============   Tag    =========================== */

    /**
     * @return ActiveQuery
     * возвращать тэги, закреплённые за постом*
     * @return ActiveQuery
     **/
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

    /* ============== end Tag =========================
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
     * @return Posts
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

        parent::afterDelete();

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
    public function beforeSave($insert)
    {
        preg_match('/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?(jpg|png|gif|jpeg)/',
            $this->image_url, $matches);
        $this->image_url = $matches[0];
        return parent::beforeSave($insert);
    }


    /**
     * Опубликован ли пост.
     * @return bool
     */
    protected function isPublished()
    {
        return $this->status === self::STATUS_PUBLISHED;
    }

    protected  static $empty_promt ='';


    public function setEmptyPromt($promt){
        self::$empty_promt=$promt;
    }

    public function  getEmptyPromt(){
        return self::$empty_promt;
    }

}
