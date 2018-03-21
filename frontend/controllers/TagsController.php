<?php
/**
 * Created by PhpStorm.
 * User: georg
 * Date: 24.06.15
 * Time: 17:30
 */

namespace frontend\controllers;

use common\models\Categories;
use common\models\Tags;
use Yii;
use yii\web\Controller;
use common\models\Posts;

/**
 * Контроллер "Тэги".
 */
class TagsController extends Controller
{
    /*
     * Просмотр списка постов по тегу
     * @param $id
     * @return string
     */
    public function actionView($id)
    {
        $tagModel = new Tags();
        $tag = $tagModel->getTag($id);
        $categoryModel = new Categories();
        
        $posts = $tag->getPublishedPosts();
        $posts->setPagination([
            'pageSize' => Yii::$app->params['pageSize']
        ]);

        return $this->render('view', [
            'tag' => $tag,
            'posts' => $posts,
            'categories' => $categoryModel->getCategories()
        ]);
    }
    public function actionShow($id)
    {
        $tagModel = new Tags();
        $tag = $tagModel->getTag($id);

        $category_url['title'] =Yii::t('app', 'Posts Tagged with') . ': ' .Yii::t('app', $tag->title);
        $category_url['url'] = ['tags/show', 'id' => $tag->id];
        $category_url['id'] =   $tag->id;
        Posts::saveBreadCrumb($category_url);


        $categoryModel = new Categories();

        $posts = $tag->getPublishedPosts();
        $posts->setPagination([
            'pageSize' => Yii::$app->params['pageSize']
        ]);

        return $this->render('index', [
            'tag' => $tag,
            'posts' => $posts,
            'categories' => $categoryModel->getCategories(),
            'tags' => Tags::find()->all(),
        ]);
    }
}
