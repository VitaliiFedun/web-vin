<?php

namespace frontend\models;



use yii\base\Model;
//use common\models\User;


/**
 * Signup form
 */
class AudioForm extends Model
{

    public static $audiotext;
    /**
     * @inheritdoc
     */
//
    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function audio()
    {
        return self::$audiotext;
    }
}
