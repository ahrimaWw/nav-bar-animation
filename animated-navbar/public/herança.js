class mammal {
    constructor (species, name, age) {
        this.species = species
        this.name = name
        this.age = age
        this.mammarylgland = true
    }

    incrementAge () {
        this.age++
    }
}

class lion extends mammal {
    constructor (species, name, age, manEater) {
        super(species, name, age)
        this.manEater = manEater
    }
    eatZebras (animals) {
        return animals.filter(animal => animal.species !== 'zebra')
    }
}

const zeca = new mammal ('zebra', 'zeca', 6)
const pompeu = new mmamal ('gnu', 'pompeu', 5)
const angus = new mammal('cavalo', 'angus', 3)
const mufasa = new Lion('leão', 'musafa', 7)

const animals = [zeca, pompeu, angus]

console.log(mufasa)