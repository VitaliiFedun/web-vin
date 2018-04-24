<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 23.01.2018
 * Time: 10:55
 */


Yii::$app->view->registerCssFile('/services/css/css.css', ['yii\web\CssAsset']);

Yii::$app->view->registerCssFile('/services/css/quill.snow.css', ['yii\web\CssAsset']);
Yii::$app->view->registerCssFile('/services/css/1516071497486.css', ['yii\web\CssAsset']);
Yii::$app->view->registerCssFile('/services/css/socicon.css', ['yii\web\CssAsset']);

Yii::$app->view->registerJsFile('/services/files/1516071497486.js',['yii\web\JsAsset']);
Yii::$app->view->registerJsFile('/services/files/quill.min.js',['yii\web\JsAsset']);

use yii\helpers\Html;
?>


<?php
$this->title = Yii::t('app','Audio Notepad');
$this->params['breadcrumbs'][] = [
'label' => Yii::t('app','On-line services'), // название ссылки
'url' => ['/services/index'] // сама ссылка
];
$this->params['breadcrumbs'][] = $this->title

?>





<div id="content">
    <div class="main-container">
        <section class="switchable switchable--switch bg--primary space--sm">
            <div class="container">
                <div class="row" id="dictation">
                    <div class="col-lg-7 col-md-8 col-sm-8 col-xs-12">
                        <div class="notepad">
                            <div id="toolbar" class="hidden-xs ql-toolbar ql-snow">
                              <span class="ql-formats">
                                <button class="ql-bold" type="button">
                                    <svg viewBox="0 0 18 18">
                                        <path class="ql-stroke"
                                              d="M5,4H9.5A2.5,2.5,0,0,1,12,
                                          6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,
                                          0,0,0,1,5,9V4A0,0,0,0,1,5,4Z">
                                    </path>
                                    <path class="ql-stroke" d="M5,9h5.5A2.5,
                                        2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,
                                        14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z">
                                    </path>
                                </svg>
                                </button>
                                  <button class="ql-italic" type="button">
                                <svg viewBox="0 0 18 18">
                                <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4">

                                </line>
                                    <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14">
                                    </line>
                                    <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4">

                                    </line>
                                </svg>
                                  </button>
                                  <button class="ql-underline" type="button">
                                      <svg viewBox="0 0 18 18">
                                          <path class="ql-stroke"
                                                d="M5,3V9a4.012,4.012,0,0,0,4,
                                                4H9a4.012,4.012,0,0,0,4-4V3">
                                          </path>  <rect class="ql-fill"
                                                         height="1"
                                                         rx="0.5"
                                                         ry="0.5"
                                                         width="12"
                                                         x="3"
                                                         y="15">
                                      </rect>
                                      </svg>
                                  </button>
                              </span>

                                <span class="ql-formats" style="display: none">
                                    <span class="ql-color ql-picker ql-color-picker">
                                        <span class="ql-picker-label">
                                         <svg viewBox="0 0 18 18">
                                              <line class="ql-color-label ql-stroke ql-transparent"
                                                    x1="3"
                                                    x2="15"
                                                    y1="15"
                                                    y2="15">
                                                  </line>
                                              <polyline
                                                      class="ql-stroke"
                                                      points="5.5 11 9 3 12.5 11">
                                              </polyline>
                                             <line class="ql-stroke"
                                                   x1="11.63"
                                                   x2="6.38"
                                                   y1="9"
                                                   y2="9">
                                             </line>
                                         </svg>
                                    </span>
                                    <span class="ql-picker-options">
                                        <span class="ql-picker-item ql-primary ql-selected"> </span>
                                            <span class="ql-picker-item ql-primary" data-value="#e60000"  style="background-color: rgb(230, 0, 0);"> </span>
                                            <span class="ql-picker-item ql-primary" data-value="#ff9900"  style="background-color: rgb(255, 153, 0);"> </span>
                                            <span class="ql-picker-item ql-primary" data-value="#ffff00"  style="background-color: rgb(255, 255, 0);"> </span>
                                            <span class="ql-picker-item ql-primary" data-value="#008a00"  style="background-color: rgb(0, 138, 0);"> </span>
                                            <span class="ql-picker-item ql-primary" data-value="#0066cc"  </span>
                                            <span class="ql-picker-item ql-primary" data-value="#9933ff" style="background-color: rgb(153, 51, 255);"> </span>
                                            <span class="ql-picker-item" data-value="#ffffff" style="background-color: rgb(255, 255, 255);"> </span>
                                            <span class="ql-picker-item" data-value="#facccc" style="background-color: rgb(250, 204, 204);"> </span>
                                            <span class="ql-picker-item" data-value="#ffebcc" style="background-color: rgb(255, 235, 204);"></span>
                                            <span class="ql-picker-item" data-value="#ffffcc" style="background-color: rgb(255, 255, 204);"></span>
                                            <span class="ql-picker-item" data-value="#cce8cc" style="background-color: rgb(204, 232, 204);"></span>
                                            <span class="ql-picker-item" data-value="#cce0f5" style="background-color: rgb(204, 224, 245);"> </span>
                                            <span class="ql-picker-item" data-value="#ebd6ff" style="background-color: rgb(235, 214, 255);"></span>
                                            <span class="ql-picker-item" data-value="#bbbbbb" style="background-color: rgb(187, 187, 187);"> </span>
                                            <span class="ql-picker-item" data-value="#f06666" style="background-color: rgb(240, 102, 102);"> </span>
                                            <span class="ql-picker-item" data-value="#ffc266" style="background-color: rgb(255, 194, 102);"></span>
                                            <span class="ql-picker-item" data-value="#ffff66" style="background-color: rgb(255, 255, 102);"></span>
                                            <span class="ql-picker-item" data-value="#66b966" style="background-color: rgb(102, 185, 102);"></span>
                                            <span class="ql-picker-item" data-value="#66a3e0" style="background-color: rgb(102, 163, 224);"></span>
                                            <span class="ql-picker-item" data-value="#c285ff" style="background-color: rgb(194, 133, 255);"></span>
                                            <span class="ql-picker-item" data-value="#888888" style="background-color: rgb(136, 136, 136);"></span>
                                            <span class="ql-picker-item" data-value="#a10000" style="background-color: rgb(161, 0, 0);"></span>
                                            <span class="ql-picker-item" data-value="#b26b00" style="background-color: rgb(178, 107, 0);"></span>
                                            <span class="ql-picker-item" data-value="#b2b200" style="background-color: rgb(178, 178, 0);"></span>
                                            <span class="ql-picker-item" data-value="#006100" style="background-color: rgb(0, 97, 0);"></span>
                                            <span class="ql-picker-item" data-value="#0047b2" style="background-color: rgb(0, 71, 178);"></span>
                                            <span class="ql-picker-item" data-value="#6b24b2" style="background-color: rgb(107, 36, 178);"></span>
                                            <span class="ql-picker-item" data-value="#444444" style="background-color: rgb(68, 68, 68);"></span>
                                            <span class="ql-picker-item" data-value="#5c0000" style="background-color: rgb(92, 0, 0);"></span>
                                            <span class="ql-picker-item" data-value="#663d00" style="background-color: rgb(102, 61, 0);"></span>
                                            <span class="ql-picker-item" data-value="#666600" style="background-color: rgb(102, 102, 0);"></span>
                                            <span class="ql-picker-item" data-value="#003700" style="background-color: rgb(0, 55, 0);"></span>
                                            <span class="ql-picker-item" data-value="#002966" style="background-color: rgb(0, 41, 102);"></span>
                                            <span class="ql-picker-item" data-value="#3d1466" style="background-color: rgb(61, 20, 102);"></span>
                                        </span>
                                    </span>
                                <select class="ql-color"  style="display: none;">
                                    <option selected="selected"></option>
                                    <option value="#e60000"></option>
                                    <option value="#ff9900"></option>
                                    <option value="#ffff00"></option>
                                    <option value="#008a00"></option>
                                    <option value="#0066cc"></option>
                                    <option value="#9933ff"></option>
                                    <option value="#ffffff"></option>
                                    <option value="#facccc"></option>
                                    <option value="#ffebcc"></option>
                                    <option value="#ffffcc"></option>
                                    <option value="#cce8cc"></option>
                                    <option value="#cce0f5"></option>
                                    <option value="#ebd6ff"></option>
                                    <option value="#bbbbbb"></option>
                                    <option value="#f06666"></option>
                                    <option value="#ffc266"></option>
                                    <option value="#ffff66"></option>
                                    <option value="#66b966"></option>
                                    <option value="#66a3e0"></option>
                                    <option value="#c285ff"></option>
                                    <option value="#888888"></option>
                                    <option value="#a10000"></option>
                                    <option value="#b26b00"></option>
                                    <option value="#b2b200"></option>
                                    <option value="#006100"></option>
                                    <option value="#0047b2"></option>
                                    <option value="#6b24b2"></option>
                                    <option value="#444444"></option>
                                    <option value="#5c0000"></option>
                                    <option value="#663d00"></option>
                                    <option value="#666600"></option>
                                    <option value="#003700"></option>
                                    <option value="#002966"></option>
                                    <option value="#3d1466"></option>
                                </select>
                                <span class="ql-background ql-picker ql-color-picker"  style="display: none;">
                                        <span class="ql-picker-label">
                                            <svg viewBox="0 0 18 18">
                                                <g class="ql-fill ql-color-label">
                                                    <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon>
                                                    <rect height="1" width="1" x="4" y="4"></rect>
                                                    <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"> </polygon>
                                                    <rect height="1" width="1" x="2" y="6"> </rect>
                                                    <rect height="1" width="1" x="3" y="5"> </rect>
                                                    <rect height="1" width="1" x="4" y="7"> </rect>
                                                    <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"> </polygon>
                                                    <rect height="1" width="1" x="2" y="12"> </rect>
                                                    <rect height="1" width="1" x="2" y="9"> </rect>
                                                    <rect height="1" width="1" x="2" y="15"></rect>
                                                    <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon>
                                                    <rect height="1" width="1" x="3" y="8"></rect>
                                                    <path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"> </path>
                                                    <path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"> </path>
                                                    <path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"> </path>
                                                    <rect height="1" width="1" x="12" y="2"> </rect>
                                                    <rect height="1" width="1" x="11" y="3"> </rect>
                                                    <path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"> </path>
                                                    <rect height="1" width="1" x="2" y="3"> </rect>
                                                    <rect height="1" width="1" x="6" y="2"> </rect>
                                                    <rect height="1" width="1" x="3" y="2"> </rect>
                                                    <rect height="1" width="1" x="5" y="3"> </rect>
                                                    <rect height="1" width="1" x="9" y="2"> </rect>
                                                    <rect height="1" width="1" x="15" y="14"> </rect>
                                                    <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"> </polygon>
                                                    <rect height="1" width="1" x="13" y="7"> </rect>
                                                    <rect height="1" width="1" x="15" y="5">  </rect>
                                                    <rect height="1" width="1" x="14" y="6"> </rect>
                                                    <rect height="1" width="1" x="15" y="8"> </rect>
                                                    <rect height="1" width="1" x="14" y="9"> </rect>
                                                    <path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"> </path>
                                                    <rect height="1" width="1" x="14" y="3"> </rect>
                                                    <polygon points="12 6.868 12 6 11.62 6 12 6.868"> </polygon>
                                                    <rect height="1" width="1" x="15" y="2"> </rect>
                                                    <rect height="1" width="1" x="12" y="5"> </rect>
                                                    <rect height="1" width="1" x="13" y="4"> </rect>
                                                    <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"> </polygon>
                                                    <rect height="1" width="1" x="9" y="14"> </rect>
                                                    <rect height="1" width="1" x="8" y="15"> </rect>
                                                    <path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"> </path>
                                                    <rect height="1" width="1" x="5" y="15"> </rect>
                                                    <path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"></path>
                                                    <rect height="1" width="1" x="11" y="15"> </rect>
                                                    <path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"> </path>
                                                    <rect height="1" width="1" x="14" y="15"> </rect>
                                                    <rect height="1" width="1" x="15" y="11"> </rect>
                                                    </g>
                                                 <polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"> </polyline>
                                                 <line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"> </line>
                                                </svg>
                                             </span>
                                         <span class="ql-picker-options">
                                             <span class="ql-picker-item ql-primary" data-value="#000000" style="background-color: rgb(0, 0, 0);"> </span>
                                             <span class="ql-picker-item ql-primary" data-value="#e60000" style="background-color: rgb(230, 0, 0);"> </span>
                                             <span class="ql-picker-item ql-primary" data-value="#ff9900" style="background-color: rgb(255, 153, 0);"> </span>
                                             <span class="ql-picker-item ql-primary" data-value="#ffff00" style="background-color: rgb(255, 255, 0);"> </span>
                                             <span class="ql-picker-item ql-primary" data-value="#008a00" style="background-color: rgb(0, 138, 0);"> </span>
                                             <span class="ql-picker-item ql-primary" data-value="#0066cc" style="background-color: rgb(0, 102, 204);"> </span>
                                             <span class="ql-picker-item ql-primary" data-value="#9933ff" style="background-color: rgb(153, 51, 255);"> </span>
                                             <span class="ql-picker-item ql-selected"> </span>
                                             <span class="ql-picker-item" data-value="#facccc" style="background-color: rgb(250, 204, 204);"> </span>
                                             <span class="ql-picker-item" data-value="#ffebcc" style="background-color: rgb(255, 235, 204);"> </span>
                                             <span class="ql-picker-item" data-value="#ffffcc" style="background-color: rgb(255, 255, 204);"> </span>
                                             <span class="ql-picker-item" data-value="#cce8cc" style="background-color: rgb(204, 232, 204);"> </span>
                                             <span class="ql-picker-item" data-value="#cce0f5" style="background-color: rgb(204, 224, 245);"> </span>
                                             <span class="ql-picker-item" data-value="#ebd6ff" style="background-color: rgb(235, 214, 255);"> </span>
                                             <span class="ql-picker-item" data-value="#bbbbbb" style="background-color: rgb(187, 187, 187);"> </span>
                                             <span class="ql-picker-item" data-value="#f06666" style="background-color: rgb(240, 102, 102);"> </span>
                                             <span class="ql-picker-item" data-value="#ffc266" style="background-color: rgb(255, 194, 102);"> </span>
                                             <span class="ql-picker-item" data-value="#ffff66" style="background-color: rgb(255, 255, 102);"> </span>
                                             <span class="ql-picker-item" data-value="#66b966" style="background-color: rgb(102, 185, 102);"> </span>
                                             <span class="ql-picker-item" data-value="#66a3e0" style="background-color: rgb(102, 163, 224);"> </span>
                                             <span class="ql-picker-item" data-value="#c285ff" style="background-color: rgb(194, 133, 255);"> </span>
                                             <span class="ql-picker-item" data-value="#888888" style="background-color: rgb(136, 136, 136);"> </span>
                                             <span class="ql-picker-item" data-value="#a10000" style="background-color: rgb(161, 0, 0);"> </span>
                                             <span class="ql-picker-item" data-value="#b26b00" style="background-color: rgb(178, 107, 0);"> </span>
                                             <span class="ql-picker-item" data-value="#b2b200" style="background-color: rgb(178, 178, 0);"> </span>
                                             <span class="ql-picker-item" data-value="#006100" style="background-color: rgb(0, 97, 0);"></span>
                                             <span class="ql-picker-item" data-value="#0047b2" style="background-color: rgb(0, 71, 178);"></span>
                                             <span class="ql-picker-item" data-value="#6b24b2" style="background-color: rgb(107, 36, 178);"> </span>
                                             <span class="ql-picker-item" data-value="#444444" style="background-color: rgb(68, 68, 68);"> </span>
                                             <span class="ql-picker-item" data-value="#5c0000" style="background-color: rgb(92, 0, 0);"> </span>
                                             <span class="ql-picker-item" data-value="#663d00" style="background-color: rgb(102, 61, 0);"> </span>
                                             <span class="ql-picker-item" data-value="#666600" style="background-color: rgb(102, 102, 0);"> </span>
                                             <span class="ql-picker-item" data-value="#003700" style="background-color: rgb(0, 55, 0);"> </span>
                                             <span class="ql-picker-item" data-value="#002966" style="background-color: rgb(0, 41, 102);"> </span>
                                             <span class="ql-picker-item" data-value="#3d1466" style="background-color: rgb(61, 20, 102);"> </span>
                                         </span>
                                        </span>
                                <select class="ql-background" style="display: none;">
                                    <option value="#000000"> </option>
                                    <option value="#e60000"> </option>
                                    <option value="#ff9900"> </option>
                                    <option value="#ffff00"> </option>
                                    <option value="#008a00"> </option>
                                    <option value="#0066cc"> </option>
                                    <option value="#9933ff"> </option>
                                    <option selected="selected"> </option>
                                    <option value="#facccc"> </option>
                                    <option value="#ffebcc"> </option>
                                    <option value="#ffffcc"> </option>
                                    <option value="#cce8cc"> </option>
                                    <option value="#cce0f5"> </option>
                                    <option value="#ebd6ff"> </option>
                                    <option value="#bbbbbb"> </option>
                                    <option value="#f06666"> </option>
                                    <option value="#ffc266"> </option>
                                    <option value="#ffff66"> </option>
                                    <option value="#66b966"> </option>
                                    <option value="#66a3e0"> </option>
                                    <option value="#c285ff"> </option>
                                    <option value="#888888"> </option>
                                    <option value="#a10000"> </option>
                                    <option value="#b26b00"> </option>
                                    <option value="#b2b200"> </option>
                                    <option value="#006100"> </option>
                                    <option value="#0047b2"> </option>
                                    <option value="#6b24b2"> </option>
                                    <option value="#444444"> </option>
                                    <option value="#5c0000"> </option>
                                    <option value="#663d00"> </option>
                                    <option value="#666600"> </option>
                                    <option value="#003700"> </option>
                                    <option value="#002966"></option>
                                    <option value="#3d1466"> </option>
                                </select>
                                <span class="ql-align ql-picker ql-icon-picker"  style="display: none;">
                                 <span class="ql-picker-label">
                                     <svg viewBox="0 0 18 18">
                                         <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"> </line>
                                         <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"> </line>
                                         <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"> </line>
                                     </svg>
                                 </span>
                                 <span class="ql-picker-options">
                                     <span class="ql-picker-item ql-selected">
                                         <svg viewBox="0 0 18 18">
                                             <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"> </line>
                                             <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"> </line>
                                             <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"> </line>
                                         </svg>
                                     </span>
                                     <span class="ql-picker-item" data-value="center">
                                         <svg viewBox="0 0 18 18">
                                             <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"> </line>
                                             <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
                                             <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"> </line>
                                         </svg>
                                     </span>
                                     <span class="ql-picker-item" data-value="right">
                                         <svg viewBox="0 0 18 18">
                                             <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"> </line>
                                             <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"> </line>
                                             <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"> </line>
                                         </svg>
                                     </span>
                                     <span class="ql-picker-item" data-value="justify">
                                         <svg viewBox="0 0 18 18">
                                             <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
                                              <line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"></line>
                                              <line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"></line>
                                         </svg>
                                     </span>
                                 </span>
                             </span>
                                <select class="ql-align" style="display: none;">
                                    <option selected="selected"> </option>
                                    <option value="center"> </option>
                                    <option value="right"> </option>
                                    <option value="justify"> </option>
                                </select> </span>
                                <span class="ql-formats hidden-xs">
                                        <button class="ql-list" value="ordered" type="button">
                                            <svg viewBox="0 0 18 18">
                                                 <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"> </line>
                                                 <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"> </line>
                                                 <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"> </line>
                                                 <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"> </line>
                                                 <path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path>
                                                 <path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"> </path>
                                                 <path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"> </path>
                                            </svg>
                                        </button>
                                        <button class="ql-list" value="bullet" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"> </line>
                                                <line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"> </line>
                                                <line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"> </line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"> </line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"> </line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"> </line>
                                            </svg>
                                        </button>
                                        <button class="ql-indent" value="-1" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"> </line>
                                                <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"> </line>
                                                <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"> </line>
                                                <polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"> </polyline>
                                            </svg>
                                        </button>
                                        <button class="ql-indent" value="+1" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"> </line>
                                                <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"> </line>
                                                <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"> </line>
                                                <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"> </polyline>
                                            </svg>
                                        </button>
                                    </span>
                                <span class="ql-formats">
                                    <button class="ql-direction" value="rtl" type="button">
                                        <svg viewBox="0 0 18 18">
                                            <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"> </polygon>
                                            <line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"> </line>
                                            <path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"> </path>
                                            <rect class="ql-fill" height="11" width="1" x="11" y="4"> </rect>
                                            <rect class="ql-fill" height="11" width="1" x="13" y="4"> </rect>
                                        </svg>
                                        <svg viewBox="0 0 18 18">
                                            <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"> </polygon>
                                            <line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"> </line>
                                            <path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"> </path>
                                            <rect class="ql-fill" height="11" width="1" x="5" y="4"> </rect>
                                            <rect class="ql-fill" height="11" width="1" x="7" y="4"> </rect>
                                        </svg>
                                    </button>
                                    <button class="ql-clean" type="button">
                                        <svg class="" viewBox="0 0 18 18">
                                            <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"> </line>
                                            <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"> </line>
                                            <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"> </line>
                                            <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"> </line>
                                            <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"> </rect>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <div id="speech" class="ql-container ql-snow">
                                <div class="qlits-editor"
                                     data-gramm="false"
                                     contenteditable="true">
                                    <p>Привіт То є проба</p>
                                </div>
                                <div class="ql-clipboard" contenteditable="true" tabindex="-1">
                                </div>
                                                                <div class="ql-tooltip ql-hidden">
                                                                    <a class="ql-preview" target="_blank" href="about:blank">
                                                                    </a>
                                                                    <input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">
                                                                    <a class="ql-action">
                                                                    </a>
                                                                    <a class="ql-remove">
                                                                    </a>
                                                                </div>
                            </div>


                            <div class="action-buttons">
                                <div class="left chrome">
                                    <a href="https://dictation.io/speech#"
                                       class="btn-mic btn btn--primary-1">
                                        <span class="btn__text listen">Start</span>
                                        <div class="loading-indicator hide">
                                        </div>
                                    </a>
                                </div>
                                <div class="right btn-group">
                                    <a data-tooltip="Copy text to Clipboard"
                                       href="https://dictation.io/speech#"
                                       class="btn btn--sm btn--primary btn-clipboard">
                                        <span class="btn__text btn__copy">Copy</span>
                                    </a>
                                    <a data-tooltip="Download File as Plain Text"
                                       href="https://dictation.io/speech#"
                                       onclick="dictation('save');
                                       return false;"
                                       class="btn btn--sm btn-save btn--primary">
                                        <span class="btn__text">Save</span>
                                    </a>
                                    <a data-tooltip="Email This"
                                       target="_blank"
                                       href="mailto:?body="
                                       onclick="dictation('mail')"
                                       class="btn btn--sm btn-clear btn--primary btn-mail">
                                        <span class="btn__text">Email</span>
                                    </a>
                                    <a data-tooltip="Save as PDF, or Print"
                                       href="https://dictation.io/speech#"
                                       onclick="dictation('print');
                                       return false;"
                                       class="btn btn--sm btn-clear btn--primary">
                                        <span class="btn__text">Print</span>
                                    </a>
                                    <a data-tooltip="Clear Dictation Notepad"
                                       href="https://dictation.io/speech#"
                                       onclick="dictation('clear');
                                       return false;"
                                       class="btn btn--sm btn-clear btn--primary">
                                        <span class="btn__text">Clear</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-offset-1 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ins class="adsbygoogle"
                             style="display: block;
                             min-width:300px;
                             max-width:360px"
                             data-ad-format="fluid"
                             data-ad-layout="in-article"
                             data-ad-client="ca-pub-3152670624293746"
                             data-ad-slot="2661515976">
                        </ins>
                        <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
                        <div class="input-select chrome langdd mt--1">
                            <select name="lang" id="lang" onchange="dictation('lang')">
                                <option value=""   selected="selected"
                                        disabled="disabled">Choose your Language
                                </option>
                                <option value="af-za">Afrikaans</option>
                                <option value="az-az">Azərbaycan</option>
                                <option value="id-id">Bahasa Indonesia</option>
                                <option value="ms-my">Bahasa Melayu</option>
                                <option value="jv-id">Basa Jawa</option>
                                <option value="su-id">Basa Sunda</option>
                                <option value="ca-es">Català</option>
                                <option value="cs-cz">Čeština</option>
                                <option value="da-dk">Dansk</option>
                                <option value="de-de">Deutsch</option>
                                <option value="en-au">English (Australia)</option>
                                <option value="en-ca">English (Canada)</option>
                                <option value="en-gh">English (Ghana)</option>
                                <option value="en-in">English (India)</option>
                                <option value="en-ie">English (Ireland)</option>
                                <option value="en-ke">English (Kenya)</option>
                                <option value="en-nz">English (New Zealand)</option>
                                <option value="en-ng">English (Nigeria)</option>
                                <option value="en-ph">English (Philippines)</option>
                                <option value="en-za">English (South Africa)</option>
                                <option value="en-tz">English (Tanzania)</option>
                                <option value="en-gb">English (United Kingdom)</option>
                                <option value="en-us">English (United States)</option>
                                <option value="es-mx">Español</option>
                                <option value="es-ar">Español (Argentina)</option>
                                <option value="es-bo">Español (Bolivia)</option>
                                <option value="es-cl">Español (Chile)</option>
                                <option value="es-co">Español (Colombia)</option>
                                <option value="es-cr">Español (Costa Rica)</option>
                                <option value="es-ec">Español (Ecuador)</option>
                                <option value="es-sv">Español (El Salvador)</option>
                                <option value="es-es">Español (España)</option>
                                <option value="es-us">Español (Estados Unidos)</option>
                                <option value="es-gt">Español (Guatemala)</option>
                                <option value="es-hn">Español (Honduras)</option>
                                <option value="es-419">Español (Latinoamérica)</option>
                                <option value="es-mx">Español (México)</option>
                                <option value="es-ni">Español (Nicaragua)</option>
                                <option value="es-pa">Español (Panamá)</option>
                                <option value="es-py">Español (Paraguay)</option>
                                <option value="es-pe">Español (Perú)</option>
                                <option value="es-pr">Español (Puerto Rico)</option>
                                <option value="es-do">Español (República Dominicana)</option>
                                <option value="es-uy">Español (Uruguay)</option>
                                <option value="es-ve">Español (Venezuela)</option>
                                <option value="eu-es">Euskara</option>
                                <option value="fil-ph">Filipino</option>
                                <option value="fr-fr">Français</option>
                                <option value="gl-es">Galego</option>
                                <option value="hr-hr">Hrvatski</option>
                                <option value="zu-za">Isizulu</option>
                                <option value="is-is">Íslenska</option>
                                <option value="it-it">Italiano</option>
                                <option value="it-it">Italiano (Italia)</option>
                                <option value="it-ch">Italiano (Svizzera)</option>
                                <option value="sw-ke">Kiswahili (Kenya)</option>
                                <option value="sw-tz">Kiswahili (Tanzania)</option>
                                <option value="lv-lv">Latviešu</option>
                                <option value="lt-lt">Lietuvių</option>
                                <option value="hu-hu">Magyar</option>
                                <option value="nl-nl">Nederlands</option>
                                <option value="nb-no">Norsk (Bokmål)</option>
                                <option value="pl-pl">Polski</option>
                                <option value="pt-br">Português (Brasil)</option>
                                <option value="pt-pt">Português (Portugal)</option>
                                <option value="ro-ro">Română</option>
                                <option value="sk-sk">Slovenčina</option>
                                <option value="sl-si">Slovenščina</option>
                                <option value="fi-fi">Suomi</option>
                                <option value="sv-se">Svenska</option>
                                <option value="vi-vn">Tiếng Việt</option>
                                <option value="tr-tr">Türkçe</option>
                                <option value="el-gr">Ελληνικά</option>
                                <option value="bg-bg">Български</option>
                                <option value="ru-ru">Русский</option>
                                <option value="sr-rs">Српски</option>
                                <option value="uk-ua">Українська</option>
                                <option value="hy-am">հայերեն</option>
                                <option value="he-il">עברית</option>
                                <option value="ur-in">(اردو (بھارت</option>
                                <option value="ur-pk">(اردو (پاکستان</option>
                                <option value="ar-x-gulf">العربية</option>
                                <option value="ar-il">(العربية (إسرائيل</option>
                                <option value="ar-jo">(العربية (الأردن</option>
                                <option value="ar-ae">(العربية (الإمارات</option>
                                <option value="ar-bh">(العربية (البحرين</option>
                                <option value="ar-dz">(العربية (الجزائر</option>
                                <option value="ar-sa">(العربية (السعودية</option>
                                <option value="ar-kw">(العربية (الكويت</option>
                                <option value="ar-ma">(العربية (المغرب</option>
                                <option value="ar-tn">(العربية (تونس</option>
                                <option value="ar-om">(العربية (عُمان</option>
                                <option value="ar-ps">(العربية (فلسطين</option>
                                <option value="ar-qa">(العربية (قطر</option>
                                <option value="ar-lb">(العربية (لبنان</option>
                                <option value="ar-eg">(العربية (مصر</option>
                                <option value="fa-ir">فارسی</option>
                                <option value="ne-np">नेपाली</option>
                                <option value="mr-in">मराठी</option>
                                <option value="hi-in">हिन्दी</option>
                                <option value="bn-bd">বাংলা (বাংলাদেশ)</option>
                                <option value="bn-in">বাংলা (ভারত)</option>
                                <option value="gu-in">ગુજરાતી</option>
                                <option value="ta-in">தமிழ் (இந்தியா)</option>
                                <option value="ta-lk">தமிழ் (இலங்கை)</option>
                                <option value="ta-sg">தமிழ் (சிங்கப்பூர்)</option>
                                <option value="ta-my">தமிழ் (மலேஷியா)</option>
                                <option value="te-in">తెలుగు</option>
                                <option value="kn-in">ಕನ್ನಡ</option>
                                <option value="ml-in">മലയാളം</option>
                                <option value="si-lk">සිංහල</option>
                                <option value="th-th">ไทย</option>
                                <option value="lo-la">ລາວ</option>
                                <option value="ka-ge">ქართულად</option>
                                <option value="am-et">አማርኛ</option>
                                <option value="km-kh">ខ្មែរ</option>
                                <option value="cmn-hans-cn">中文（中国）</option>
                                <option value="cmn-hant-tw">中文（台灣）</option>
                                <option value="yue-hant-hk">中文（香港）</option>
                                <option value="ja-jp">日本語</option>
                                <option value="ko-kr">한국어</option>
                            </select>
                        </div>
                        <div class="commands">
                        </div>
                        <div class="text-block mt--1">
                            <p class="log">
                                <span>Click the microphone icon and speak</span>
                                <img src="images/mic.svg" class="bars">
                            </p>
                        </div>
                        <div class="text-block mt--2 teaser hidden-xs">
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
    <div class="all-page-modals">
        <div class="modal-container" data-modal-index="0">
            <div class="modal-content">
                <div class="boxed boxed--lg text-center">
                    <h3>Google Chrome Required</h3>
                    <p class="lead">Please open
                        <a href="https://dictation.io/">dictation.io</a>
                        inside
                        <a href="https://www.google.com/chrome/"
                           target="_blank">Google Chrome
                        </a> to use speech recognition.
                    </p>
                    <img src="files/chrome.jpg" alt="Google Chrome">
                </div>
                <div class="modal-close modal-close-cross">
                </div>
            </div>
        </div>
        <div class="modal-container" data-modal-index="1">
            <div class="modal-content">
                <div class="boxed boxed--lg text-center">
                    <h3>Cannot Access Microphone</h3>
                    <p class="lead">Please follow
                        <a href="https://dictation.io/help#mic"
                           target="_blank">this guide
                        </a> for instructions on how to unblock your microphone.
                    </p>
                    <img src="/services/images/unblock-microphone.png" width="604" height="364">
                </div>
                <div class="modal-close modal-close-cross">
                </div>
            </div>
        </div>
        <div class="modal-container" data-modal-index="2">
            <div class="modal-content">
                <div class="boxed boxed--lg text-center">
                    <p class="lead publishing">Dictation is now publishing your note online. Please wait..</p>
                    <p class="lead published hidden">
                    </p>
                </div>
                <div class="modal-close modal-close-cross">
                </div>
            </div>
        </div>
    </div>

