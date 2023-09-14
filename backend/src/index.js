import app from './server'
const PORT = process.env.PORT;
(function main(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
})();
    