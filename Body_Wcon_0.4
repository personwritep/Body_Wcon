// ==UserScript==
// @name        Body Wcon
// @namespace        http://tampermonkey.net/
// @version        0.4
// @description        編集画面「デザイン幅で表示」のOFF時に幅コントロール
// @author        Ameba Blog User
// @match        https://blog.ameba.jp/ucs/entry/srventryinsertinput.do*
// @match        https://blog.ameba.jp/ucs/entry/srventryupdateinput.do*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameba.jp
// @grant        none
// @updateURL        https://github.com/personwritep/Body_Wcon/raw/main/Body_Wcon.user.js
// @downloadURL        https://github.com/personwritep/Body_Wcon/raw/main/Body_Wcon.user.js
// ==/UserScript==


let ua=0;
let agent=window.navigator.userAgent.toLowerCase();
if(agent.indexOf('firefox')!=-1){ ua=1; } // Firefoxの場合


let editorStyle=document.querySelector('.p-editorStyle');
if(editorStyle){
    editorStyle.style.width='220px'; // 固定デザイン

    let applyStyleWidth=document.querySelector('#applyStyleWidth');
    if(applyStyleWidth){
        applyStyleWidth.addEventListener('input', function(){
            if(applyStyleWidth.checked){
                show_off(); }
            else{
                show_on(); }
        }); }}



function show_on(){
    let bwidth=localStorage.getItem('BodyWcon'); // モバイル　ディスプレイ幅値 🔵
    if(!bwidth){
        bwidth=360; }

    let cont=
        '<div id="con_container">'+
        '<span id="con_val"></span>'+
        '<input id="width_con" '+
        'type="range" min="280" value="620" step="1">'+
        '<style>'+
        '.p-editorStyle { width: 220px; }'+
        '#applyStyleWidthLabel { font-size: 0; }'+
        '#js-editorStyleQuestion, js-editorStyleBalloon { display: none; }'+
        '#con_container { display: inline-block; width: 180px; }'+
        '#con_val { display: inline-block; width: 36px; font-size: 14px; vertical-align: 3px; }'+
        '#width_con { width: calc(100% - 40px); }';

    if(ua==1){
        cont+=
            '#con_container { margin-top: -2px; }'+
            '#con_val { vertical-align: 5px; }'; }

    cont+='</style></div>';


    if(!document.querySelector('#width_con')){
        editorStyle.insertAdjacentHTML('beforeend', cont); }
    let width_con=document.querySelector('#width_con');
    let con_val=document.querySelector('#con_val');



    let editor_iframe=document.querySelector('.cke_wysiwyg_frame');
    if(editor_iframe){ // iframe読込みが実行条件
        let iframe_doc=editor_iframe.contentWindow.document;
        if(iframe_doc){
            let iframe_body=iframe_doc.querySelector('body.cke_editable');
            if(iframe_body){
                let cont_iframe='<style id="editer_width_con"></style>';
                if(!iframe_body.querySelector('#editer_width_con')){
                    iframe_body.insertAdjacentHTML('beforeend', cont_iframe); }
                let editer_width_con=iframe_doc.querySelector('#editer_width_con');

                let max_width=editor_iframe.getBoundingClientRect().width - 32;
                width_con.max=max_width;

                width_con.value=bwidth;
                con_val.textContent=bwidth;
                editer_width_con.textContent=
                    'body.cke_editable { width: '+(bwidth/1 + 16) +'px !important; }';

                width_con.addEventListener('input', function(){
                    bwidth=width_con.value;
                    con_val.textContent=bwidth;
                    editer_width_con.textContent=
                        'body.cke_editable { width: '+(bwidth/1 + 16) +'px !important; }';

                    localStorage.setItem('BodyWcon', bwidth); // 機種ディスプレイ幅セット 🔵
                });
            }}}

} // show_on()




function show_off(){
    let editor_iframe=document.querySelector('.cke_wysiwyg_frame');
    if(editor_iframe){ // iframe読込みが実行条件
        let iframe_doc=editor_iframe.contentWindow.document;
        if(iframe_doc){
            let editer_width_con=iframe_doc.querySelector('#editer_width_con');
            if(editer_width_con){
                editer_width_con.remove(); }}}


    let con_container=document.querySelector('#con_container');
    if(con_container){
        con_container.remove(); }

} // show_off()
