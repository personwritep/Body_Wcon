// ==UserScript==
// @name        JP Subtitles
// @namespace        http://tampermonkey.net/
// @version        0.3
// @description        YouTube動画の日本語字幕をワンタッチで表示する
// @author        YouTube User
// @match        https://www.youtube.com/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @updateURL        ttps://github.com/personwritep/JP-Subtitles/raw/main/JP-Subtitles.user.js
// @downloadURL        ttps://github.com/personwritep/JP-Subtitles/raw/main/JP-Subtitles.user.js
// ==/UserScript==


let able_flag;

let target=document.querySelector('head');
let monitor=new MutationObserver(main);
monitor.observe(target, { childList: true });

main();


function main(){
    let h_v_p_p_m=document.querySelector('.html5-video-player.playing-mode');
    let y_sb_b=document.querySelector('.ytp-subtitles-button');

    if(y_sb_b && h_v_p_p_m){
        y_sb_b.onclick=function(){
            able();
            if(able_flag==1){
                push_0();
                setTimeout(()=>{
                    push_1(); }, 20);
                setTimeout(()=>{
                    push_2();
                    hide(); }, 40);
                setTimeout(()=>{
                    push_3();
                    hide(); }, 200);
                end(); }
        }}}


function able(){
    let y_sb_b=document.querySelector('.ytp-subtitles-button');
    if(y_sb_b){
        if(y_sb_b.getAttribute('aria-pressed')=='true'){
            able_flag=1; }
        else{
            able_flag=0; }}}


function hide(){
    let y_s_m=document.querySelector('.ytp-settings-menu');
    if(y_s_m){
        y_s_m.style.display='none'; }}


function push_0(){
    let y_st_b=document.querySelector('.ytp-settings-button');
    if(y_st_b){
        y_st_b.click(); }}


function push_1(){
    let y_menu=document.querySelectorAll('.ytp-menuitem');
    for(let k=0; k<y_menu.length; k++){
        if(y_menu[k].querySelector('.ytp-menuitem-icon')){
            if(y_menu[k].textContent.includes('字幕')
               && y_menu[k].querySelector('.ytp-menuitem-label-count')){
                if(able_flag==1){
                    y_menu[k].click(); }}}}}


function push_2(){
    let y_m=document.querySelectorAll('.ytp-menuitem');
    for(let k=0; k<y_m.length; k++){
        if(y_m[k].textContent.includes('自動翻訳')){
            if(able_flag==1){
                y_m[k].click(); }}}}


function push_3(){
    let y_m=document.querySelectorAll('.ytp-menuitem');
    for(let k=0; k<y_m.length; k++){
        if(y_m[k].textContent.includes('日本語')){
            if(able_flag==1){
                y_m[k].click(); }}}}


function end(){
    let y_m_c=document.querySelectorAll('.ytp-menuitem-content');
    for(let k=0; k<y_m_c.length; k++){
        if(y_m_c[k].textContent.includes('>> 日本語')){
            able_flag=0;
            let y_s_m=document.querySelector('.ytp-settings-menu');
            if(y_s_m){
                y_s_m.style.display='inherit'; }}}}
