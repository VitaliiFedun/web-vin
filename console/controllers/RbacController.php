<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 25.02.2018
 * Time: 23:21
 */

namespace console\controllers;
use Yii;
use yii\console\Controller;
/**
 * Инициализатор RBAC выполняется в консоли php yii rbac/init
 */
class RbacController extends Controller {

    public function actionInit() {
        $auth = Yii::$app->authManager;

        $auth->removeAll(); //На всякий случай удаляем старые данные из БД...

        // Создадим роли админа и редактора новостей
        $admin = $auth->createRole('admin');
        $admin -> description = 'Main User';
        $editor = $auth->createRole('editor');
        $editor -> description = 'Manager Posts';

        // запишем их в БД
        $auth->add($admin);
        $auth->add($editor);

        // Создаем наше правило, которое позволит проверить автора новости
        $authorRule = new \common\components\rbac\AuthorRule;

        // Запишем его в БД
        $auth->add($authorRule);

        // Создаем разрешения. Например, просмотр админки viewAdminPage и редактирование новости updateNews
        $viewAdminPage = $auth->createPermission('viewAdminPage');
        $viewAdminPage->description = 'View Admin Page';

        $updatePosts = $auth->createPermission('updatePosts');
        $updatePosts->description = 'Update Posts';

        // Создадим еще новое разрешение «Редактирование собственной новости» и ассоциируем его с правилом AuthorRule
        $updateOwnPosts = $auth->createPermission('updateOwnPosts');
        $updateOwnPosts->description = 'Update Own Posts';

        // Указываем правило AuthorRule для разрешения updateOwnNews.
        $updateOwnPosts->ruleName = $authorRule->name;

        // Запишем все разрешения в БД
        $auth->add($viewAdminPage);
        $auth->add($updatePosts);
        $auth->add($updateOwnPosts);

        // Теперь добавим наследования. Для роли editor мы добавим разрешение updateOwnNews (редактировать собственную новость),
        // а для админа добавим собственные разрешения viewAdminPage и updateNews (может смотреть админку и редактировать любую новость)

        // Роли «Редактор новостей» присваиваем разрешение «Редактирование собственной новости»
        $auth->addChild($editor,$updateOwnPosts);

        // админ имеет собственное разрешение - «Редактирование новости»
        $auth->addChild($admin, $updatePosts);

        // Еще админ имеет собственное разрешение - «Просмотр админки»
        $auth->addChild($admin, $viewAdminPage);

        // Назначаем роль admin пользователю с ID 1
        $auth->assign($admin, 1);

        // Назначаем роль editor пользователю с ID 2
        $auth->assign($editor, 2);
    }
}
