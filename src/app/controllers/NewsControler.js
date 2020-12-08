class NewsController {
    index(req, res) {
        res.render("news");
    }
    show(req, res) {
        res.send("ahihi");
    }
}

module.exports = new NewsController();
