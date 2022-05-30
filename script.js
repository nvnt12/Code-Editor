var h = ace.edit("htmlcode");
h.getSession().setMode("ace/mode/html");
h.setTheme("ace/theme/xcode");
/*h.setTheme("ace/theme/terminal");*/
h.getSession().setTabSize(4);

var c = ace.edit("csscode");
c.getSession().setMode("ace/mode/css");
c.setTheme("ace/theme/xcode");
/*c.setTheme("ace/theme/terminal");*/
c.getSession().setTabSize(4);

var j = ace.edit("jscode");
j.getSession().setMode("ace/mode/javascript");
j.setTheme("ace/theme/xcode");
/*j.setTheme("ace/theme/terminal");*/
j.getSession().setTabSize(4);

const r = document.querySelector(".run-btn");

 function run(){
    r.onfullscreenchange;
    let htmlCode = h.getValue();
    let cssCode = "<style>" + c.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + j.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector("#output").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode+cssCode+jsCode);
    previewWindow.close();
};