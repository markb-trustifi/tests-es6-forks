
import {fork} from 'node:child_process';


const options = {
    stdio: [ 'pipe', 'pipe', 'pipe', 'ipc' ],
    env: Object.assign({}, process.env, { NODE_DEBUG: '*' }),
    //execArgv: ['--inspect']
};

const child = fork('./childFork.js',['param'], options);

child.on('message', message => {
    console.info('message from child:' + message);
}).on('exit', function (code, signal) {
    console.info('message from child:' + code +':'+ signal);
}).on('error', function (code, signal) {
    console.error('message from child:' + code +':'+ signal);
});

child.stdout.on('data', (data) => {
    console.info('message from child:' + data.toString());
});
child.stderr.on('data', (data) => {
    console.error('message from child:' + data.toString());
});
