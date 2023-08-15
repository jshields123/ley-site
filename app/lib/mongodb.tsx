import mongoose, { ConnectionStates } from 'mongoose';

const connectDB = async () => {
  const {
    connection: { readyState },
  } = mongoose;

  // TODO: I would pull this out into a constants in api/mongoose/mongoose.constants.tsx
  const CONNECTION_STATE_TYPE_MAP = {
    [ConnectionStates.disconnected]: 'mongoDB is disconnected',
    [ConnectionStates.connected]: 'mongoDB is connected',
    [ConnectionStates.connecting]: 'mongoDB is connecting',
    [ConnectionStates.disconnecting]: 'mongoDB is disconnecting',
    [ConnectionStates.uninitialized]: 'mongoDB is uninitialized',
  };

  try {
    if (readyState === (0 as ConnectionStates)) {
      await mongoose.connect(String(process.env.MONGODB_URI));

      console.log(CONNECTION_STATE_TYPE_MAP[readyState]);
    } else {
      console.log(CONNECTION_STATE_TYPE_MAP[readyState]);
    }
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };

// If I have fooked this your old code with the typescript fix is
// import mongoose, { ConnectionStates } from 'mongoose';

// const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 0 as ConnectionStates) {
//       await mongoose.connect(process.env.MONGODB_URI);
//       console.log("MongoDB Connected");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { connectDB };
