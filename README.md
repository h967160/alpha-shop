# Alpha-Shop - React 練習

此專案是使用 React 來模擬電商平台結帳 UI，練習 Component 的拆解、渲染與動態操作。

目前進度為：ALPHA Shop IV：表單實作。

## Project Screenshots - 專案畫面

![ALPHA-shop-cover-1](https://github.com/h967160/alpha-shop/assets/152831113/ed279d53-2e1b-4518-8dba-a4a61248202e)
![ALPHA-shop-cover-2](https://github.com/h967160/alpha-shop/assets/152831113/e09cc4d9-1114-40a1-89c9-34b64004b57a)

## Features - 功能

- 導覽列為固定，捲動時不會消失。
- 點選右上角月亮圖示會更改為深色模式。
- 點選上一步、下一步按鈕可以切換不同步驟。
- 在步驟 2 點選運送方式時，購物籃運費會跟著更改。
- 購物籃部分可以點選+或-的圖示更改商品數量。
- 購物籃的小計為商品總和再加上運費的金額。
- 以下為在點選"確認下單"時，須使用 console.log 查看
  - 步驟 2 如果沒有點選運送方式會出現："請選擇運送方式"。
  - 步驟 3 如果沒有填寫付款資訊會出現："請填寫付款資訊以完成訂單"。
  - 購物車如果沒有商品時會出現："目前購物車是空的"。

## To be added - 待新增

- RWD
- 表單驗證
- 切換按鈕時每個步驟應完成

## Environment SetUp - 環境建置

- Node.js v14.18.1
- React v18.2.0
- Sass v1.72.0

## Installation and Execution - 安裝並執行專案

1.請先確認是否有安裝 Node.js 及 Npm。

2.開啟終端機（Terminal）， clone 此專案至本機電腦。

```
git clone https://github.com/h967160/alpha-shop.git
```

3.開啟終端機（Terminal），進入存放此專案的資料夾。

```
cd alpha-shop
```

4.安裝 npm 套件

```
npm install
```

5.啟動專案

```
npm start
```

6.當 Terminal 出現以下訊息，表示專案已啟動。

```
You can now view alpha-shop in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.12:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

7.如程式未自動打開專案網頁，請輸入以下網址：

```
http://localhost:3000
```

8.如欲停止伺服器

```
ctrl + c
```
