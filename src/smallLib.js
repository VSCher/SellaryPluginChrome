/**
 * Run Callback if page loaded
 * @param callback
 */
export function isReady(callback) {
    if (document.readyState != 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback)
    }
}

/**
 * Perform GET ajax request to url
 * @param url
 * @returns {Promise}
 */
export function smallAjax(url) {
    return new Promise((resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = ()=> {
            if (xhr.readyState === 4) {
                if (xhr.status != 200) {
                    console.log(xhr.responseText);
                } else {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
        };
    });
}

/**
 * Returns string with background name
 * @param usdSell
 * @returns {string}
 */
export function bgChanger(usdSell) {
    if (usdSell < 300) {
        return 'bad';
    } else if (usdSell >= 500) {
        return 'big';
    } else {
        return 'norm';
    }
}
