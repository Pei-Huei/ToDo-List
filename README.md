# 簡易版 ToDo-List 實作

## 功能描述

* 新增：可新增日期、時間以及待辦事項  
* 修改：可修改日期、時間以及待辦事項  
* 查詢：可根據日期去查詢當天的待辦事項，若查無此日期的待辦事項，則會出現警示視窗  
* 刪除：可直接刪除不需要的待辦事項

## 開發環境

* 系統環境：Ubuntu v16.04
* 前端：Ejs v2.6.1  
* 後端：Node.js v9.11.2 + Express v4.16.1 + MySQL v5.7.29

## 專案執行

在該專案資料夾目錄下，開啟 Terminal ，輸入 npm start ，接著開啟瀏覽器並輸入此網址：http://localhost:3000/

## 專案執行畫面

## 補充說明

* MySQL 的 Table 欄位說明：  
1. 有4個欄位，分別為 id ， date ，time 以及 todo ，並皆設定為不是空值 
2. id 設定為 PRIMARY KEY ，並讓它可以自動增加編號(AUTO_INCREMENT)
3. 由於 id 設定為 AUTO_INCREMENT ，因此當刪除完資料庫裡的所有資料後，再加入新的資料時，它的 id 值不是從1開始，因此需要手動重置。而重置的方式是進入 MySQL 後，輸入下述其中之一的指令：
> * ALTER TABLE table_name AUTO_INCREMENT = 1; (讓 Table 裡的 AUTO_INCREMENT 從1開始)
> * TRUNCATE TABLE table_name; (移除 Table 中的所有資料，但會留存 Table 的結構及其欄位)

