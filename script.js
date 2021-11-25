document.addEventListener("DOMContentLoaded", function(event) {
    let searchBtn = document.getElementById('js-search-btn');
    searchBtn.addEventListener('click', () => {
        let searchValue = document.getElementById('js-search-input').value;
        window.open(encodeURI('https://legal-support.ru/services/trademarks/online-proverka-tovarnogo-znaka/?search_query=' + searchValue), '_blank');
    });
});