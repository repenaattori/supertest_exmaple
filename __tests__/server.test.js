import { app } from "../server";
import request from 'supertest';
import {test} from 'vitest';


test('Basic test', done=>{    
    request(app)
    .get('/test')
    .expect(200)
    .end((err,resp) =>{
        if(err) throw err
    })
})