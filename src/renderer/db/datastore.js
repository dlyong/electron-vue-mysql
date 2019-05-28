import dbpool from './dbconfig'
// 在数据池中进行会话操作
let dbcrud = function( sql, values ) {
    // 返回一个 Promise
    return new Promise(( resolve, reject ) => {
        dbpool.getConnection(function(err, connection) {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    // 结束会话
                    connection.release()
                })
            }
        })
    })
}

export default {
    dbcrud
};
