window.addEventListener("DOMContentLoaded", function () {

    const h = document.getElementById("h");
    const t = document.getElementById("t");
    const ml = document.getElementById("ml");

    h.className = "visible";
    t.className = "visible";
    ml.className = "visible";

    const iframe = document.querySelector("iframe");
    const iframeWindow = iframe.contentWindow;

    const setHtmlClasses = function (hClass, tClass, mlClass) {
        h.className = hClass;
        t.className = tClass;
        ml.className = mlClass;
    };

    iframe.onclick = function () {
        iframeWindow.location.reload();
    };

    let colourState = 0;
    document.getElementById("html").onclick = function () {
        colourState = (colourState + 1) % 4;
        switch (colourState) {
        case 0:
            setHtmlClasses("visible", "visible", "visible");
            break;
        case 1:
            setHtmlClasses("hidden", "active", "hidden");
            break;
        case 2:
            setHtmlClasses("active", "visible", "hidden");
            break;
        case 3:
            setHtmlClasses("visible", "visible", "active");
            break;
        }
    };

    let styleState = 0;

    const presLink = document.querySelector("link");

    document.querySelector("h1").onclick = function () {
        const embedLink = iframeWindow.document.querySelector("link");
        styleState = (styleState + 1) % 3;
        switch (styleState) {
        case 0:
            presLink.setAttribute("href", "presentation.css");
            embedLink.setAttribute("href", "default.css");
            break;
        case 1:
            presLink.setAttribute("href", "presentation.css");
            embedLink.setAttribute("href", "");
            break;
        case 2:
            presLink.setAttribute("href", "");
            embedLink.setAttribute("href", "");
            break;
        }
    };

});
