
process.on('uncaughtException', function (err) {
    process.send({stack: err.stack, message: err.message}, null, {}, _ => {
        process.exit(1);
    });
});
process.send('READY');
