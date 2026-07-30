//social profilr object
const socialProfile = {
  fullName: "nisha Subedi",
  email: "neshasubedi07@gmail.com",
  numberoflikes: 1000,
  comments: 500,
  bookmarks:false,
  friends: ["sunita ", "sita", "gita"],
  like()
  {
    this.numberoflikes++;
    return this.numberoflikes;
  },
  editprofile(fullname, Email) {
    this.updateProfile = function(fullname, Email) {
      if (fullname!==undefined) 
        this.fullName = fullname;
      if (Email!==undefined)
        this.email = Email;
      return { fullName: this.fullName, email: this.email };
    }
  },
  addcomment(comment){
    this.comments++;
    return this.comments;
  }, 
  removecomment(comment){
    if(this.comments>0){
      this.comments--;    
    }
    return this.comments;
  },
    addfriend(friend){
      this.friends.push(friend);
      return this.friends;
    },
    removefriend(friend){
      const index = this.friends.indexOf(friend);
      if (index !== -1) {
        this.friends.splice(index, 1);
      }
      return this.friends;
    },
    bookmark(){
      this.bookmarks = !this.bookmarks;
      return this.bookmarks;
    }
 };
