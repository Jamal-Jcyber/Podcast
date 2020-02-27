function LinkedList(){

    let Node = function (element) { //1 helper class called Node
      this.element = element;
      this.next = null;
    };
  
    let length = 0;
    let head = null;
  
  
    this.append = function (element) {
      let node = new Node(element), current;
      if (head === null){ //first node on the list
        head = node;
      } else {
        current = head;
        //loop the list until find the last item
        while (current.next){
          current = current.next;
        }
        //get last item and assign next to node to make the link
        current.next = node;
      }
      length++; //Update the size of the list
      
    };
  
    this.removeAt = function (position) {
      if (position > -1 && position <length){
        let current = head, previous, index = 0;
        //removing the first item
        if (position === 0){
          head = current.next;
        } else{
          while (index++ <position){
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }
        length--;
        return current.element;
      }else {
        return null;
      }
    };
  
    this.insert = function(position, element){
      if (position >= 0 && position <length){
        let node = new Node(element), current = head, index = 0;
  
        if (position === 0){
          node.next = current;
          head = node;
        } else {
          while (index++ < position){
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }
        length++;
        return true;
  
      }else {
        return false;
      }
    };
  
    this.toString= function(){
      let current = head;
      string = '';
      while (current){
        string +=current.element + (current.next ? ' ' : '');
        current = current.next;
      }
      return string;
    };
  
    this.indexOf = function(){
      let current = head;
      index = -1;
      while(current){
        if (element === current.element){
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    };
  
    this.remove = function(){
      let index = this.indexOf(element);
      return this.removeAt(index);
    };
  
    this.isEmpty = function(){
      return length;
    };
  
    this.size = function(){
      return length;
    };
  
    this.getHead = function(){
      return head;
    };
  
  }
  
  let list = new LinkedList();



  function PushNewPoadcast(){
    const obj = {
        image : document.getElementById('url').value,
        podcastN : document.getElementById('podcastname').value,
        podcastor : document.getElementById('podcastorname').value,
        description : document.getElementById('description').value,
        categorie : document.getElementById('categorie').value,
        link : document.getElementById('link').value,
        tag : document.getElementById('tag').value,
      };
    
      list.append(obj);
     
      return document.getElementById("PodcastLists").innerHTML += '<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 start-xs start-sm start-md start-lg"> <article><img src="'+obj.image+'" alt="Podcast" srcset=""> <header> <h1>'+obj.podcastN+'</h1> <h3>'+obj.podcastor+'</h3> <p>'+obj.description+'</p> <h5>'+obj.categorie+'</h5> <a href="details.html">View More >></a> <p>'+obj.tag+'</p> </header> </article> </div>'
    
  }

  function PushNewEpisode(){
    const objj = {
        date : new Date(),
        episodeName : document.getElementById('episodename').value,
        description : document.getElementById('descr').value,
        link : document.getElementById('lien').value,
        tag : document.getElementById('tag').value,
        invited : document.getElementById('invite').value
      };
    
      list.append(objj);
     
      return document.getElementById("EpisodLists").innerHTML += '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4"><img src="https://skillvalue.com/blog/wp-content/uploads/2015/03/ruby-mini-logo.png" alt="episode"></div><div class="col-xs-12 col-sm-8 col-md-8 col-lg-8"><time>'+objj.date+'</time><h4>'+objj.tag+'</h4><h2>'+objj.episodeName+'</h2><p>'+objj.description+'</p><audio src="Audio/'+objj.link+'" controls></audio><p>'+objj.invited+'</p></div>'
    
    }





    var video = document.getElementById("myVideo");

    var video = document.getElementById("myVideo2");