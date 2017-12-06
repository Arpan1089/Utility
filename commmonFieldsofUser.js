
const myModule = require('./callingApi');



  //const myModule = require('./callingApi');
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
  
  commonForUser ={};
 var a = myModule.data.quote_form;
 var mergedUser =[];
  
        var mobile =a.mobile;
        console.log(mobile);
        var salery= a.salary;

        //we can add here the other common fileds

        commonForUser ={
          "mobile": mobile,
          "salary":salery
        }
        mergedUser.push(commonForUser);

        console.log(mergedUser);

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
        hashTable.add(quoteId,commonForUser );
        hashTable.search(quoteId);
        console.log(hashTable.search(quoteId));
        