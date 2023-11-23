import {connect} from 'mongoose';

async function dbConnected () {
    try {
        await connect('mongodb://127.0.0.1:27017/test');
        console.log('db is connected');
        
    } catch (err: any) {
        console.error(err);
        return false
    }
}

export {dbConnected}