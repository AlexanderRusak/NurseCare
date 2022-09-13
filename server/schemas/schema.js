const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const News = require("../models/news");
const Advs = require("../models/adv");
const Users = require("../models/users");
const Nurses = require("../models/nurses");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    cvId: {
      type: NurseType,
      resolve(parent, args) {
        return Nurses.findById(parent.cvId);
      },
    },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    sex: { type: new GraphQLNonNull(GraphQLBoolean) },
    birthDate: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

const NurseType = new GraphQLObjectType({
  name: "Nurse",
  fields: () => ({
    secondName: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    info: { type: GraphQLString },
    docScan: { type: new GraphQLNonNull(GraphQLString) },
    idScan: { type: GraphQLString },
    isValidated: { type: new GraphQLNonNull(GraphQLBoolean) },
  }),
});

const NewsType = new GraphQLObjectType({
  name: "News",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    imageLink: { type: GraphQLString },
    link: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const AdvType = new GraphQLObjectType({
  name: "Adv",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    imageLink: { type: GraphQLString },
    link: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Users.findById(args.id);
      },
    },
    nurse: {
      type: NurseType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return nurses.find((nurse) => nurse.id == args.id);
      },
    },
    news: {
      type: new GraphQLList(NewsType),
      resolve(parent, args) {
        return News.find({});
      },
    },
    advs: {
      type: new GraphQLList(AdvType),
      resolve(parent, args) {
        return Advs.find({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
