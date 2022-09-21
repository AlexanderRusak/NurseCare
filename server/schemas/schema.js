const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
  GraphQLFloat,
  GraphQLScalarType,
} = graphql;

const News = require("../models/news");
const Advs = require("../models/adv");
const Users = require("../models/users");
const Nurses = require("../models/nurses");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    cv: { type: NurseType },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
    sex: { type: new GraphQLNonNull(GraphQLBoolean) },
    birthDate: { type: new GraphQLNonNull(GraphQLFloat) },
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
      args: {
        phoneNumber: { type: GraphQLString },
      },
      resolve(parent, { phoneNumber }) {
        return Users.findOne({ phoneNumber });
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
    usersCV: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return Nurses.find({ cv: { $ne: null } });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        sex: { type: new GraphQLNonNull(GraphQLBoolean) },
        birthDate: { type: new GraphQLNonNull(GraphQLFloat) },
        phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { birthDate, sex, lastName, firstName, phoneNumber }) {
        const user = new Users({
          birthDate,
          cv: null,
          firstName,
          lastName,
          sex,
          phoneNumber,
        });

        return user.save();
      },
    },
    addCv: {
      type: UserType,
      args: {
        phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
        secondName: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        info: { type: GraphQLString },
        docScan: { type: new GraphQLNonNull(GraphQLString) },
        idScan: { type: GraphQLString },
      },
      resolve(
        parent,
        { phoneNumber, secondName, address, info, docScan, idScan }
      ) {
        return Users.findOneAndUpdate(
          { phoneNumber },
          {
            $set: {
              cv: {
                secondName,
                address,
                info,
                docScan,
                idScan,
                isValidated: false,
              },
            },
          }
        );
      },
    },
    editData: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        sex: { type: GraphQLBoolean },
        birthDate: { type: GraphQLFloat },
        phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { firstName, lastName, sex, birthDate, phoneNumber }) {
        return Users.findOneAndUpdate(
          { phoneNumber },
          {
            $set: {
              firstName: firstName,
              lastName: lastName,
              sex: sex,
              birthDate: birthDate,
              phoneNumber: phoneNumber,
            },
          }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
