const myModule = require('./callingApi');
var data =[];
// this utility is for them when a user choose to sort the quotation on the basis of  claim settled 
// 


data   = myModule.data.plan_list.Y;
//console.log(a.length);
var arr=[];
function quicksort(data){
    if(data.length === 0)
        return [] ;
         var left =[] , right =[] , pivot =data[0];
         console.log('a',pivot.premium.Y.value);

          for ( var i =1 ; i< data.length ; i++){
                  //  int j = i; j > 0; j--
            //    for( var j =i; j>0 ; j--)
              
             // for ( var  a in data[i][0]){
               //   if (data[i][0].hasOwnProperty(a)) {

              console.log ('plz',data[0].insurer.claims_settled);
              if(data[i].premium.Y.value < pivot.premium.Y.value){
                  left.push(data[i]);
             }
              else {
                right.push(data[i]);
             }


          }
       // }
 //   }
 //return quicksort(left).concat(pivot,quicksort(right));
 return quicksort(right).concat(pivot,quicksort(left));
}
quicksort(data);
console.log('test',quicksort(data));