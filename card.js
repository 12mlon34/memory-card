


//created array with my cards to changed as adynamic shape 
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F'];
var memory_values = [];
var memory_title_ids = [];
var titles_flipped = 0;
//create function to make element appear random 
Array.prototype.memory_title_shuffle = function(){
    // var length = 5
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}


function newBoard(){
    titles_flipped = 0;
    var output = '';
    //to implement function with our array
    memory_array.memory_title_shuffle();
    for(var i = 0; i < memory_array.length; i++){
        output = output + '<div id="title_'+i+'" onclick="memoryFliptitle(this,\''+memory_array[i]+'\')"></div>';
        // console.log(output)
    }
 document.getElementById('memory_board').innerHTML = output;
}
function memoryFliptitle(title,val){
    if(title.innerHTML == "" && memory_values.length < 2){
        // console.log(title)
                // console.log(val)
        // console.log(memory_values)

        title.style.background = '#333';
        title.style.border = '2px solid #333';

        title.innerHTML = val;
        // console.log( title.innerHTML)
        if(memory_values.length == 0){
            memory_values.push(val);//push any character from array
            memory_title_ids.push(title.id);//push id of character from array
                    // console.log( title.id)

        } else if(memory_values.length == 1){
            memory_values.push(val);
            // console.log(memory_values.push(val))
            memory_title_ids.push(title.id);
                        // console.log(memory_title_ids.push(title.id))

            if(memory_values[0] == memory_values[1]){
                // memory_values[0].remove()
                //                 memory_values[1].remove()
                                titles_flipped += 2;

              // console.log(titles_flipped)

                // Clear both arrays
                memory_values = [];
                memory_title_ids = [];

                // Check to see if the whole board is cleared
                if(titles_flipped == memory_array.length){
                    alert("Board cleared... generating new board");
                    document.getElementById('memory_board').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back(){
                    // Flip the 2 titles back over
                    var title_1 = document.getElementById(memory_title_ids[0]);
                    var title_2 = document.getElementById(memory_title_ids[1]);
                    title_1.style.background ='rgb(124, 184, 75)';
                    title_1.innerHTML = "";
                    title_2.style.background ='rgb(124, 184, 75)';
                    title_1.style.border ='2px solid rgb(124, 184, 75)';
                    title_2.style.border ='2px solid rgb(124, 184, 75)';

                    title_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_title_ids = [];
                }
                setTimeout(flip2Back, 1000);
            }
        }
    }
}

newBoard();