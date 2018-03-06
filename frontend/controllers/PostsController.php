<?php

namespace frontend\controllers;

use common\models\Categories;
use common\models\Comments;
//use app\models\TagPost;
use common\models\Tags;
use common\models\User;
use Yii;
use common\models\Posts;
//use app\models\PostsSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\helpers\ArrayHelper;
use frontend\models\CommentForm;
use yii\helpers\Url;




/**
 * PostsController implements the CRUD actions for Posts model.
 */
class PostsController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Posts models.
     * @return mixed
     */
//    public function actionIndex()
//    {
//        $searchModel = new PostsSearch();
//        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
//
//        return $this->render('index', [
//            'searchModel' => $searchModel,
//            'dataProvider' => $dataProvider,
//        ]);
//    }

    public function actionIndex()
    {
        $criteria=new CDbCriteria(array(
            'condition'=>'status='.Post::STATUS_PUBLISHED,
            'order'=>'update_time DESC',
            'with'=>'commentCount',
        ));
        if(isset($_GET['tag']))
            $criteria->addSearchCondition('tags',$_GET['tag']);

        $dataProvider=new CActiveDataProvider('Post', array(
            'pagination'=>array(
                'pageSize'=>Yii::app()->params['postsPerPage'],
            ),
            'criteria'=>$criteria,
        ));

        $this->render('index',array(
            'dataProvider'=>$dataProvider,
        ));
    }



//    public function actionIndex()
//    {
//        $post = new Posts();
//        $category = new Categories();
//
//        $posts = $post->getPublishedPosts();
//        $posts->setPagination([
//            'pageSize' => Yii::$app->params['pageSize']
//        ]);
//
//        return $this->render('index', [
//            'posts' => $posts,
//            'categories' => $category->getCategories()
//        ]);
//    }



    /**
     * Displays a single Posts model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
            'commentForm' => new CommentForm(Url::to(['comments/add', 'id' => $id])),

        ]);
    }

    /**
     * Creates a new Posts model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Posts();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
                'category' => Categories::find()->all(),
                'tags' => Tags::find()->all(),
                'authors' => User::find()->all()
            ]);
        }
    }

    /**
     * Updates an existing Posts model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
            'category' => Categories::find()->all(),
            'tags' => Tags::find()->all(),
            'authors' => User::find()->all(),
            'comments' => Comments::find()->all(),
        ]);
    }

    /*
     * Deletes an existing Posts model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
//    public function actionDelete($id)
//    {
//        $this->findModel($id)->delete();
//
//
//        return $this->redirect(['index']);
//    }
    public function actionDelete($id=NULL)
    {
        if ($id === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
//            Yii::$app->getResponse()->redirect(array('site/index'));
            return $this->redirect(['index']);
        }

//        $post = Posts::find($id);
        $post = $this->findModel($id);

        if ($post === NULL)
        {
            Yii::$app->session->setFlash('PostDeletedError');
//            Yii::$app->getResponse()->redirect(array('site/index'));
            return $this->redirect(['index']);
        }

        $post->delete();
        Comments::deleteAll('post_id='.$id);
        Tags::updateFrequency($this->tags, '');

        Yii::$app->session->setFlash('PostDeleted');
//        Yii::$app->getResponse()->redirect(array('site/index'));
        return $this->redirect(['index']);
    }



    /**
     * Finds the Posts model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Posts the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Posts::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
