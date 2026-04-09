
// part_1 // question_1

/*
    const fs = require("node:fs");

    function read_in_chuncks(file_path)
    {
        const read_stream = fs.createReadStream(file_path , {encoding:"utf-8"});
        read_stream.on("data" , (chunck)=>{
            console.log(chunck);
        } );
    }

    read_in_chuncks("./big.txt");

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_1 // question_2


/*

    const fs = require("node:fs");

    function copy_file_content(source_path , dest_path)
    {

        const read_stream = fs.createReadStream(source_path , {encoding:'utf-8' , highWaterMark:64});
        const write_stream = fs.createWriteStream(dest_path);

        read_stream.on("data",(chunck)=>{
        write_stream.write(chunck); });

        read_stream.on("end" , ()=>{
        console.log("File copied using streams"); });
    }

    copy_file_content("./source.txt" , "./dest.txt");

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_1 // question_3


/*
    const fs = require("node:fs");
    const zlib = require ("node:zlib");

    function compresses_file(source_path , comp_path)
    {
        const read_stream = fs.createReadStream(source_path);
        const write_stream = fs.createWriteStream(comp_path);
        
        const gzip = zlib.createGzip();
        read_stream.pipe(gzip).pipe(write_stream);
    }

    compresses_file("./data.txt" , "./data.txt.gz");
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// part_2 // question_1

/*

    const fs = require('fs');
    const http = require('http');

    const server = http.createServer((req,res)=>{

        if(req.method=='POST' && req.url=='/user'){

            let req_body='';
            req.on("data" , (chunck)=>{
                req_body+=chunck;
            });

            req.on("end" , ()=>{
                const all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));
                const new_user = JSON.parse(req_body);

                let is_email_exist;

                for(let key in all_users){
                    if(all_users[key].email == new_user.email){
                        is_email_exist = true;
                        break;
                    }else{
                        is_email_exist = false;
                    }
                }
                if(is_email_exist == true){
                    res.write("This Email Is Already Exist !");
                    res.end();
                }else if(is_email_exist == false){
                    let num = Object.keys(all_users).length + 1;
                    all_users[num] = new_user; // num is dynamic naming of adding new_user
                    fs.writeFileSync('./users.json',JSON.stringify(all_users)); // write the new all_users to json file

                    res.write("User Added Successfully");
                    res.end();
                }
            });
        }else if(req.method=='GET' && req.url=='/user'){
            res.write(fs.readFileSync('./users.json','utf-8'));
            res.end();
        }
    });
    

    server.listen(3001,()=>{
        console.log('server is running on port 3001');
    })


*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_2 // question_2


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_2 // question_3

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_2 // question_4

/*

    const http = require('http');
    const fs = require('fs');

    const server = http.createServer((req,res)=>{
        if(req.method=='GET' && req.url=='/user'){
            const all_users = fs.readFileSync('./users.json','utf-8');
            res.write(all_users);
            res.end();
        }
    });

    server.listen(4000,()=>{
        console.log("server is running on port : 4000");
    });

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_2 // question_5:

/*
    const http = require('http');
    const fs = require('fs');
    const server = http.createServer((req,res)=>{

        let id = parseInt(req.url.split('/')[2]); // get id as a number from the URL 

        if(req.method == 'GET'){

            let users = JSON.parse(fs.readFileSync('./users.json','utf-8'));
            let needed_user;
            for(let key in users){
                if(users[key].id == id){
                    needed_user = users[key];
                    break;
                }else{
                    needed_user = false;
                }
            }

            if(needed_user==false){
                res.write("User Not Found");
                res.end();
            }else{
                res.write(JSON.stringify(needed_user));
                res.end();
            }
        }
    });

    server.listen(3006,()=>{
        console.log('server is running');
    });

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Part3: Node Internals:






















