class superHero{
    constructor(name){
        this.name = name
    }

    getName(){
       return this.name
    }

    setName(name){
      this.name = name
    }
}


// module.exports = new superHero("Batman") //Not the right way to export

module.exports = superHero