<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 21.01.2018
 * Time: 11:44
 */
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
Yii::$app->view->registerCssFile('/services/css/ocr.css', ['yii\web\CssAsset']);
//Yii::$app->view->registerCssFile('/services/css/quill.snow.css', ['yii\web\CssAsset']);
//Yii::$app->view->registerCssFile('/services/css/1516071497486.css', ['yii\web\CssAsset']);
//Yii::$app->view->registerCssFile('/services/css/socicon.css', ['yii\web\CssAsset']);

Yii::$app->view->registerJsFile('/services/files/tesseract.js',['yii\web\JsAsset']);
Yii::$app->view->registerJsFile('/services/files/raf.js',['yii\web\JsAsset']);
Yii::$app->view->registerJsFile("/services/files/mouse.js",['yii\web\JsAsset']);
Yii::$app->view->registerJsFile("/services/files/dimensions.js",['yii\web\JsAsset']);
Yii::$app->view->registerJsFile("/services/files/demo.js",['yii\web\JsAsset']);


//$this->registerJsFile('@app/assets/js/script.js', self::POS_READY);
//POS_HEAD: in the head section
//POS_BEGIN: at the beginning of the body section
//POS_END: at the end of the body section
//POS_LOAD: enclosed within jQuery(window).load().
// Note that by using this position, the method will automatically register the jQuery js file.
//POS_READY: enclosed within jQuery(document).ready().
// This is the default value. Note that by using this position,
// the method will automatically register the jQuery js file.


//use yii\bootstrap\Modal;

//Modal::begin([
//    'header'=>'<h4>Login</h4>',
//    'id'=>'login-modal',
//]);
?>

<?php $form = ActiveForm::begin([
    'id' => 'ocr-form',
//    'enableAjaxValidation' => true,
//    'action' => ['site/ajax-login']
]);


?>



    <body ondragover="return false">

    <script>



        function recognizeFile(file) {

            document.querySelector("#log").innerHTML = ''
            document.getElementById('button-clear-all').style.display = 'none'
            Tesseract.recognize(file, {
                lang: document.querySelector('#langsel').value
            })
                .progress(function (packet) {
                    console.info(packet)
                    progressUpdate(packet)

                })
                .then(function (data) {
                    console.log(data)
                    progressUpdate({status: 'done', data: data})
                })
        }
        function setupurl(file_param) {

            var reader = new FileReader();
//        Tesseract.recognize(file_param, language)
//            .progress( progressUpdate )
//            .then( result );
            reader.onload = function(e){
                input.src = e.target.result;
                input.onload = function(){

                    setUp();

                }
            }
            reader.readAsDataURL(file_param);
        }

        function recognized(){
            //TO DO
//            document.querySelector('#langsel').value = "null";
//            return;



            var filename = input.src;
            recognizeFile(filename);
//        input.src = e.target.result;
        }
        function modeimage () {
            alert("TO DO function")

        }

        function ClearAll() {
            document.getElementById('button-clear-all').style.display = 'none'
            ClearLog();
        }
    </script>

    <div  class="ocrmenu_conteiner" >
        <div class="flex-container" >
            <div class="flex-item item-select-language">
                <p>
                    Select language:
                </p>
            </div>
            <div class="flex-item item-language">
