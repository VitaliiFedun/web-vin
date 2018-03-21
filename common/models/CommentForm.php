<?php

namespace common\models;

use Yii;
//use common\models\User;
use yii\base\Model;
//use common\models\Comments;
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
 * @property Posts $post
 * @property User $author
 */
class CommentForm extends Model
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
     * @var null|string action формы
     */
    public $action = null;
    /**
     * @var int|null идентификатор родительского комментария
     */
    public $pid = null;
    /**
     * @var string заголовок комментария
     */
    public $title;
    /**
     * @var string контент комментария
     */
    public $content;

    public $publish_status;
    public $post_id;
    public $author_id;
    public $created_at;
    public $updated_at;
    /**
     * @inheritdoc
     */

    public function __construct($action = null)
    {
        $this->action = $action;

        parent::__construct();
    }

/*
* @inheritdoc
*/
    public function rules()
    {
        return [
            [['pid', 'post_id', 'author_id', 'created_at', 'updated_at'], 'integer'],
            [['title', 'content', ], 'required'],
            [['publish_status'], 'string'],
            [['title', 'content'], 'string', 'max' => 255],
//            [['post_id'], 'exist', 'skipOnError' => true, 'targetClass' => Posts::className(), 'targetAttribute' => ['post_id' => 'id']],
//            [['author_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['author_id' => 'id']],
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
    /*
     * Р’РѕР·РІСЂР°С‰Р°РµС‚ РєРѕРјРјРµРЅС‚Р°СЂРёР№.
     * @param int $id РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ
     * @throws NotFoundHttpException
     * @return Comment
     */
    public function save($comment, array $data)
    {
        $tmp = $comment;
        $isLoad = $comment->load([
            'pid' => $data['pid'],
            'title' => $data['title'],
            'content' => $data['content'],
			'publish_status' => $data['publish_status'],
            'post_id' => $data['post_id'],
            'author_id' => $data['author_id'],
            'created_at' => $data['created_at'],
            'updated_at' => $data['updated_at'],
			

        ], '');

        return ($isLoad && $comment->save());
    }
}
