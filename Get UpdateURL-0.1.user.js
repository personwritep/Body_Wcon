// ==UserScript==
// @name        Get UpdateURL
// @namespace        http://tampermonkey.net/
// @version        0.1
// @description        自動更新用のURL・メタデータを生成
// @author        personwritep
// @match        https://github.com/personwritep/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==


window.addEventListener('keydown', check_key);
function check_key(event){
    if(event.keyCode==121){ // ショートカット「F10」
        event.preventDefault();
        event.stopImmediatePropagation();
        make_mata(); }}


function make_mata(){
    let now_url=location.href;
    let all_part=now_url.split('/');

    let meta_url;
    if(all_part.length==8){
        all_part[5]='raw';
        all_part[7]=all_part[4]+'.user.js';

        meta_url=all_part.join('/');

        let add_meta_url=
            '// @updateURL        '+ meta_url +'\n'+
            '// @downloadURL        '+ meta_url;


        if (navigator.clipboard && add_meta_url){ // copyToClipboardを実行
            navigator.clipboard.writeText(add_meta_url);

            alert("Get"); }
    }}
