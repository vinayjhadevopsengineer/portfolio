import mongoose  from "mongoose";

export  async function ConnectDb()
{
    let url = "mongodb://localhost:27017/vkj";
    try {
        let {connection} = await mongoose.connect(url);
             console.log("Connection successfully");
        return connection;
        
    } catch ({error}) {
        console.error("something went wrong");
        process.exit(1);
    }
}

