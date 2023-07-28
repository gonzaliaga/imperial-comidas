const Drink = require('./models/Drink');
const Food = require('./models/Food');
const Extra = require('./models/Extra');
const Order = require('./models/Order');

const resolvers = {
    Query: {
        hello: () => 'Hello World',
        getDrinkList: async () => {
            const drink = await Drink.find();
            return drink;
        },
        async getDrink(_, { _id }) {
            return await Drink.findById(_id);
        },
        getFoodList: async () => {
            const food = await Food.find({});
            return food;
        },
        async getFood(_, { _id }) {
            return await Food.findById(_id);
        },
        getExtraList: async ()=>{
            const extra=await Extra.find({});
            return extra;
        },
        async getExtra(_, { _id }) {
            return await Extra.findById(_id);
        },
        getOrderList:async()=>{
            const order=await Order.find({});
            return order;
        },
        async getOrder(_, { _id }) {
            return await Order.findById(_id);
        },
    },
    Mutation: {
        addDrink: async (_, args) => {
            const { name, price, imageURL } = args
            const newDrink = new Drink({ name, price, imageURL })
            await newDrink.save()
            return newDrink
        },
        deleteDrink: async (_, { _id }) => {
            await Drink.findByIdAndDelete(_id);
            return "Bebida Borrada";
        },
        updateDrink: async (_, { _id, drink }) => {
            const { name, price, imageURL } = drink;
            const newDrink = await Drink.findByIdAndUpdate(
                _id,
                {
                    $set: {
                        name,
                        price,
                        imageURL,
                    },
                },
                {
                    new: true,
                }
            );
            return newDrink;
        },
        
        addExtra: async (_, args) => {
            const { name, price, imageURL } = args
            const newExtra = new Extra({ name, price, imageURL })
            await newExtra.save()
            return newExtra
        },
        deleteExtra: async (_, { _id }) => {
            await Extra.findByIdAndDelete(_id);
            return "Extra Borrado";
        },
        updateExtra: async (_, { _id, extra }) => {
            const { name, price, imageURL } = extra;
            const newExtra = await extra.findByIdAndUpdate(
                _id,
                {
                    $set: {
                        name,
                        price,
                        imageURL,
                    },
                },
                {
                    new: true,
                }
            );
            return newExtra;
        },
        addFood: async (_, args) => {
            const { name, price, imageURL } = args
            const newFood = new Food({ name, price, imageURL })
            await newFood.save()
            return newFood
        },
        deleteFood: async (_, { _id }) => {
            await Food.findByIdAndDelete(_id);
            return "Comida Borrada";
        },
        updateFood: async (_, { _id, food }) => {
            const { name, price, imageURL } = food;
            const newFood = await Food.findByIdAndUpdate(
                _id,
                {
                    $set: {
                        name,
                        price,
                        imageURL,
                    },
                },
                {
                    new: true,
                }
            );
            return newFood;
        },
        addOrder: async (_, args) => {
            const { food, drink, extra, total, client } = args
            const newOrder = new Order({ food, drink, extra, total, client })
            await newOrder.save()
            return newOrder
        },
        /*         addOrder: async (_, { food, drink, extra, total, client }, { Order }) => {
                    const newOrder = await new Order({
                        food,
                        drink,
                        extra,
                        total,
                        client,
                    }).save();
                    return newOrder;
                }, */
    },
};

module.exports = { resolvers };
