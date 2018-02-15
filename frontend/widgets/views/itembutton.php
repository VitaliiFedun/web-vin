<?php
///frontend/widgets/views/ItemButtonWidget.php:2 * Created by PhpStorm.
/**
 * Created by PhpStorm.
 * User: user
 * Date: 02.02.2018
 * Time: 7:58
 */
///namespace app\components\ frontend\widgets;
?>

<div <!--class="action-buttons "-->>
<!-- <div class="flex-container">-->
<!--    <div class="left chrome flex-item">-->
<!--        <a data-tooltip="Start Process"-->
<!--                href="https://dictation.io/speech#"-->
<!--            class="btn-mic btn btn--primary-1">-->
<!---->
<!--            <span class="btn__text listen">Start</span>-->
<!--            <div class="loading-indicator hide">-->
<!--            </div>-->
<!--        </a>-->
<!--    </div>-->
    <div class="flex-container" >
<!--        <div class="right btn-group flex-item">-->
<!--            <a data-tooltip="Copy text to Clipboard"-->
<!--               href="https://dictation.io/speech#"-->
<!--               class="btn btn--sm btn--primary btn-clipboard flex-item">-->
<!--                <span class="btn__text btn__copy">Copy</span>-->
<!--            </a>-->
<!--            <a data-tooltip="Download File as Plain Text"-->
<!--               href="https://dictation.io/speech#"-->
<!--               onclick="dictation('save');-->
<!--               return false;"-->
<!--               class="btn btn--sm btn-save btn--primary flex-item">-->
<!--                <span class="btn__text">Save</span>-->
<!--            </a>-->
<!--            <a data-tooltip="Text to Speech"-->
<!--               href="https://dictation.io/speech#"-->
<!--               onclick="dictation('play');-->
<!--               return false;"-->
<!--               class="btn btn--sm btn--primary btn-tts-parent">-->
<!--                <span class="btn__text">Play</span>-->
<!--            </a>-->
<!--            <a data-tooltip="Email This" target="_blank"-->
<!--               href="mailto:?body="-->
<!--               onclick="dictation('mail')"-->
<!--               class="btn btn--sm btn-clear btn--primary btn-mail">-->
<!--               <span class="btn__text">Email</span>-->
<!--            </a>-->
<!--            <a data-tooltip="Save as PDF, or Print" href="https://dictation.io/speech#" onclick="dictation('print');-->
<!--                                       return false;" class="btn btn--sm btn-clear btn--primary">-->
<!--                <span class="btn__text">Print</span>-->
<!--            </a>-->
<!--            <a data-tooltip="Clear Dictation Notepad" href="https://dictation.io/speech#" onclick="dictation('clear');-->
<!--                                       return false;" class="btn btn--sm btn-clear btn--primary">-->
<!--                <span class="btn__text">Clear</span>-->
<!--            </a>-->

            <div class="flex-item item-file" >
                <input type="button"
                       value="Start"

                       onchange="setupurl(window.lastFile=this.files[0])"
                />
            </div>
            <div class="flex-item">
                <input type="button"
                       value="Copy"
                       data-tooltip="Copy text to Clipboard"
                       title="Copy text to Clipboard"
                       onclick="modeimage()"/>
            </div>
            <div class="flex-item caption-text">
                <input type="button"
                            data-tooltip="Download File as Plain Text"

                value="Save"
                       onclick="recognized()"/>
            </div>
            <div id="button-clear-all"
                 class="flex-item" style="display: none">
                <input type="button"
                       value="Clear All"
                       onclick="ClearAll()"/>
            </div>


        </div>
    </div>
 </div>
</div>
