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
//use yii\base\ErrorException;
use yii\filters\VerbFilter;
//use yii\helpers\ArrayHelper;
use common\models\CommentForm;
use yii\helpers\Url;
use yii\web\HttpException;
//use yii\web\ForbiddenHttpException;



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


    public function actionIndex()
    {
        $posts = new Posts();
        $category = new Categories();
        $posts = $posts->getPublishedPosts();

        $category_url = [];
        Posts::saveBreadCrumb($category_url);

        $posts->setPagination([
            'pageSize' => Yii::$app->params['pageSize']
        ]);
        return $this->render('index', [
            'posts' => $posts,
            'categories' => $category->getCategories(),
            'tags' => Tags::find()->all(),
        ]);
    }

    /**
     * Displays a single Posts model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {

        $post=$this->findModel($id);
        $category=$post->getCategory();  //$post->category_id);
        $post->viewedCounter();
        return $this->render('view', [
            'model' => $post, /*$this->findModel($id),*/
            'commentForm' => new CommentForm(Url::to(['comments/add', 'id' => $id])),
            'category' => $category,
            'tags' => new Tags(),
        ]);
    }

    /**
     * Creates a new Posts model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        if (Yii::$app->user->can('createPost'))
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
        else
        {
//            Yii::$app->session->setFlash('error', 'Access denied.');
//            throw new ForbiddenHttpException('Access denied');
            throw new HttpException(403,'Access denied');
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
        if (Yii::$app->user->can('updateOwnNews', ['news' => $id]))
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
        else
        {
            throw new HttpException(403, 'Access denied');
//            throw new ForbiddenHttpException('Access denied');
        }

    }
    /**
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
//        Tags::updateFrequency($this->tags, '');

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
    //для визуального редактора
    public function actions()
    {
        return [

//            . Насколько я вижу, логика такова:
//               загрузил изображение по пути указанному в path,
//               а в редакторе, в src изображения прописал url.
            'images-get' => [  //Добавляем возможность выбирать уже загружённые изображения
                'class' => 'vova07\imperavi\actions\GetImagesAction',
                'url' => 'http://web-vin.com/blog/images', // Directory URL address, where files are stored.
                'path' => '@frontend/web/blog/images', // Or absolute path to directory where files are stored.
                'options' => ['only' => ['*.jpg', '*.jpeg', '*.png', '*.gif', '*.ico']], // These options are by default.

            ],
            'files-get' => [ //Добавляем возможность выбирать уже загружённые файлы
                'class' => 'vova07\imperavi\actions\GetFilesAction',
                'url' => 'http://web-vin.com/blog/images', // Directory URL address, where files are stored.
                'path' => '@frontend/web/blog/images', // Or absolute path to directory where files are stored.
//                'options' => ['only' => ['*.txt', '*.md']], // These options are by default.

            ],
            'file-upload' => [  //Загрузка файла
                'class' => 'vova07\imperavi\actions\UploadFileAction',
                'url' => 'http://web-vin.com/blog/images', // Directory URL address, where files are stored.
                'path' => '@frontend/web/blog/images', // Or absolute path to directory where files are stored.
                'uploadOnlyImage' => false, // For any kind of files uploading.
//                'createDirectory' => true,
//                'createDirectoryMode' => 0777,
//                'createDirectoryRecursive' => true,
            ],


            'image-upload' => [  //Добавляем возможность выбирать уже загружённые изображения
                'class' => 'vova07\imperavi\actions\UploadFileAction',
                'url' => 'http://web-vin.com/blog/images', // Directory URL address, where files are stored.
                'path' => '@frontend/web/blog/images', // Or absolute path to directory where files are stored.

            ],

        ];
    }
}

