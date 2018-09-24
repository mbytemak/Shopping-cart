let appConfig={};

appConfig.port=3001;
appConfig.db={
    uri:'mongodb://localhost/sampleDb'
}

module.exports={


port:appConfig.port,
db:appConfig.db



}