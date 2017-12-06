// this utility is for  checking the common content of both the monthly premium and yearly 
// we can map this a key  like quote id 
///help ful for admin 

const myModule = require('./callingApi');
class MyArray {
    constructor() {
      this.array = [];
    }
  
    add(data) {
      this.array.push(data);
    }
  
    remove(data) {
      this.array = this.array.filter(current => current !== data);
    }
  
    search(data) {
      const foundIndex = this.array.indexOf(data);
      if(~foundIndex) {
        return foundIndex;
      }
  
      return null;
    }
  
    getAtIndex(index) {
      return this.array[index];
    }
  
    length() {
      return this.array.length;
    }
  
    print() {
    //  console.log(this.array.join(' '));
    }
  }
  
  const array = new MyArray();
 // array.add(1);

 //common data extration on the basis of isurer name
 var a =[];
 a   = myModule.data.plan_list.Y;
 commonForBoth ={};
  var allValue =[];
 for (var property in a) {
    if (a.hasOwnProperty(property)) {
        var claims_settled = a[property].insurer.claims_settled;
        var InsurerName = a[property].insurer.name;
        var policyWording =a[property].insurer.policy_wording;
        var logo           =a[property].insurer.logo;
        var aboutus           =a[property].insurer.about_us;
        var complainsPainding = a[property].complainsPainding;
        var slug =    a[property].complainsPainding;
      //  console.log('xu',xu);
      commonForBoth ={
          "claims_settled" :claims_settled,
          "InsurerName"     :InsurerName,
          "policyWording" :policyWording,
          "logo"          :logo,
          "aboutus"      :aboutus,
         // rest common filelds will be added  
      }
          allValue.push(commonForBoth);
    }
   
}
//console.log('check',allValue.length);
//console.log('check',allValue[0]);
//var x ={};
//for (i =0; i< allValue.length;i++){
//var y = allValue[i].claims_settled;
//var z = allValue[i].InsurerName;
//x.InsurerName =z;
//x.claims_settled=y;
//console.log(x);



function HashTable(size) {
  this.values = {};
  this.numberOfValues = 0;
  this.size = size;
}

HashTable.prototype.add = function(key, value) {
  var hash = this.calculateHash(key);
  if(!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {};
  }
  if(!this.values[hash].hasOwnProperty(key)) {
    this.numberOfValues++;
  }
  this.values[hash][key] = value;
};

//}


HashTable.prototype.calculateHash = function(key) {
  return key.toString().length % this.size;
};


HashTable.prototype.search = function(key) {
  var hash = this.calculateHash(key);
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key];
  } else {
    return null;
  }
};


var hashTable = new HashTable();
var    quoteId   = myModule.quote_id;
hashTable.add(quoteId,commonForBoth );
hashTable.search(quoteId);
console.log(hashTable.search(quoteId));


