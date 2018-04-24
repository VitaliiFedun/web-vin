<?php
Yii::setAlias('@tests', dirname(__DIR__) . '/tests');
Yii::setAlias('@common', dirname(__DIR__));
Yii::setAlias('@frontend', dirname(dirname(__DIR__)) . '/frontend');
Yii::setAlias('@backend', dirname(dirname(__DIR__)) . '/backend');
Yii::setAlias('@console', dirname(dirname(__DIR__)) . '/console');

//Yii::$container->set('dosamigos\tinymce\TinyMce', [
//    'language' => 'uk',
////    'themes' => "modern",
//    'options' => ['rows' => 20],
//    'clientOptions' => [
//        'plugins' => [
//            'advlist autolink lists link charmap hr preview pagebreak',
//            'searchreplace wordcount textcolor visualblocks visualchars code fullscreen nonbreaking',
//            'save insertdatetime media table contextmenu template paste image responsivefilemanager filemanager',
//        ],
//        'toolbar' => 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | responsivefilemanager link image media',
//        'external_filemanager_path' => '/admin/plugins/responsivefilemanager/filemanager/',
//        'filemanager_title' => 'Responsive Filemanager',
//        'external_plugins' => [
//            'filemanager' => '/admin/plugins/responsivefilemanager/filemanager/plugin.min.js',
//            'responsivefilemanager' => '/admin/plugins/responsivefilemanager/tinymce/plugins/responsivefilemanager/plugin.min.js',
//        ],
//        'relative_urls' => false,
//    ]
//]);