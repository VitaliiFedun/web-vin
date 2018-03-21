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

//use common\models\User;
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
 * @property string $image_url
 *
 * @property User $author
 * @property Categories $category
 * @property Comments $comments

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


    public static $statuses = [

        self::STATUS_DRAFT => 'draft',
        self::STATUS_PUBLISHED => 'published',
        self::STATUS_ARCHIVES => 'archives',
        self::STATUS_Pending_Approval => 'pending_approval',

    ];

//    public static $category_url = ['title'=>'','url'=>'','id'=>0];
//    public static $tag_url = ['title'=>'test','url'=>'','id'=>0];




//    private $_oldTags;
    /**
     * Список тэгов, закреплённых за постом.
     * @var array
     */
    protected $tags = [];
    /**
     * @return string the URL that shows the detail of the post
     */
    public static function cutStr($str, $length=100, $postfix='...')
    {
        if ( strlen($str) < $length)
            return $str;
        $temp = substr($str, 0, $length);
        return substr($temp, 0, strrpos($temp, ' ') ) . $postfix;
    }
    public static function getRealIP()
    {
//        if (!empty($_SERVER['HTTP_CLIENT_IP']))
//            $ip = $_SERVER['HTTP_CLIENT_IP'];
//        elseif ( !empty($_SERVER['HTTP_X_FORWARDED_FOR']) )
//            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
//        else
//            $ip = $_SERVER['REMOTE_ADDR'];
//        return $ip;

//        $ipaddress = '';
        if (getenv('HTTP_CLIENT_IP'))
            $ipaddress = getenv('HTTP_CLIENT_IP');
        else if(getenv('HTTP_X_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
        else if(getenv('HTTP_X_FORWARDED'))
            $ipaddress = getenv('HTTP_X_FORWARDED');
        else if(getenv('HTTP_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_FORWARDED_FOR');
        else if(getenv('HTTP_FORWARDED'))
            $ipaddress = getenv('HTTP_FORWARDED');
        else if(getenv('REMOTE_ADDR'))
            $ipaddress = getenv('REMOTE_ADDR');
        else
            $ipaddress = 'UNKNOWN';

        return $ipaddress;

    }

    public function getUrl()
    {
        return Yii::$app->urlManager->createUrl('post/view');
//        , array(
//            'id'=>$this->id,
////            'title'=>$this->title,
//        ));
    }

    public static function saveBreadCrumb($value)
    {
        $session = Yii::$app->session;
        $session['BreadCrumb']=$value;
    }

    public function loadBreadCrumb()
    {
        $session = Yii::$app->session;
        return isset($session['BreadCrumb']) ? $session['BreadCrumb'] : null;
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
            [['content','image_url'], 'string'],
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
            'image_url' => Yii::t('app', 'Image Url'),
        ];
    }
    public function normalizeTags()
    {
//        var_dump($this->tags);
        $this->tags=Tags::array2string(array_unique(Tags::string2array(Tags::array2string($this->tags))));

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
     * @param Comments the comment to be added
     * @return boolean whether the comment is saved successfully
     */
    public function addComment(Comments $comment)
    {
        if(Yii::$app->params['commentNeedApproval'])
            $comment->status=Comments::STATUS_MODERATE; /*STATUS_PENDING;*/
        else
            $comment->status=Comments::STATUS_PUBLISHED; /*STATUS_APPROVED;*/
        $comment->post_id=$this->id;
        return  $comment->save();
    }
public function beforeSave($insert)
{
//    $str = $this->image_url;
//    $links = $str.match(/http:\/\/[^\s\Z]+/i);
   preg_match('/http:\/\/[^\s\Z]+/i',
       $this->image_url, $matches);
    $this->image_url = $matches[0];
//    $this->image_url=$first_link;
    return parent::beforeSave($insert);
}
}
