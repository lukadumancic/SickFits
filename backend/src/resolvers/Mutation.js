const Mutations = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    console.log(args);
    const newDog = {name: args.name};
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = Mutations;