<!--            <div class="input-select chrome langdd mt--1">-->
                <select id="langsel" title="Select language:">
                    <option value='null' >  </option>
                    <option value='afr'> Afrikaans</option>
                    <option value='ara'> Arabic</option>
                    <option value='aze'> Azerbaijani</option>
                    <option value='bel'> Belarusian</option>
                    <option value='ben'> Bengali</option>
                    <option value='bul'> Bulgarian</option>
                    <option value='cat'> Catalan</option>
                    <option value='ces'> Czech</option>
                    <option value='chi_sim'> Chinese</option>
                    <option value='chi_tra'> Traditional Chinese</option>
                    <option value='chr'> Cherokee</option>
                    <option value='dan'> Danish</option>
                    <option value='deu'> German</option>
                    <option value='ell'> Greek</option>
                    <option value='eng' selected> English</option>
                    <option value='enm'> English (Old)</option>
                    <option value='meme'> Internet Meme</option>
                    <option value='epo'> Esperanto</option>
                    <option value='epo_alt'> Esperanto alternative</option>
                    <option value='equ'> Math</option>
                    <option value='est'> Estonian</option>
                    <option value='eus'> Basque</option>
                    <option value='fin'> Finnish</option>
                    <option value='fra'> French</option>
                    <option value='frk'> Frankish</option>
                    <option value='frm'> French (Old)</option>
                    <option value='glg'> Galician</option>
                    <option value='grc'> Ancient Greek</option>
                    <option value='heb'> Hebrew</option>
                    <option value='hin'> Hindi</option>
                    <option value='hrv'> Croatian</option>
                    <option value='hun'> Hungarian</option>
                    <option value='ind'> Indonesian</option>
                    <option value='isl'> Icelandic</option>
                    <option value='ita'> Italian</option>
                    <option value='ita_old'> Italian (Old)</option>
                    <option value='jpn'> Japanese</option>
                    <option value='kan'> Kannada</option>
                    <option value='kor'> Korean</option>
                    <option value='lav'> Latvian</option>
                    <option value='lit'> Lithuanian</option>
                    <option value='mal'> Malayalam</option>
                    <option value='mkd'> Macedonian</option>
                    <option value='mlt'> Maltese</option>
                    <option value='msa'> Malay</option>
                    <option value='nld'> Dutch</option>
                    <option value='nor'> Norwegian</option>
                    <option value='pol'> Polish</option>
                    <option value='por'> Portuguese</option>
                    <option value='ron'> Romanian</option>
                    <option value='rus'> Russian</option>
                    <option value='slk'> Slovakian</option>
                    <option value='slv'> Slovenian</option>
                    <option value='spa'> Spanish</option>
                    <option value='spa_old'> Old Spanish</option>
                    <option value='sqi'> Albanian</option>
                    <option value='srp'> Serbian (Latin)</option>
                    <option value='swa'> Swahili</option>
                    <option value='swe'> Swedish</option>
                    <option value='tam'> Tamil</option>
                    <option value='tel'> Telugu</option>
                    <option value='tgl'> Tagalog</option>
                    <option value='tha'> Thai</option>
                    <option value='tur'> Turkish</option>
                    <option value='ukr'> Ukrainian</option>
                    <option value='vie'> Vietnamese</option>
                </select>
            </div>
            <!--          </div>-->
            <div class="flex-item item-file" >
                <input type="file"
                 onchange="setupurl(window.lastFile=this.files[0])"/>
            </div>
            <div class="flex-item">
                <input type="button"  value="Mode Image" onclick="modeimage()"/>
            </div>
            <div class="flex-item caption-text">
                <input type="button"  value="Recognize" onclick="recognized()"/>
            </div>
            <div id="button-clear-all" class="flex-item" style="display: none">
                <input type="button"  value="Clear All" onclick="ClearAll()"/>
            </div>


        </div>
    </div>  <!-- class="ocrmenu_conteiner"-->

    <div class="demo-content_conteiner">

        <div id="demo-content">

            <div id="input-overlay-border" >
                <canvas id="input-overlay" width="1486" height="68"></canvas>
                <img id="input" src="http://web-vin/services/images/addempty.png">
            </div>
            <div id="arrow"></div>
            <div>
                <div id="text-log" style="border: 2px solid #4537cc;">
                </div>

                <div id="log" style="height: 372px;">
                    <div>
<!--                        <pre></pre>-->
                    </div>
                </div>
<!--                <div id="demo-instructions" style="display: none">-->
<!--                </div>-->

            </div>
        </div>



    </div>


<?//= ItemButtonWidget::widget([]) ?>

<?php

ActiveForm::end();
//Modal::end();