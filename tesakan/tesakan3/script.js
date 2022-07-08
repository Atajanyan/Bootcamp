

//bind - veradarcnuma funkcia vori this-@ 
//call
//apply


function foo(){
    console.log(this);
}

let obj = {
    name:'sdsfg',
    foo:foo,
    doo:function(){
        console.log(this,'doo this');
        foo()
    }
}
let binded = foo.bind({name:'bind'})//{name:'lllllllll'})//
foo.call({name:'lllllllll'})//this@ {name:'lllllllll'}
binded()
obj.doo()//this-@ obj / window


