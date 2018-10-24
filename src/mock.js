export default function () {
    require('jquery-mockjax')(window.$, window)

    const TOTAL_PAGES = 3
    const MAX_PAGE_ENTRIES = 10

    function mockPage(pageNum) {
        return {
            page: pageNum,
            lastPage: TOTAL_PAGES,
            content: new Array(MAX_PAGE_ENTRIES).fill(undefined).map(() => {
                const data = {
                    id: Math.floor(Math.random() * 10000),
                }

                if (Math.random() < 0.5) {
                    data.type = 'music'
                    data.genre = 'rock'

                } else {
                    data.type = 'movie'
                    data.category = 'trailer'
                }

                data.pageUrl = `sample-url_${data.id}`
                data.name = `sample-name_${data.id}`

                return data
            })
        }
    }

    window.$.mockjax({
        url: /^\/sample-feed\/\?page=(\d+)/,
        urlParams: ["pageNum"],
        dataType: "json",
        response: function (request) {
            this.responseText = mockPage(request.urlParams.pageNum)
        }
    })
}
